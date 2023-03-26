import { FC, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonStyles } from './ButtonStyled'

interface Props extends 
  VariantProps<typeof buttonStyles> {
    children: ReactNode
  }  

const Button: FC<Props> = ({ intent, fullWidth, ...props }) => {
  return (
    <button
      className={buttonStyles({ intent, fullWidth })}
    >
      {props.children}
    </button>
  )
}

export default Button