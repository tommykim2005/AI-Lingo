import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { requireAuth } from "../components/auth";
import { Button } from "../components/Button";
import { DuolingoCard } from "../components/card";
import { DuolingoAlert } from "../components/alert";
import { MultipleChoice, TranslateExercise, MatchPairs, CompleteSentence } from "../components/Exercise";
import { Confetti } from "../components/Confetti";
import { lessonData } from "../lib/lessons";
import { ExerciseType } from "../lib/types";

export default function Lessons() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState('ch'); // 'ch' | 'sr'
  const [currentLessonId, setCurrentLessonId] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem("lessonProgress");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [hearts, setHearts] = useState(5);
  const [showAlert, setShowAlert] = useState(null);
  const [locked, setLocked] = useState(false);
  const [sessionXp, setSessionXp] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [xpFly, setXpFly] = useState(false);

  useEffect(() => {
    if (!requireAuth(navigate)) return;
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("lessonProgress", JSON.stringify([...userProgress]));
  }, [userProgress]);

  const startLesson = (lessonId) => {
    setCurrentLessonId(lessonId);
    setCurrentExerciseIndex(0);
    setHearts(5);
    setSessionXp(0);
    setLocked(false);
  };

  const handleAnswer = (answerIsCorrect) => {
    if (locked) return; // prevent further interaction after correct
    if (answerIsCorrect) {
      setLocked(true);
      setShowAlert({ type: "success", message: "Correct!" });
      setSessionXp(prev => prev + 10);
      setXpFly(true);
      setTimeout(() => setXpFly(false), 800);
      // Force progress shortly after correct submission
      setTimeout(() => {
        continueFlow();
      }, 700);
    } else {
      setHearts(prev => prev - 1);
      setShowAlert({ type: "error", message: "Incorrect. Try again." });
      if (hearts <= 1) {
        setCurrentLessonId(null);
        setShowAlert({ type: "error", message: "Out of hearts! Try again from the beginning." });
      }
    }
  };

  const continueFlow = () => {
    const currentLesson = lessonData[currentLessonId];
    if (currentExerciseIndex + 1 >= currentLesson.exercises.length) {
      setUserProgress(prev => new Set([...prev, currentLessonId]));
      // Switch to finish screen state by clearing exercise index beyond range
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowAlert(null);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
      setLocked(false);
      return;
    }
    setCurrentExerciseIndex(prev => prev + 1);
    setShowAlert(null);
    setLocked(false);
  };

  const renderExercise = (exercise) => {
    switch (exercise.type) {
      case ExerciseType.MULTIPLE_CHOICE:
        return (
          <MultipleChoice
            {...exercise}
            locked={locked}
            onAnswer={(option) => handleAnswer(option.correct)}
          />
        );
      case ExerciseType.TRANSLATE:
        return (
          <TranslateExercise
            {...exercise}
            locked={locked}
            onAnswer={(answer) => handleAnswer(answer.toLowerCase() === exercise.targetText.toLowerCase())}
          />
        );
      case ExerciseType.MATCH_PAIRS:
        return (
          <MatchPairs
            {...exercise}
            onComplete={() => handleAnswer(true)}
          />
        );
      case ExerciseType.COMPLETE_SENTENCE:
        return (
          <CompleteSentence
            {...exercise}
            locked={locked}
            onAnswer={(answer) => handleAnswer(answer === exercise.correct)}
          />
        );
      default:
        return null;
    }
  };

  if (currentLessonId) {
    const currentLesson = lessonData[currentLessonId];
    // Auto-extend short lessons with quick review items so every lesson has at least 3
    const baseExercises = currentLesson.exercises || [];
    const extended = [...baseExercises];
    while (extended.length < 3) {
      extended.push({
        type: ExerciseType.MULTIPLE_CHOICE,
        question: `Quick check: ${currentLesson.title} — pick the safest choice`,
        options: [
          { id: 'a', text: 'Think before clicking links', correct: true },
          { id: 'b', text: 'Click all links to see', correct: false },
          { id: 'c', text: 'Share passwords for help', correct: false }
        ]
      });
    }
    const currentExercise = extended[currentExerciseIndex];

    // Finish screen when exercise index moved past last exercise
    if (currentExerciseIndex >= currentLesson.exercises.length) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-duolingo-md p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-duolingo text-duolingo-blue mb-2">Lesson Complete</h2>
            <p className="text-duolingo-gray mb-6">Great job! You earned <span className="font-bold text-duolingo-green">{sessionXp} XP</span>.</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="px-4 py-2 bg-duolingo-blue-light rounded-full text-duolingo-blue-dark text-sm">XP: {sessionXp}</div>
              <div className="px-4 py-2 bg-duolingo-blue-light rounded-full text-duolingo-blue-dark text-sm">Hearts left: {hearts}</div>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => startLesson(currentLessonId)}>Retry</Button>
              <Button onClick={() => { setCurrentLessonId(null); }}>Continue</Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        {/* Progress bar and hearts */}
        <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="w-1/2">
              <div className="h-3 bg-duolingo-blue-light rounded-full overflow-hidden">
                <div
                  className="h-full bg-duolingo-green transition-all duration-300"
                  style={{
                    width: `${(currentExerciseIndex / currentLesson.exercises.length) * 100}%`
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1">
                {[...Array(hearts)].map((_, i) => (
                  <span key={i} className="text-2xl">❤️</span>
                ))}
              </div>
              <div className="px-3 py-1 rounded-full text-sm bg-duolingo-yellow text-[#1b1b1b]">XP: {sessionXp}</div>
            </div>
          </div>
        </div>

        {/* Exercise content */}
        <div className="p-4">
          {renderExercise(currentExercise)}
          {xpFly && (
            <div className="fixed bottom-20 right-6 px-3 py-1 rounded-full bg-duolingo-yellow text-[#1b1b1b] shadow-duolingo animate-fade-in">+10 XP</div>
          )}
        </div>

        {/* Alert */}
        {showAlert && (
          <div className="max-w-4xl mx-auto px-4">
            <DuolingoAlert type={showAlert.type}>
              {showAlert.message}
            </DuolingoAlert>
          </div>
        )}

        {/* Bottom action bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-duolingo-blue-light">
          <div className="max-w-4xl mx-auto p-4">
            <div className="text-center text-sm text-duolingo-gray">Select an answer and press Check</div>
          </div>
        </div>
        {showConfetti && <Confetti />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-duolingo-gray-light p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-duolingo font-bold text-duolingo-blue">
            Choose a Lesson
          </h1>
          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-duolingo">
            <button
              className={`px-4 py-2 rounded-full text-sm ${audience === 'ch' ? 'bg-duolingo-blue text-white' : 'text-duolingo-blue'}`}
              onClick={() => setAudience('ch')}
            >
              Children
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${audience === 'sr' ? 'bg-duolingo-blue text-white' : 'text-duolingo-blue'}`}
              onClick={() => setAudience('sr')}
            >
              Seniors
            </button>
          </div>
        </div>

        {/* Streak / XP Bar */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-duolingo">
            <span>🔥</span>
            <span className="text-sm text-duolingo-ink/80">Streak</span>
            <span className="font-duolingo text-duolingo-orange">1</span>
          </div>
          <div className="flex-1 h-3 bg-duolingo-blue-light rounded-full overflow-hidden">
            <div className="h-full bg-duolingo-purple" style={{ width: '30%' }} />
          </div>
          <div className="bg-white rounded-full px-4 py-2 shadow-duolingo text-sm text-duolingo-ink/80">0 XP today</div>
        </div>
        
        {showAlert && (
          <div className="mb-6">
            <DuolingoAlert type={showAlert.type}>
              {showAlert.message}
            </DuolingoAlert>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(lessonData)
            .filter((lesson) => lesson.id?.startsWith(`dl_${audience}_`))
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((lesson) => {
              const completed = userProgress.has(lesson.id);
              return (
                <DuolingoCard key={lesson.id} title={lesson.title}>
                  <p className="mb-4 text-sm">{lesson.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-duolingo-blue-light text-duolingo-blue rounded-full">
                      {lesson.exercises.length} exercises
                    </span>
                    {completed && (
                      <span className="text-sm text-duolingo-green font-medium">✓ Completed</span>
                    )}
                  </div>
                  <div className="w-full h-2 bg-duolingo-blue-light rounded-full overflow-hidden mb-4">
                    <div className={`h-full ${completed ? 'bg-duolingo-green' : 'bg-duolingo-blue'}`} style={{ width: completed ? '100%' : '0%' }} />
                  </div>
                  <Button onClick={() => startLesson(lesson.id)}>
                    {completed ? 'Review' : 'Start'}
                  </Button>
                </DuolingoCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}