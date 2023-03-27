import { 
  createContext, useState, ReactNode, useEffect, useRef
 } from 'react'
import { useRouter } from 'next/router'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {
  
    const [visible, setVisible] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const [greeting, setGreeting] = useState<string>('')
    const [calling, setCalling] = useState<string>('')
    // keep it this way for future updates
    const name: string = 'Rocío'
    const adjectives: string[] = ['my pretty', 'my chichuna pink',
    'mi perrito feo', 'el amor de mi vida']

    const [section, setSection] = useState<boolean>(false)

    const router = useRouter()

  
    useEffect(() => {
      const timeOfDay: string = new Date().getHours() < 12 
      ? 'afternoon' 
      : new Date().getHours() < 18 ? 'afternoon' 
      : 'evening'
  
      const randomAdjective: string = adjectives[Math.floor(Math.random() * adjectives.length)]
      
      setGreeting(`Good ${timeOfDay} ${name}`)  
      setCalling(`What does ${randomAdjective} feel like doing today?`)

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
      value={{ ref, visible, greeting, calling,
      section, setSection, router }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider