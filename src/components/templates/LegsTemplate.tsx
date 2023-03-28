import { FC } from 'react'
import ExerciseCard from '@UI/ExerciseCard/ExerciseCard'
import Header from '@UI/Header/Header'
import ContentWrapper from '@UI/ContentWrapper/ContentWrapper'
import { legExercises, LegExercisesProps } from '@utils/legExercises'

const FullLegExercises = legExercises.filter(exercise => exercise.category === 'Full Leg')
const QuadricepsExercises = legExercises.filter(exercise => exercise.category === 'Quadriceps')
const HamstringExercises = legExercises.filter(exercise => exercise.category === 'Hamstrings')
const GlutesExercises = legExercises.filter(exercise => exercise.category === 'Glutes')
const CalvesExercises = legExercises.filter(exercise => exercise.category === 'Calves')

const LegsTemplate: FC = () => {

  return (
    <ContentWrapper>
      <Header title='Legs Exercises' description='The list of the most 
      useful exercises categorized by muscle groups.' />
      <div className='text-center flex flex-col gap-8 mb-12'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Full Leg
        </h2>
        <div className='flex flex-col gap-8'>
          {FullLegExercises.map((exercise: LegExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Quadriceps
        </h2>
        <div className='flex flex-col gap-8'>
          {QuadricepsExercises.map((exercise: LegExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description}
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Hamstring
        </h2>
        <div className='flex flex-col gap-8'>
          {HamstringExercises.map((exercise: LegExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Glutes
        </h2>
        <div className='flex flex-col gap-8'>
          {GlutesExercises.map((exercise: LegExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
      <div className='text-center flex flex-col gap-8'>
        <h2 className='text-xl text-gray-900 font-extrabold'>
          Calves
        </h2>
        <div className='flex flex-col gap-8'>
          {CalvesExercises.map((exercise: LegExercisesProps, index: number) => (
            <ExerciseCard key={index} name={exercise.name} description={exercise.description} 
            sets={exercise.sets} reps={exercise.reps} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default LegsTemplate