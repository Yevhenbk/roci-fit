import { FC, useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Context } from '@store/context'
import Button from '@UI/Button/Button'

interface Props {
  title: string,
  description?: string
}

const Header: FC<Props> = (props) => {

  const { router, setSection } = useContext(Context)

  return (
    <div className='flex flex-col gap-8 text-center items-center'>
      <h1 className='text-3xl text-gray-900  font-extrabold max-[1036px]:w-[22rem]'>
        {props.title}
      </h1>
      <div className='flex flex-col items-stretch w-[18rem]'>   
        <Button intent='secondary' fullWidth={true} onClick={() => {
        setSection(true)
        setTimeout(() => {
          setSection(false);
        }, 1000)
        setTimeout(() => {
          router.push('/')
        }, 300)
        }}>
          <BsArrowLeft className='relative duration-300 left-4 text-2xl 
          group-hover:left-0'/>
          <p className='font-medium pr-4'>Go back</p>
        </Button>
      </div> 
      <h3 className='text-sm text-gray-700 text-center font-bold w-[80%]'>
        {props.description}
      </h3>
    </div>
  )
}

export default Header