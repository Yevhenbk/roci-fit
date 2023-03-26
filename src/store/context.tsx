import { 
  createContext, useState, ReactNode, useEffect } from 'react'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {
  
  const [fadeIn, setFadeIn] = useState<boolean>(false)  
  
  const test: string = 'I come from context' 
  
  useEffect(() => {
    setFadeIn(true);
  }, [])

  return (
    <Context.Provider 
      value={{ test, fadeIn, setFadeIn }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider