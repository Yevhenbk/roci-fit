import { createContext, useState, ReactNode } from 'react'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {
  
  const test: string = 'I come from context'  

  return (
    <Context.Provider 
      value={{ test }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider