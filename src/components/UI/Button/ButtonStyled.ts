import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  ['text-xl rounded-full p-4 group flex items-center justify-between',
  'relative transition duration-1000 transform transition ease-out',
  'shadow-sm'],
  {
    variants: {
      intent: {
        primary: 'bg-[#A4D2EB] text-[#57A6CA]',
        secondary: 'bg-[#FEAFE7] text-pink-700',
        teritary: 'bg-[#CFABF8] text-white',
        quaternary: 'bg-[#FED8C5] text-[#FE7F5F]'
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