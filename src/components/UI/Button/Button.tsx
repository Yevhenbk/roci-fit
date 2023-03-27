import { FC, ReactNode, MouseEventHandler } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonStyles } from './ButtonStyled'

interface Props extends 
  VariantProps<typeof buttonStyles> {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode
  }  

const Button: FC<Props> = ({ intent, fullWidth, ...props }) => {
  return (
    <button
      className={buttonStyles({ intent, fullWidth })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button