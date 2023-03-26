import { FC, useContext } from 'react'
import { Context } from '@store/context'
import Button from '@UI/Button/Button'

const HomeTemplate: FC = () => {
  const { test } = useContext(Context)    

  return (
    <>
      <Button intent='secondary'>
        {test}
      </Button>  
    </>
  )
}

export default HomeTemplate