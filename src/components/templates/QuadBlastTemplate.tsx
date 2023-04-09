import { FC } from 'react'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import Header from '@UI/Header/Header'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import { quadBlast, QuadBlastProps } from '@utils/quadBlast'

const LegsExercises = quadBlast.filter(exercise => exercise.category === 'Legs')

const QuadBlastTemplate: FC = () => {

  return (
    <ContentWrapper>
      <Header title='Quad Blast' description='Pick at least 
      one optional exercise from each category.' />
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Legs
        </h2>
        <div className='flex flex-col gap-8'>
          {LegsExercises.map((exercise: QuadBlastProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} muscleGroup={exercise.muscleGroup}
            isRequired={exercise.isRequired} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default QuadBlastTemplate