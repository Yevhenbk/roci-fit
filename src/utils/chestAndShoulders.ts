export interface ChestAndShouldersExercisesProps {
  name: string
  category: 'Chest' | 'Shoulders'
  videoLink: string
  description: string
  sets: string
  reps: string
}

export const chestAndShouldersExercises: ChestAndShouldersExercisesProps[] = [
  // Chest Exercises
  {
    name: 'Bench Press',
    category: 'Chest',
    videoLink: 'https://www.youtube.com/watch?v=gRVjAtPip0Y',
    description: 'A compound exercise that targets the chest, shoulders, and triceps. Lie on a bench and press a barbell or dumbbells up and down.',
    sets: '1 - 3',
    reps: '1 - 8'
  },
  {
    name: 'Incline Bench Press',
    category: 'Chest',
    videoLink: 'https://www.youtube.com/watch?v=ZL4MGwlZuac',
    description: 'A variation of the bench press that targets the upper chest. Lie on an incline bench and press a barbell or dumbbells up and down.',
    sets: '2 - 4',
    reps: '6 - 10'
  },
  {
    name: 'Dumbbell Flys',
    category: 'Chest',
    videoLink: 'https://www.youtube.com/watch?v=1nRRlk6264I',
    description: 'An isolation exercise that targets the chest. Lie on a bench with a dumbbell in each hand, lower the weights out to the side, and then bring them back up in a hugging motion.',
    sets: '2 - 4',
    reps: '8 - 12'
  },
  // Shoulder Exercises
  {
    name: 'Overhead Press',
    category: 'Shoulders',
    videoLink: 'https://www.youtube.com/watch?v=8wJbI3wVJ5U',
    description: 'A compound exercise that targets the shoulders and triceps. Stand with a barbell or dumbbells at shoulder height, then press the weight overhead.',
    sets: '1 - 3',
    reps: '1 - 6'
  },
  {
    name: 'Lateral Raises',
    category: 'Shoulders',
    videoLink: 'https://www.youtube.com/watch?v=OvODG6YzL5g',
    description: 'An isolation exercise that targets the medial (side) deltoids. Stand with a dumbbell in each hand and raise the weights out to the side until they reach shoulder height.',
    sets: '2 - 4',
    reps: '8 - 12'
  },
  {
    name: 'Front Raises',
    category: 'Shoulders',
    videoLink: 'https://www.youtube.com/watch?v=ZOiRJlK5aGk',
    description: 'An isolation exercise that targets the anterior (front) deltoids. Stand with a plate in both hands and raise the weight out in front of you until they reach shoulder height.',
    sets: '2 - 4',
    reps: '8 - 12'
  },
]