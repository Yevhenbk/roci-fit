export interface BackAndArmsExercisesProps {
  name: string,
  category: 'Back' | 'Biceps' | 'Triceps',
  videoLink: string,
  description: string,
  sets: string,
  reps: string,
}

export const backAndArmsExercises: BackAndArmsExercisesProps[] = [
  // Back Exercises
  {
    name: 'Deadlifts',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
    description: 'A great exercise for building overall strength, with a focus on the back muscles and hamstrings.',
    sets: '1 - 4',
    reps: '1 - 8',
  },
  {
    name: 'Pull-ups',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=HRVVsP63ZpY',
    description: 'A bodyweight exercise that targets the upper back muscles and biceps.',
    sets: '1 - 4',
    reps: '1 - 8',
  },
  {
    name: 'Barbell Rows',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=ZlRrIsoDpKg',
    description: 'An exercise that targets the middle and lower back muscles, as well as the biceps.',
    sets: '1 - 4',
    reps: '4 - 8',
  },
  {
    name: 'Cable Rows',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=ZlRrIsoDpKg',
    description: 'An exercise that targets the middle and lower back muscles, as well as the biceps. Alterned version of barbell row.',
    sets: '1 - 4',
    reps: '4 - 8',
  },
  {
    name: 'Lat Pulldowns',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=9efgcAjQeJU',
    description: 'Targets the upper and middle back muscles, as well as the biceps.',
    sets: '2 - 4',
    reps: '8 - 12',
  },
  {
    name: 'Lat Pushdowns',
    category: 'Back',
    videoLink: 'https://www.youtube.com/watch?v=9efgcAjQeJU',
    description: 'An isolation exercise that targets the lats, involving pulling a cable handle down and out to the side of the body.',
    sets: '2 - 4',
    reps: '8 - 12',
  },

  // Biceps Exercises
  {
    name: 'Dumbbell Curls',
    category: 'Biceps',
    videoLink: 'https://www.youtube.com/watch?v=EI8gWYQF9Zs',
    description: 'An isolation exercise that targets the biceps.',
    sets: '2 - 4',
    reps: '8 - 16',
  },
  {
    name: 'Hammer Curls',
    category: 'Biceps',
    videoLink: 'https://www.youtube.com/watch?v=TwD-YGVP4Bk',
    description: 'An exercise that targets the biceps and forearms, with a neutral grip for added forearm activation.',
    sets: '2 - 4',
    reps: '8 - 16',
  },
  {
    name: 'Chin-ups',
    category: 'Biceps',
    videoLink: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    description: 'A bodyweight exercise that targets the biceps and upper back muscles.',
    sets: '2 - 3',
    reps: '1 - 8',
  },

  // Triceps Exercises
  {
    name: 'Close-Grip Bench Press',
    category: 'Triceps',
    videoLink: 'https://www.youtube.com/watch?v=nEFtVHrZaXs',
    description: 'An exercise that targets the triceps, with some involvement from the chest and shoulders.',
    sets: '2 - 3',
    reps: '6 - 12',
  },
  {
    name: 'Dips',
    category: 'Triceps',
    videoLink: 'https://www.youtube.com/watch?v=2z8JmcrW-As',
    description: 'A bodyweight exercise that targets the triceps and chest muscles.',
    sets: '2 - 3',
    reps: '6 - 12',
  },
  {
    name: 'Triceps Extension',
    category: 'Triceps',
    videoLink: 'https://www.youtube.com/watch?v=Oy1lvoGZgOw',
    description: 'An isolation exercise that targets the triceps, with a focus on the long head of the muscle. Use a dumbbell or cable machine to perform the exercise.',
    sets: '2 - 4',
    reps: '8 - 12',
  },
]