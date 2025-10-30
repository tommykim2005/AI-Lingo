import React from 'react';
import { ExerciseType } from '../lib/types';
import { DuolingoCard } from './card';

export function MultipleChoice({ question, options, onAnswer, image, locked = false }) {
  const [selectedId, setSelectedId] = React.useState(null);

  const handleCheck = () => {
    const selected = options.find(o => o.id === selectedId);
    if (selected) onAnswer(selected);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-8 text-center">
        {image && (
          <img src={image} alt="" className="w-32 h-32 mx-auto mb-4 object-contain" />
        )}
        <h2 className="text-2xl font-duolingo text-gray-800 mb-6">{question}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => !locked && setSelectedId(option.id)}
            disabled={locked}
            className={`p-4 border-2 rounded-xl text-left flex items-center gap-3 transition-all duration-200 focus:outline-none 
              ${selectedId === option.id ? 'border-duolingo-blue bg-duolingo-blue-light/40 scale-[1.02]' : 'border-duolingo-gray/20 hover:border-duolingo-blue hover:scale-[1.01]'} ${locked ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center ${selectedId === option.id ? 'border-duolingo-blue' : 'border-duolingo-gray/30'}`}>
              {selectedId === option.id && <div className="w-3 h-3 rounded-full bg-duolingo-blue" />}
            </div>
            <span className="text-lg">{option.text}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => !locked && handleCheck()}
        disabled={!selectedId || locked}
        className="w-full py-3 bg-duolingo-blue text-white font-bold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-duolingo-blue-dark transition-colors"
      >
        Check
      </button>
    </div>
  );
}

export function TranslateExercise({ prompt, text, wordBank, onAnswer, locked = false }) {
  const [selectedWords, setSelectedWords] = React.useState([]);

  const handleWordClick = (word, inAnswer) => {
    if (locked) return;
    if (inAnswer) {
      setSelectedWords(prev => prev.filter(w => w !== word));
    } else {
      setSelectedWords(prev => [...prev, word]);
    }
  };

  const handleCheck = () => {
    if (!locked) onAnswer(selectedWords.join(' '));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <p className="text-duolingo-gray mb-2">{prompt}</p>
      <p className="text-2xl font-duolingo mb-8">{text}</p>
      
      <div className="min-h-[100px] p-4 bg-gray-50 rounded-xl mb-6 flex flex-wrap gap-2">
        {selectedWords.map((word, i) => (
          <button
            key={i}
            onClick={() => handleWordClick(word, true)}
            className="px-3 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {wordBank.map((word, i) => (
          <button
            key={i}
            onClick={() => handleWordClick(word, false)}
            disabled={selectedWords.includes(word) || locked}
            className="px-3 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {word}
          </button>
        ))}
      </div>

      <button
        onClick={handleCheck}
        disabled={selectedWords.length === 0 || locked}
        className="w-full py-3 bg-duolingo-green text-white font-bold rounded-2xl
                 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:bg-duolingo-green/90 transition-colors"
      >
        Check
      </button>
    </div>
  );
}

export function MatchPairs({ pairs, onComplete }) {
  const [selectedPair, setSelectedPair] = React.useState(null);
  const [matchedPairs, setMatchedPairs] = React.useState(new Set());
  const [lastMatch, setLastMatch] = React.useState(null);
  
  const shuffledRight = React.useMemo(() => 
    [...pairs].sort(() => Math.random() - 0.5).map(p => p.right),
    [pairs]
  );

  const handleClick = (word, isLeft) => {
    if (selectedPair === null) {
      setSelectedPair({ word, isLeft });
    } else {
      if (selectedPair.isLeft !== isLeft) {
        const pair = pairs.find(p => 
          (selectedPair.isLeft && p.left === selectedPair.word && p.right === word) ||
          (!selectedPair.isLeft && p.right === selectedPair.word && p.left === word)
        );
        
        if (pair) {
          setMatchedPairs(prev => new Set([...prev, pair.left]));
          setLastMatch(pair.left);
          if (matchedPairs.size + 1 === pairs.length) {
            onComplete();
          }
        }
      }
      setSelectedPair(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-duolingo text-gray-800 mb-6 text-center">
        Match the pairs
      </h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {pairs.map(({ left }, i) => (
            <button
              key={i}
              onClick={() => !matchedPairs.has(left) && handleClick(left, true)}
              className={`w-full p-3 rounded-xl text-left
                ${matchedPairs.has(left) 
                  ? 'bg-duolingo-green/10 text-duolingo-green' 
                  : 'bg-white border-2 border-duolingo-gray/20 hover:border-duolingo-blue'}
                ${selectedPair?.word === left ? 'border-duolingo-blue' : ''} ${lastMatch===left ? 'animate-bounce-in' : ''}`}
              disabled={matchedPairs.has(left)}
            >
              {matchedPairs.has(left) ? `✓ ${left}` : left}
            </button>
          ))}
        </div>
        
        <div className="space-y-3">
          {shuffledRight.map((right, i) => (
            <button
              key={i}
              onClick={() => handleClick(right, false)}
              className={`w-full p-3 rounded-xl text-left bg-white border-2 transition-all border-duolingo-gray/20 
                ${selectedPair?.word === right ? 'border-duolingo-blue bg-duolingo-blue-light/40' : 'hover:border-duolingo-blue'} 
                ${matchedPairs.has(pairs.find(p => p.right === right)?.left) ? 'bg-duolingo-green/10 text-duolingo-green animate-bounce-in' : ''}`}
              disabled={matchedPairs.has(pairs.find(p => p.right === right)?.left)}
            >
              {matchedPairs.has(pairs.find(p => p.right === right)?.left) ? `✓ ${right}` : right}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompleteSentence({ prompt, sentence, options, onAnswer, locked = false }) {
  const [selected, setSelected] = React.useState(null);

  const handleCheck = () => {
    if (selected !== null) onAnswer(selected);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <p className="text-duolingo-gray mb-2">{prompt}</p>
      <p className="text-2xl font-duolingo mb-8">{sentence}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => !locked && setSelected(option)}
            disabled={locked}
            className={`p-4 text-lg bg-white border-2 rounded-xl transition-colors 
              ${selected === option ? 'border-duolingo-blue' : 'border-duolingo-gray/20 hover:border-duolingo-blue'} ${locked ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleCheck}
        disabled={selected === null || locked}
        className="w-full py-3 bg-duolingo-blue text-white font-bold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-duolingo-blue-dark transition-colors"
      >
        Check
      </button>
    </div>
  );
}