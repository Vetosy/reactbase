import { useState } from 'react'

const Counter = (props) => {
  const [count, setCounter] = useState(0)

  const counterPlus = () => {
    setCounter((prev) => prev + 1)
  }

  const counterMinus = () => {
    setCounter((prev) => prev - 1)
  }

  return (
    <div className="counter none">
      <h2 className="counter__title">{count}</h2>
      <button
        className="counter__plus"
        onClick={counterPlus}
        aria-label={props.ariaLabelPlus}>
        Plus
      </button>
      <button
        className="counter__minus"
        onClick={counterMinus}
        aria-label={props.ariaLabelMinus}>
        Minus
      </button>
    </div>
  )
}

export default Counter
