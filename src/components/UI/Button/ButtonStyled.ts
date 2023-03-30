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
        quaternary: 'bg-[#B3CB6C] text-green-700',
        quinary: 'bg-[#F7F052] text-black'
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