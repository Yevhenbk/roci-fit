export interface ArmsAndIsolationProps {
  name: string,
  category: 'Glutes' | 'Bicep' | 'Tricep',
  muscleGroup: string,
  link?: string,
  description: string,
  sets: string,
  reps: string,
  isRequired: boolean
}

export const armsAndIsolation: ArmsAndIsolationProps[] = [

  // Glutes Exercises

  {
    name: 'Hip Thrusts',
    muscleGroup: 'Glutes',
    category: 'Glutes',
    description: 'Targets your glutes. Sit on the ground with a bench behind you, roll a barbell over your hips, and rest your shoulder blades on the bench. Drive through your heels to lift your hips and squeeze your glutes at the top.',
    sets: '1 - 4',
    reps: '1 - 12',
    isRequired: true
  },
  {
    name: 'Leg Cable Raises',
    muscleGroup: 'Glutes',
    category: 'Glutes',
    description: 'A resistance exercise that targets the glutes, hamstrings, and calves. Stand facing the cable machine, attach the ankle cuff to your ankle, and kick your leg back while keeping your knee straight, squeezing your glutes at the top.',
    sets: '2 - 4',
    reps: '6 - 20',
    isRequired: false
  },
  {
    name: 'Glute Bridges',
    muscleGroup: 'Glutes',
    category: 'Glutes',
    description: 'Targets your glutes. Lie on your back with your knees bent, feet flat on the floor, and lift your hips up to create a straight line from your shoulders to your knees. Squeeze your glutes at the top.',
    sets: '2 - 4',
    reps: '6 - 20',
    isRequired: false
  },
  {
    name: 'Abduction',
    muscleGroup: 'Outer Thighs and Glutes',
    category: 'Glutes',
    description: 'A machine-based exercise that targets the outer thighs and glutes, performed by sitting upright and pushing the legs outward against resistance.',
    sets: '2 - 4',
    reps: '6 - 20',
    isRequired: false
  },
  {
    name: 'Adduction',
    muscleGroup: 'Inner Thighs',
    category: 'Glutes',
    description: 'A machine-based exercise that targets the adductor muscles of the inner thighs, where you sit with your legs positioned inwards and push against the pads with your inner thighs to bring your legs together.',
    sets: '2 - 4',
    reps: '6 - 20',
    isRequired: false
  },

  // Bicep Exercises

  {
    name: 'Dumbbell Curls',
    muscleGroup: 'Bicep',
    category: 'Bicep',
    description: 'An isolation exercise that targets the biceps.',
    sets: '2 - 4',
    reps: '8 - 16',
    isRequired: true
  },
  {
    name: 'Hammer Curls',
    muscleGroup: 'Bicep and Forearms',
    category: 'Bicep',
    description: 'An exercise that targets the biceps and forearms, with a neutral grip for added forearm activation.',
    sets: '2 - 4',
    reps: '8 - 16',
    isRequired: false
  },
  {
    name: 'Chin-ups',
    muscleGroup: 'Bicep and Upper Back',
    category: 'Bicep',
    description: 'A bodyweight exercise that targets the biceps and upper back muscles.',
    sets: '2 - 3',
    reps: '1 - 8',
    isRequired: false
  },

  // Tricep Exercises

  {
    name: 'Triceps Extension',
    muscleGroup: 'Tricep',
    category: 'Tricep',
    description: 'An isolation exercise that targets the triceps, with a focus on the long head of the muscle. Use a dumbbell or cable machine to perform the exercise.',
    sets: '2 - 4',
    reps: '8 - 12',
    isRequired: true
  },
  {
    name: 'Close-Grip Bench Press',
    muscleGroup: 'Tricep and Chest',
    category: 'Tricep',
    description: 'An exercise that targets the triceps, with some involvement from the chest and shoulders.',
    sets: '2 - 3',
    reps: '6 - 12',
    isRequired: false
  },
  {
    name: 'Bench Dips',
    muscleGroup: 'Tricep and Lower Chest',
    category: 'Tricep',
    description: 'Dips are a bodyweight exercise that primarily target the chest, triceps, and shoulders, involving lowering and raising the body by bending and extending the arms while supporting the bodyweight on parallel bars or a bench.',
    sets: '2 - 4',
    reps: '6 - 10',
    isRequired: false
  },
]