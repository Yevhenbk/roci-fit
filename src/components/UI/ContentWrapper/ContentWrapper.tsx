import { FC, ReactNode, useContext } from 'react'
import { Context } from '@store/context'
import classNames from 'classnames'

interface Props {
  children: ReactNode
}

const ContentWrapper: FC<Props> = (props) => {

  const { section } = useContext(Context)

  return (
    <div className={classNames('opacity-0 transform transition ease-out flex flex-col gap-14',
    'duration-300 justify-start items-center h-[100vh] w-[100vw] overflow-auto py-12', {
    'opacity-100 translate-y-0': !section,
    'translate-y-6': section})}>
      {props.children}
    </div>
  )
}

export default ContentWrapper