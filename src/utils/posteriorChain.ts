export interface PosteriorChainProps {
  name: string,
  category: 'Legs' | 'Back' | 'Shoulder',
  muscleGroup: string,
  link?: string,
  description: string,
  sets: string,
  reps: string,
  isRequired: boolean
}

export const posteriorChain: PosteriorChainProps[] = [

  // Legs Exercises
  
  {
    name: 'Snatch Grip Deadlift',
    muscleGroup: 'Full Leg',
    category: 'Legs',
    description: 'The snatch grip deadlift is a weightlifting exercise that involves lifting a barbell from the floor using a wider grip than a traditional deadlift, primarily targeting the back, hips, and legs while also engaging the shoulders and arms.',
    sets: '1 - 4',
    reps: '1 - 8',
    isRequired: true
  },
  {
    name: 'Romanian Deadlifts',
    muscleGroup: 'Hamstrings',
    category: 'Legs',
    description: 'An exercise that targets the hamstrings, with less emphasis on the glutes and lower back compared to regular deadlifts.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
  {
    name: 'Hyperextentions',
    muscleGroup: 'Hamstrings',
    category: 'Legs',
    description: 'An exercise that targets the hamstrings and glutes, with a focus on the eccentric phase of the movement.',
    sets: '3 - 4',
    reps: '8 - 16',
    isRequired: false
  },
  {
    name: 'Lying Leg Curls',
    muscleGroup: 'Hamstrings',
    category: 'Legs',
    description: 'An isolation exercise that specifically targets the hamstrings, with minimal involvement from other lower body muscles.',
    sets: '3 - 4',
    reps: '8 - 12',
    isRequired: false
  },

  // Back Exercises

  {
    name: 'Lat Pulldowns',
    muscleGroup: 'Upper and Middle Back',
    category: 'Back',
    description: 'Targets the upper and middle back muscles, as well as the biceps.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
  {
    name: 'Cable Rows',
    muscleGroup: 'Middle and Lower Back',
    category: 'Back',
    description: 'An exercise that targets the middle and lower back muscles, as well as the biceps. Alterned version of barbell row.',
    sets: '1 - 4',
    reps: '4 - 8',
    isRequired: true
  },
  {
    name: 'Barbell Rows',
    muscleGroup: 'Middle and Lower Back',
    category: 'Back',
    description: 'An exercise that targets the middle and lower back muscles, as well as the biceps.',
    sets: '1 - 4',
    reps: '4 - 8',
    isRequired: false
  },
  {
    name: 'Single Arm Cable Row',
    muscleGroup: 'Middle and Lower Back',
    category: 'Back',
    description: 'An exercise that targets the middle and lower back muscles, as well as the biceps. Alterned version of barbell row.',
    sets: '1 - 4',
    reps: '4 - 8',
    isRequired: false
  },
  {
    name: 'Pull-ups',
    muscleGroup: 'Upper Back',
    category: 'Back',
    description: 'A bodyweight exercise that targets the upper back muscles and biceps.',
    sets: '1 - 4',
    reps: '1 - 8',
    isRequired: false
  },
  {
    name: 'Lat Pulldowns',
    muscleGroup: 'Lats',
    category: 'Back',
    description: 'Targets lateral back muscles.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: false
  },

  // Shoulder Exercises

  {
    name: 'Lateral Raises',
    muscleGroup: 'Middle Delt',
    category: 'Shoulder',
    description: 'An isolation exercise that targets the medial (side) deltoids. Stand with a dumbbell or a plate in each hand and raise the weights out to the side until they reach shoulder height.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
  {
    name: 'Front Raises',
    muscleGroup: 'Front Delt',
    category: 'Shoulder',
    description: 'An isolation exercise that targets the anterior (front) deltoids. Stand with a plate in both hands and raise the weight out in front of you until it reaches shoulder height.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
]