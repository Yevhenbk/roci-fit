import { FC } from 'react'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import Header from '@UI/Header/Header'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import { armsAndIsolation, ArmsAndIsolationProps } from '@utils/armsAndIsolation'

const GlutesExercises = armsAndIsolation.filter(exercise => exercise.category === 'Glutes')
const BicepsExercises = armsAndIsolation.filter(exercise => exercise.category === 'Bicep')
const TricepsExercises = armsAndIsolation.filter(exercise => exercise.category === 'Tricep')

const ArmsAndIsolationTemplate: FC = () => {

  return (
    <ContentWrapper>
      <Header title='Arms and Isolation' description='Pick at least 
      one optional exercise from each category.' />
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Glutes
        </h2>
        <div className='flex flex-col gap-8'>
          {GlutesExercises.map((exercise: ArmsAndIsolationProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Biceps
        </h2>
        <div className='flex flex-col gap-8'>
          {BicepsExercises.map((exercise: ArmsAndIsolationProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Triceps
        </h2>
        <div className='flex flex-col gap-8'>
          {TricepsExercises.map((exercise: ArmsAndIsolationProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ArmsAndIsolationTemplate