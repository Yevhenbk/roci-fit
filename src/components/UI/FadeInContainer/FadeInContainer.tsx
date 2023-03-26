import { FC, ReactNode, useContext } from 'react'
import { Context } from '@store/context'
import classNames from 'classnames'

interface Props {
  duration: 1 | 2 | 3 | 4,  
  children: ReactNode
}

const FadeInContainer: FC<Props> = (props) => {

  const { fadeIn } = useContext(Context)
  const duration: 1 | 2 | 3 | 4 = props.duration

  return (
    <div className={classNames('opacity-0 transform transition ease-out', {
      'opacity-100 translate-y-0': fadeIn,
      'translate-y-2/4': !fadeIn,
      'duration-1000': fadeIn && duration === 1,
      'duration-700': fadeIn && duration === 2,
      'duration-500': fadeIn && duration === 3,
      'duration-300': fadeIn && duration === 4
    })}>
      {props.children}  
    </div>
  )
}

export default FadeInContainer