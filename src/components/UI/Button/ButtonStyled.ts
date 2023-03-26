import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  'text-xl',
  {
    variants: {
      intent: {
        primary: 'text-blue-500',
        secondary: 'bg-orange-800 p-4 text-white'
      },
      fullWidth: {
        true: 'w-[100vw]'
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)