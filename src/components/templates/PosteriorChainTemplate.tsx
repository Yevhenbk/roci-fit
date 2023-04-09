import { FC } from 'react'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import Header from '@UI/Header/Header'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import { posteriorChain, PosteriorChainProps } from '@utils/posteriorChain'

const LegExercises = posteriorChain.filter(exercise => exercise.category === 'Legs')
const BackExercises = posteriorChain.filter(exercise => exercise.category === 'Back')
const ShoulderExercises = posteriorChain.filter(exercise => exercise.category === 'Shoulder')

const PosteriorChainTemplate: FC = () => {
  return (
    <ContentWrapper>
      <Header title='Posterior Chain' description='Pick at least 
      one optional exercise from each category.' />
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Legs
        </h2>
        <div className='flex flex-col gap-8'>
          {LegExercises.map((exercise: PosteriorChainProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Back
        </h2>
        <div className='flex flex-col gap-8'>
          {BackExercises.map((exercise: PosteriorChainProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Shoulder
        </h2>
        <div className='flex flex-col gap-8'>
          {ShoulderExercises.map((exercise: PosteriorChainProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default PosteriorChainTemplate