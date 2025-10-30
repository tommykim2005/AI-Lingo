import { ExerciseType } from './types';

// Digital Literacy curriculum derived from the shared lesson plan.
// Two tracks: Children (ch) and Seniors (sr). Use ids prefixed with dl_[track]_[n].
export const lessonData = {
  // Track selector will filter by id prefix in the UI

  // Lesson 1: What is Digital Literacy?
  dl_ch_1: {
    id: 'dl_ch_1',
    title: 'What is Digital Literacy?',
    description: 'Understand what digital literacy means and why it matters.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What is digital literacy?',
        options: [
          { id: 'a', text: 'Knowing how to use a computer safely.', correct: true },
          { id: 'b', text: 'Writing on paper.', correct: false },
          { id: 'c', text: 'Talking on the phone.', correct: false }
        ]
      },
      {
        type: ExerciseType.COMPLETE_SENTENCE,
        prompt: 'Complete the idea',
        sentence: 'Digital literacy helps you stay ____ online.',
        options: ['safe', 'silent', 'offline', 'invisible'],
        correct: 'safe'
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Which of these is part of digital literacy?',
        options: [
          { id: 'a', text: 'Recognizing scams', correct: true },
          { id: 'b', text: 'Running races', correct: false },
          { id: 'c', text: 'Cooking pasta', correct: false }
        ]
      }
    ]
  },
  dl_sr_1: {
    id: 'dl_sr_1',
    title: 'What is Digital Literacy?',
    description: 'Everyday uses of digital literacy and why it matters.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Why is digital literacy important?',
        options: [
          { id: 'a', text: 'It helps you use online services like banking and healthcare safely.', correct: true },
          { id: 'b', text: 'It’s only for students.', correct: false },
          { id: 'c', text: 'It doesn’t matter anymore.', correct: false }
        ]
      }
    ]
  },

  // Lesson 2: Using a Computer or Tablet
  dl_ch_2: {
    id: 'dl_ch_2',
    title: 'Using a Computer or Tablet',
    description: 'Learn basic parts and what they do.',
    exercises: [
      {
        type: ExerciseType.MATCH_PAIRS,
        pairs: [
          { left: '🖱️ Mouse', right: 'Click things on the screen' },
          { left: '⌨️ Keyboard', right: 'Type words' },
          { left: '🧠 Brain', right: 'Think' }
        ]
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Which tool types letters on screen?',
        options: [
          { id: 'a', text: 'Keyboard', correct: true },
          { id: 'b', text: 'Mouse', correct: false },
          { id: 'c', text: 'Monitor', correct: false }
        ]
      }
    ]
  },
  dl_sr_2: {
    id: 'dl_sr_2',
    title: 'Using a Computer or Tablet',
    description: 'Device basics and the home button.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What does the “home” button do?',
        options: [
          { id: 'a', text: 'Brings you back to the main screen', correct: true },
          { id: 'b', text: 'Turns off the internet', correct: false },
          { id: 'c', text: 'Deletes files', correct: false }
        ]
      }
    ]
  },

  // Lesson 3: Internet Basics
  dl_ch_3: {
    id: 'dl_ch_3',
    title: 'Internet Basics',
    description: 'How to search the web.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What do you type in Google to find something?',
        options: [
          { id: 'a', text: 'A question or word', correct: true },
          { id: 'b', text: 'A secret code', correct: false },
          { id: 'c', text: 'Random letters', correct: false }
        ]
      }
    ]
  },
  dl_sr_3: {
    id: 'dl_sr_3',
    title: 'Internet Basics',
    description: 'What browsers and address bars are.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What does the address bar show?',
        options: [
          { id: 'a', text: 'The website’s link', correct: true },
          { id: 'b', text: 'Your home address', correct: false },
          { id: 'c', text: 'Your password', correct: false }
        ]
      },
      {
        type: ExerciseType.COMPLETE_SENTENCE,
        prompt: 'Complete the sentence',
        sentence: 'Use the ____ to search the web.',
        options: ['search bar', 'address book', 'calculator', 'notes'],
        correct: 'search bar'
      }
    ]
  },

  // Lesson 4: Online Safety
  dl_ch_4: {
    id: 'dl_ch_4',
    title: 'Online Safety',
    description: 'Recognize safe and unsafe behavior.',
    exercises: [
      {
        type: ExerciseType.MATCH_PAIRS,
        pairs: [
          { left: 'Don’t share passwords', right: '👍' },
          { left: 'Click unknown links', right: '👎' }
        ]
      }
    ]
  },
  dl_sr_4: {
    id: 'dl_sr_4',
    title: 'Online Safety',
    description: 'Spot suspicious emails and scams.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'You get an email saying you won a prize. What should you do?',
        options: [
          { id: 'a', text: 'Click the link', correct: false },
          { id: 'b', text: 'Ignore or report it', correct: true },
          { id: 'c', text: 'Share with friends', correct: false }
        ]
      },
      {
        type: ExerciseType.TRANSLATE,
        prompt: 'Write what you would type to verify a company',
        text: 'Search for the company name plus the word "reviews"',
        targetText: 'company reviews',
        wordBank: ['company', 'help', 'click', 'reviews', 'password']
      }
    ]
  },

  // Lesson 5: Communication Online
  dl_ch_5: {
    id: 'dl_ch_5',
    title: 'Communication Online',
    description: 'Be kind and safe online.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Which is the kind response?',
        options: [
          { id: 'a', text: 'Your drawing is bad!', correct: false },
          { id: 'b', text: 'That’s a nice try!', correct: true }
        ]
      }
    ]
  },
  dl_sr_5: {
    id: 'dl_sr_5',
    title: 'Communication Online',
    description: 'Use messaging apps safely and avoid scams.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What’s a sign a message might be a scam?',
        options: [
          { id: 'a', text: 'It asks for personal info or money', correct: true },
          { id: 'b', text: 'It’s from a friend', correct: false },
          { id: 'c', text: 'It has emojis', correct: false }
        ]
      }
    ]
  },

  // Lesson 6: Creating and Sharing Content
  dl_ch_6: {
    id: 'dl_ch_6',
    title: 'Creating and Sharing',
    description: 'Create and share responsibly.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Should you post your home address with your art?',
        options: [
          { id: 'a', text: 'No', correct: true },
          { id: 'b', text: 'Yes', correct: false },
          { id: 'c', text: 'Maybe', correct: false }
        ]
      }
    ]
  },
  dl_sr_6: {
    id: 'dl_sr_6',
    title: 'Creating and Sharing',
    description: 'What’s safe to share online.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What’s safe to share online?',
        options: [
          { id: 'a', text: 'Vacation photos (after returning)', correct: true },
          { id: 'b', text: 'Bank info', correct: false },
          { id: 'c', text: 'Passwords', correct: false }
        ]
      }
    ]
  },

  // Lesson 7: Digital Footprint
  dl_ch_7: {
    id: 'dl_ch_7',
    title: 'Digital Footprint',
    description: 'What stays online after you post.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What’s a “digital footprint”?',
        options: [
          { id: 'a', text: 'The trail of things you do online', correct: true },
          { id: 'b', text: 'Footprints on the beach', correct: false }
        ]
      }
    ]
  },
  dl_sr_7: {
    id: 'dl_sr_7',
    title: 'Digital Footprint',
    description: 'Think before you post.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What should you do before posting?',
        options: [
          { id: 'a', text: 'Think if it’s okay for anyone to see', correct: true },
          { id: 'b', text: 'Post immediately', correct: false },
          { id: 'c', text: 'Nothing matters', correct: false }
        ]
      }
    ]
  },

  // Lesson 8: Cyberbullying and Respect
  dl_ch_8: {
    id: 'dl_ch_8',
    title: 'Cyberbullying and Respect',
    description: 'Recognize and prevent bullying.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Someone sends a mean message. What do you do?',
        options: [
          { id: 'a', text: 'Tell a teacher or parent', correct: true },
          { id: 'b', text: 'Be mean back', correct: false },
          { id: 'c', text: 'Ignore forever', correct: false }
        ]
      }
    ]
  },
  dl_sr_8: {
    id: 'dl_sr_8',
    title: 'Cyberbullying and Respect',
    description: 'What to do if scammed or harassed.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Who can you report it to?',
        options: [
          { id: 'a', text: 'Site support or family', correct: true },
          { id: 'b', text: 'No one', correct: false },
          { id: 'c', text: 'Ignore completely', correct: false }
        ]
      }
    ]
  },

  // Lesson 9: Online Shopping and Banking
  dl_ch_9: {
    id: 'dl_ch_9',
    title: 'Apps and Purchases',
    description: 'Be aware of in‑app purchases.',
    exercises: [
      {
        type: ExerciseType.COMPLETE_SENTENCE,
        prompt: 'Complete the safe choice',
        sentence: 'Ask a _____ before buying in an app.',
        options: ['parent', 'stranger', 'friend'],
        correct: 'parent'
      }
    ]
  },
  dl_sr_9: {
    id: 'dl_sr_9',
    title: 'Online Shopping and Banking',
    description: 'Recognize secure websites.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Which website is safe?',
        options: [
          { id: 'a', text: 'https://bank.com', correct: true },
          { id: 'b', text: 'http://freeprizes.ru', correct: false },
          { id: 'c', text: 'bank.fake.com', correct: false }
        ]
      }
    ]
  },

  // Lesson 10: Review and Certification
  dl_ch_10: {
    id: 'dl_ch_10',
    title: 'Review Quiz',
    description: 'Mixed review from previous lessons.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'What should you do with a suspicious link?',
        options: [
          { id: 'a', text: 'Click it quickly', correct: false },
          { id: 'b', text: 'Ignore or report it', correct: true },
          { id: 'c', text: 'Send it to friends', correct: false }
        ]
      },
      {
        type: ExerciseType.COMPLETE_SENTENCE,
        prompt: 'Complete the idea',
        sentence: 'A digital footprint is the _____ you leave online.',
        options: ['trail', 'password', 'email'],
        correct: 'trail'
      }
    ]
  },
  dl_sr_10: {
    id: 'dl_sr_10',
    title: 'Final Review',
    description: 'Certification-style mixed quiz.',
    exercises: [
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'Before posting, you should…',
        options: [
          { id: 'a', text: 'Think who might see it', correct: true },
          { id: 'b', text: 'Post immediately', correct: false },
          { id: 'c', text: 'Share private info if needed', correct: false }
        ]
      },
      {
        type: ExerciseType.MULTIPLE_CHOICE,
        question: 'A safe password habit is…',
        options: [
          { id: 'a', text: 'Sharing with friends', correct: false },
          { id: 'b', text: 'Using strong, unique passwords', correct: true },
          { id: 'c', text: 'Writing it on your profile', correct: false }
        ]
      }
    ]
  }
};