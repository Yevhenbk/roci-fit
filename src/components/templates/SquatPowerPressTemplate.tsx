import { FC } from 'react'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import Header from '@UI/Header/Header'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import { squatPowerPress, SquatPowerPressProps } from '@utils/squatPowerPress'

const LegExercises = squatPowerPress.filter(exercise => exercise.category === 'Legs')
const ShoulderExercises = squatPowerPress.filter(exercise => exercise.category === 'Shoulders')
const ChestExercises = squatPowerPress.filter(exercise => exercise.category === 'Chest')

const SquatPowerPressTemplate: FC = () => {
  return (
    <ContentWrapper>
      <Header title='Squat & Power Press' description='Pick at least 
      one optional exercise from each category.' />
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Legs
        </h2>
        <div className='flex flex-col gap-8'>
          {LegExercises.map((exercise: SquatPowerPressProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Shoulders
        </h2>
        <div className='flex flex-col gap-8'>
          {ShoulderExercises.map((exercise: SquatPowerPressProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Chest
        </h2>
        <div className='flex flex-col gap-8'>
          {ChestExercises.map((exercise: SquatPowerPressProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default SquatPowerPressTemplate