import { FC } from 'react'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import Header from '@UI/Header/Header'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import { absExercises, AbsExercisesProps } from '@utils/absExercises'

const UpperAbsExercises = absExercises.filter(exercise => exercise.category === 'Upper Abs')
const LowerAbsExercises = absExercises.filter(exercise => exercise.category === 'Lower Abs')
const ObliquesExercises = absExercises.filter(exercise => exercise.category === 'Obliques')

const AbsTemplate: FC = () => {
  return (
    <ContentWrapper>
      <Header title='Legs Exercises' description='The list of the most 
      useful exercises categorized by muscle groups.' />
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Upper Abs
        </h2>
        <div className='flex flex-col gap-8'>
          {UpperAbsExercises.map((exercise: AbsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Lower Abs
        </h2>
        <div className='flex flex-col gap-8'>
          {LowerAbsExercises.map((exercise: AbsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Obliques
        </h2>
        <div className='flex flex-col gap-8'>
          {ObliquesExercises.map((exercise: AbsExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default AbsTemplate