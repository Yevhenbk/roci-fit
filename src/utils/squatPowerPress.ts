export interface SquatPowerPressProps {
  name: string,
  category: 'Legs' | 'Shoulders' | 'Chest',
  muscleGroup: string,
  link?: string,
  description: string,
  sets: string,
  reps: string,
  isRequired: boolean
}

export const squatPowerPress: SquatPowerPressProps[] = [

  // Legs Exercises
  
  {
    name: 'Squats',
    muscleGroup: 'Full Leg',
    category: 'Legs',
    description: 'A compound exercise that targets the entire lower body, including quads, hamstrings, glutes, and calves.',
    sets: '1 - 4',
    reps: '1 - 8',
    isRequired: true
  },
  {
    name: 'Lunges',
    muscleGroup: 'Full Leg',
    category: 'Legs',
    description: 'Another compound exercise that targets the entire lower body, with a focus on quads and glutes.',
    sets: '3 - 4',
    reps: '8 - 12',
    isRequired: false
  },
  {
    name: 'Leg Press',
    muscleGroup: 'Quadriceps',
    category: 'Legs',
    description: 'An exercise that targets the quads, with less emphasis on the glutes and hamstrings compared to squats.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: false
  },
  {
    name: 'Leg Extensions',
    muscleGroup: 'Quadriceps',
    category: 'Legs',
    description: 'An isolation exercise that specifically targets the quads, with minimal involvement from other lower body muscles.',
    sets: '4 - 6',
    reps: '6 - 12',
    isRequired: false
  },
  {
    name: 'Calf Raises',
    muscleGroup: 'Calves',
    category: 'Legs',
    description: 'Targets your calves. Stand with your feet shoulder-width apart, rise up onto the balls of your feet, then lower back down.',
    sets: '2 - 4',
    reps: '6 - 12',
    isRequired: false
  },

  // Shoulder Exercises

  {
    name: 'Overhead Press',
    muscleGroup: 'Shoulder',
    category: 'Shoulders',
    description: 'A compound exercise that targets the shoulders and triceps. Stand with a barbell or dumbbells at shoulder height, then press the weight overhead.',
    sets: '1 - 3',
    reps: '1 - 6',
    isRequired: true
  },

  // Chest Exercises

  {
    name: 'Bench Press',
    muscleGroup: 'Chest',
    category: 'Chest',
    description: 'A compound exercise that targets the chest, shoulders, and triceps. Lie on a bench and press a barbell or dumbbells up and down.',
    sets: '1 - 3',
    reps: '1 - 8',
    isRequired: true
  },
  {
    name: 'Incline Bench Press',
    muscleGroup: 'Upper Chest',
    category: 'Chest',
    description: 'A variation of the bench press that targets the upper chest. Lie on an incline bench and press a barbell or dumbbells up and down.',
    sets: '2 - 4',
    reps: '6 - 10',
    isRequired: false
  },
  {
    name: 'Bench Dips',
    muscleGroup: 'Lower Chest',
    category: 'Chest',
    description: 'Dips are a bodyweight exercise that primarily target the chest, triceps, and shoulders, involving lowering and raising the body by bending and extending the arms while supporting the bodyweight on parallel bars or a bench.',
    sets: '2 - 4',
    reps: '6 - 10',
    isRequired: false
  },
  {
    name: 'Dumbbell Flys',
    muscleGroup: 'Chest',
    category: 'Chest',
    description: 'An isolation exercise that targets the chest. Lie on a bench with a dumbbell in each hand, lower the weights out to the side, and then bring them back up in a hugging motion.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: false
  },
]