import { FC, useContext } from 'react'
import { Context } from '@store/context'
import Button from '@UI/Button/Button'
import FadeInContainer from '@UI/FadeInContainer/FadeInContainer'

const HomeTemplate: FC = () => {
  const { fadeIn, setFadeIn } = useContext(Context)    

  return (
    <div className='flex flex-col gap-8'>
      <FadeInContainer duration={4}>
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Rocio's Workout App!
        </h1>
      </FadeInContainer>
      <FadeInContainer duration={3}>
        <Button intent='secondary'>
          Button
        </Button>
      </FadeInContainer>  
      <FadeInContainer duration={2}>
        <Button intent='secondary'>
          Button
        </Button>
      </FadeInContainer>  
    </div>
  )
}

export default HomeTemplate