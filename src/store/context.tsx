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

    const [greeting, setGreeting] = useState<string>('')
    // keep it this way for future updates
    const adjectives: string[] = ['Rocio']

  
    useEffect(() => {
      const timeOfDay: string = new Date().getHours() < 12 
      ? 'afternoon' 
      : new Date().getHours() < 18 ? 'afternoon' 
      : 'evening'
  
      const randomAdjective: string = adjectives[Math.floor(Math.random() * adjectives.length)]
      
      setGreeting(`Good ${timeOfDay} ${randomAdjective}`)  

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
      value={{ ref, visible, greeting }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider