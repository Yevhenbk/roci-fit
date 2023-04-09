import { FC } from 'react'

interface Props {
  name: string,
  description: string,
  sets: string,
  reps: string,
  isRequired?: boolean,
  muscleGroup?: string
} 

const ExerciseCard: FC<Props> = (props) => {
  return (
    <div className='bg-white rounded-lg p-8 shadow-sm
    flex flex-col gap-3 text-start w-[22rem] relative'>
      {props.isRequired ? 
      <p className='absolute right-2 top-2 py-[.35rem] text-yellow-600
      font-medium bg-yellow-100 rounded-md px-[.75rem] text-xs'>Required</p> : 
      <p className='absolute right-2 top-2 py-[.35rem] text-pink-400
      font-medium bg-pink-100 rounded-md px-[.75rem] text-xs'>Optional</p>}
      <h3 className='text-xl text-gray-900 font-bold'>
        {props.name}
      </h3>
      <p className='text-sm text-gray-700 font-medium'>
        Muscle Group: {props.muscleGroup}
      </p>
      <div>
        <p className='text-sm text-gray-700 font-medium'>
          Sets: {props.sets}
        </p>
        <p className='text-sm text-gray-700 font-medium'>
          Reps: {props.reps}
        </p>
      </div>
      <p className='text-sm text-gray-700 font-medium'>
        {props.description}
      </p>
    </div>
  )
}

export default ExerciseCard