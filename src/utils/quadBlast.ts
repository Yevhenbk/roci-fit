export interface QuadBlastProps {
  name: string,
  category: 'Quadriceps' | 'Full Leg',
  muscleGroup: string,
  link?: string,
  description: string,
  sets: string,
  reps: string,
  isRequired: boolean
}

export const quadBlast: QuadBlastProps[] = [

  // Legs Exercises

  {
    name: 'Deadlifts',
    muscleGroup: 'Legs and Back',
    category: 'Full Leg',
    description: 'A great exercise for building overall strength, with a focus on the back muscles and hamstrings.',
    sets: '1 - 4',
    reps: '1 - 8',
    isRequired: true
  },
  {
    name: 'Front Squats',
    muscleGroup: 'Full Leg',
    category: 'Full Leg',
    description: 'A variation of the squat that places more emphasis on the quads and less on the glutes and hamstrings.',
    sets: '1 - 3',
    reps: '1 - 8',
    isRequired: true
  },
  {
    name: 'Leg Press',
    muscleGroup: 'Quadriceps',
    category: 'Quadriceps',
    description: 'An exercise that targets the quads, with less emphasis on the glutes and hamstrings compared to squats.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
  {
    name: 'Lunges',
    muscleGroup: 'Quadriceps',
    category: 'Quadriceps',
    description: 'Another compound exercise that targets the entire lower body, with a focus on quads and glutes.',
    sets: '3 - 4',
    reps: '8 - 12',
    isRequired: false
  },
  {
    name: 'Single Leg Press',
    muscleGroup: 'Quadriceps',
    category: 'Quadriceps',
    description: 'An exercise that targets the quads, with less emphasis on the glutes and hamstrings compared to squats.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: false
  },
  {
    name: 'Leg Extensions',
    muscleGroup: 'Quadriceps',
    category: 'Quadriceps',
    description: 'An isolation exercise that specifically targets the quads, with minimal involvement from other lower body muscles.',
    sets: '4 - 6',
    reps: '6 - 12',
    isRequired: false
  },
  {
    name: 'Single Leg Extensions',
    muscleGroup: 'Quadriceps',
    category: 'Quadriceps',
    description: 'An isolation exercise that specifically targets the quads, with minimal involvement from other lower body muscles.',
    sets: '4 - 6',
    reps: '6 - 12',
    isRequired: false
  },
]