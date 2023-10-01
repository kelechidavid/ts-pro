import { ReactNode, useState } from 'react'
type CounterProps = {

  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}


const Counter = ({setCount, children}: CounterProps) => {
  return (
    <div>
        <h1>count is {children}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(next => next - 1)}>-</button>
    </div>
  )
}

export default Counter