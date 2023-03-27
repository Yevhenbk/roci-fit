import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  'text-xl rounded-full p-4',
  {
    variants: {
      intent: {
        primary: 'bg-[#A4D2EB] text-[#57A6CA]',
        secondary: 'bg-[#FEAFE7] text-pink-700',
        teritary: 'bg-[#CFABF8] text-white',
        quaternary: 'bg-[#B3CB6C] text-green-700'
      },
      fullWidth: {
        true: 'w-[100%]'
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)