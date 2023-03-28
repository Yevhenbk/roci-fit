export interface AbsExercisesProps {
  name: string
  category: 'Upper Abs' | 'Lower Abs' | 'Obliques'
  videoLink: string
  description: string
  sets: string
  reps: string
}

export const absExercises: AbsExercisesProps[] = [
  // Upper Abs Exercises
  {
    name: "Crunches",
    category: "Upper Abs",
    videoLink: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
    description: "Lie on your back with your knees bent, lift your head and shoulders off the ground by contracting your abdominal muscles.",
    sets: '2 - 6',
    reps: '20 - 50'
  },
  {
    name: "Sit-Ups",
    category: "Upper Abs",
    videoLink: "https://www.youtube.com/watch?v=1fbU_MkV7NE",
    description: "Lie on your back with your knees bent, lift your upper body off the ground by contracting your abdominal muscles and sit up to a seated position.",
    sets: '2 - 6',
    reps: '20 - 50'
  },
  {
    name: "Bicycle Crunches",
    category: "Upper Abs",
    videoLink: "https://www.youtube.com/watch?v=9FGilxCbdz8",
    description: "Lie on your back with your knees bent and your hands behind your head, alternate bringing your opposite elbow and knee towards each other in a bicycling motion.",
    sets: '2 - 4',
    reps: '20 - 50'
  },
  // Lower Abs Exercises
  {
    name: "Reverse Crunches",
    category: "Lower Abs",
    videoLink: "https://www.youtube.com/watch?v=JB2oyawG9KI",
    description: "Lie on your back with your legs extended up towards the ceiling, lift your hips off the ground by contracting your lower abdominal muscles and bring your knees towards your chest.",
    sets: '2 - 4',
    reps: '10 - 20'
  },
  {
    name: "Leg Raises",
    category: "Lower Abs",
    videoLink: "https://www.youtube.com/watch?v=JB2oyawG9KI",
    description: "Lie on your back with your legs extended and lift your legs towards the ceiling by contracting your lower abdominal muscles.",
    sets: '2 - 4',
    reps: '20 - 50'
  },
  {
    name: "Flutter Kicks",
    category: "Lower Abs",
    videoLink: "https://www.youtube.com/watch?v=LnG1TJNDRJc",
    description: "Lie on your back with your legs extended, alternate lifting each leg up and down while keeping them straight.",
    sets: '2 - 4',
    reps: '10 - 20'
  },
  // Oblique Exercises
  {
    name: "Russian Twists",
    category: "Obliques",
    videoLink: "https://www.youtube.com/watch?v=0AugsuVXR9A",
    description: "Sit on the ground with your knees bent and feet flat on the ground, lean back slightly and twist your torso from side to side while holding a weight or medicine ball.",
    sets: '2 - 4',
    reps: '20 - 30'
  },
  {
    name: "Side Planks",
    category: "Obliques",
    videoLink: "https://www.youtube.com/watch?v=Asc2LkkHYiA",
    description: "Lie on your side with your legs extended and prop yourself up on your elbow, lift your hips off the ground and hold the position while contracting your oblique muscles.",
    sets: '2 - 6',
    reps: '-'
  },
  {
    name: "Oblique Crunches",
    category: "Obliques",
    videoLink: "https://www.youtube.com/watch?v=_lfNQcQ9GX8",
    description: "Lie on your back with your knees bent and feet flat on the ground, cross one ankle over the opposite knee and lift your head and shoulders off the ground while bringing",
    sets: '2 - 6',
    reps: '10 - 20'
  }
]