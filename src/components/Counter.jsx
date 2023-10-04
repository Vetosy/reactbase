import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h2 className="counter__title">{count}</h2>
      <button className="counter__btn" onClick={plus}>
        plus
      </button>
      <button className="counter__btn" onClick={minus}>
        minus
      </button>
    </div>
  )
}

export default Counter
