import { useState } from 'react'

const Input = () => {
  const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="input__wrapper none">
      <h2 className="input__title">{value}</h2>
      <input
        className="input__value"
        type="text"
        value={value} /// поместили наше значение в стартовое значение инпута
        onChange={(event) => setValue(event.target.value)} /// вещаем слушатель события onChange,коллбеки для событий первым параметром принимают event,у которого есть target и поле value,связали состояние со значением в инпуте
      />
    </div>
  )
}

export default Input
