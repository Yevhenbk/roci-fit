import { FC, useContext } from 'react'
import { Context } from '@store/context'
import { BsArrowRight } from 'react-icons/bs'
import classNames from 'classnames'
import Button from '@UI/Button/Button'
import FadeInContainer from '@UI/FadeInContainer/FadeInContainer'

const HomeTemplate: FC = () => {   
  
  const { greeting, calling, section, setSection, router } = useContext(Context)

  return (
    <>
      <div className={classNames('opacity-0 transform transition ease-out flex flex-col gap-14',
      'duration-300 justify-center items-center h-[100vh] w-[100vw]', {
        'opacity-100 translate-y-0': !section,
        'translate-y-6': section})}>
          <div className='flex flex-col gap-8 text-center items-center'>
            <FadeInContainer duration={4}>
              <h1 className='text-2xl text-gray-900  font-extrabold max-[1036px]:w-[20rem]'>
                {greeting}
              </h1>
            </FadeInContainer>
            <FadeInContainer duration={3}>
              <h3 className='text-lg text-gray-700 text-center font-bold w-[80%]'>
                {calling}
              </h3>
            </FadeInContainer>
          </div>
        <div className='flex flex-col items-stretch gap-5 min-w-[18rem]'>
          <FadeInContainer duration={4}>
            <Button intent='secondary' fullWidth={true} onClick={() => {
              setSection(true)
              setTimeout(() => {
                setSection(false);
              }, 1000)
              setTimeout(() => {
                router.push('/legs')
              }, 300)
              }}>
              <p className='font-medium pl-4'>Legs</p>
              <BsArrowRight className='relative duration-300 right-4 text-2xl 
              group-hover:right-0'/>
            </Button>
          </FadeInContainer>
          <FadeInContainer duration={3}>
            <Button fullWidth={true} onClick={() => {
              setSection(true)
              setTimeout(() => {
                setSection(false);
              }, 1000)
              setTimeout(() => {
                router.push('/back&arms')
              }, 300)
              }}>
              <p className='font-medium pl-4'>Back & Arms</p>
              <BsArrowRight className='relative duration-300 right-4 text-2xl 
              group-hover:right-0'/>
            </Button>
          </FadeInContainer>  
          <FadeInContainer duration={2}>
            <Button intent='teritary' fullWidth={true} onClick={() => {
              setSection(true)
              setTimeout(() => {
                setSection(false);
              }, 1000)
              setTimeout(() => {
                router.push('/chest&shoulders')
              }, 300)
              }}>
              <p className='font-medium pl-4'>Chest & Shoulders</p>
              <BsArrowRight className='relative duration-300 right-4 text-2xl 
              group-hover:right-0'/>
            </Button>
          </FadeInContainer>  
          <FadeInContainer duration={1}>
            <Button intent='quaternary' fullWidth={true} onClick={() => {
              setSection(true)
              setTimeout(() => {
                setSection(false);
              }, 1000)
              setTimeout(() => {
                router.push('/abs')
              }, 300)
              }}>
              <p className='font-medium pl-4'>Abs</p>
              <BsArrowRight className='relative duration-300 right-4 text-2xl 
              group-hover:right-0'/>
            </Button>
          </FadeInContainer>  
          {/* <FadeInContainer duration={1}>
            <Button intent='quinary' fullWidth={true} onClick={() => {
              setSection(true)
              setTimeout(() => {
                setSection(false);
              }, 1000)
              setTimeout(() => {
                router.push('/abs')
              }, 300)
              }}>
              <p className='font-medium pl-4'>Abs</p>
              <BsArrowRight className='relative duration-300 right-4 text-2xl 
              group-hover:right-0'/>
            </Button>
          </FadeInContainer>  */}
        </div>
      </div>
    </>
  )
}

export default HomeTemplate