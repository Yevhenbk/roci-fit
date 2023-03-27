import { FC, useContext } from 'react'
import { Context } from '@store/context'
import { BsArrowRight } from 'react-icons/bs'
import Button from '@UI/Button/Button'
import FadeInContainer from '@UI/FadeInContainer/FadeInContainer'

const HomeTemplate: FC = () => {   
  
  const { greeting } = useContext(Context)

  return (
    <div className='flex flex-col gap-14 items-center justify-center h-[100vh]
    w-[100vw] bg-[#EEF2F5]'>
        <div className='flex flex-col gap-8 text-center items-center'>
          <FadeInContainer duration={4}>
            <h1 className='text-3xl text-gray-900  font-extrabold max-[1036px]:w-[22rem]'>
              {greeting}
            </h1>
          </FadeInContainer>
          <FadeInContainer duration={3}>
            <h3 className='text-lg text-gray-700 text-center font-bold w-[80%]'>
              What do you feel like doing today?
            </h3>
          </FadeInContainer>
        </div>
      <div className='flex flex-col items-stretch gap-5 min-w-[22rem]'>
        <FadeInContainer duration={4}>
          <Button intent='secondary' fullWidth={true}>
            <p className='font-medium pl-4'>Legs</p>
            <BsArrowRight className='relative duration-300 right-4 text-2xl 
            group-hover:right-0'/>
          </Button>
        </FadeInContainer>
        <FadeInContainer duration={3}>
          <Button fullWidth={true}>
            <p className='font-medium pl-4'>Back & Arms</p>
            <BsArrowRight className='relative duration-300 right-4 text-2xl 
            group-hover:right-0'/>
          </Button>
        </FadeInContainer>  
        <FadeInContainer duration={2}>
          <Button intent='teritary' fullWidth={true}>
            <p className='font-medium pl-4'>Chest & Shoulders</p>
            <BsArrowRight className='relative duration-300 right-4 text-2xl 
            group-hover:right-0'/>
          </Button>
        </FadeInContainer>  
        <FadeInContainer duration={1}>
          <Button intent='quaternary' fullWidth={true}>
            <p className='font-medium pl-4'>Abs</p>
            <BsArrowRight className='relative duration-300 right-4 text-2xl 
            group-hover:right-0'/>
          </Button>
        </FadeInContainer>  
      </div>
      
    </div>
  )
}

export default HomeTemplate