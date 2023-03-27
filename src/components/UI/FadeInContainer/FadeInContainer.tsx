import { FC, ReactNode, useContext } from 'react'
import { Context } from '@store/context'
import classNames from 'classnames'

interface Props {
  duration: 1 | 2 | 3 | 4,  
  children: ReactNode
}

const FadeInContainer: FC<Props> = (props) => {

  const { ref, visible } = useContext(Context)
  const duration: 1 | 2 | 3 | 4 = props.duration

  return (
    <div ref={ref} className={classNames('opacity-0 transform transition ease-out',
    'flex flex-col justify-center items-center', {
      'opacity-100 translate-y-0': visible,
      'translate-y-2/4': !visible,
      'duration-1000': visible && duration === 1,
      'duration-700': visible && duration === 2,
      'duration-500': visible && duration === 3,
      'duration-300': visible && duration === 4
    })}>
      {props.children}  
    </div>
  )
}

export default FadeInContainer