import { FC } from 'react'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import Header from '@UI/Header/Header'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import { chestAndShouldersExercises, ChestAndShouldersExercisesProps } from '@utils/chestAndShoulders'

const ChestExercises = chestAndShouldersExercises.filter(exercise => exercise.category === 'Chest')
const ShouldersExercises = chestAndShouldersExercises.filter(exercise => exercise.category === 'Shoulders')

const ChestAndShouldersTemplate: FC = () => {

  return (
    <ContentWrapper>
      <Header title='Legs Exercises' description='The list of the most 
      useful exercises categorized by muscle groups.' />
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Chest
        </h2>
        <div className='flex flex-col gap-8'>
          {ChestExercises.map((exercise: ChestAndShouldersExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Shoulders
        </h2>
        <div className='flex flex-col gap-8'>
          {ShouldersExercises.map((exercise: ChestAndShouldersExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ChestAndShouldersTemplate