import { FC } from 'react'

interface Props {
  name: string,
  description: string,
  sets: string,
  reps: string
} 

const ExerciseCard: FC<Props> = (props) => {
  return (
    <div className='bg-white rounded-lg p-8 shadow-sm
    flex flex-col gap-3 text-start w-[22rem]'>
      <h3 className='text-xl text-gray-900 font-bold'>
        {props.name}
      </h3>
      <div>
        <p className='text-sm text-gray-700 font-medium'>
          Sets: {props.sets}
        </p>
        <p className='text-sm text-gray-700 font-medium'>
          Reps: {props.reps}
        </p>
      </div>
      <p className='text-md text-gray-700 font-medium'>
        {props.description}
      </p>
    </div>
  )
}

export default ExerciseCard