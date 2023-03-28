import { FC } from 'react'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import Header from '@UI/Header/Header'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import { backAndArmsExercises, BackAndArmsExercisesProps } from '@utils/backAndArmsExercises'

const BackExercises = backAndArmsExercises.filter(exercise => exercise.category === 'Back')
const BicepsExercises = backAndArmsExercises.filter(exercise => exercise.category === 'Biceps')
const TricepsExercises = backAndArmsExercises.filter(exercise => exercise.category === 'Triceps')

const BackAndArmsTemplate: FC = () => {

  return (
    <ContentWrapper>
      <Header title='Legs Exercises' description='The list of the most 
      useful exercises categorized by muscle groups.' />
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Back
        </h2>
        <div className='flex flex-col gap-8'>
          {BackExercises.map((exercise: BackAndArmsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Biceps
        </h2>
        <div className='flex flex-col gap-8'>
          {BicepsExercises.map((exercise: BackAndArmsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Triceps
        </h2>
        <div className='flex flex-col gap-8'>
          {TricepsExercises.map((exercise: BackAndArmsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default BackAndArmsTemplate