import { 
  createContext, useState, ReactNode, useEffect, useRef
 } from 'react'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {
  
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        },
        { threshold: 0.1 }
      )
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [])

  return (
    <Context.Provider 
      value={{ ref, visible }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider