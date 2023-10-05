import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
  }

  plus() {
    this.setState({ count: this.state.count + 1 })
  }

  minus() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className="counter none">
        <h2 className="counter__title">{this.state.count}</h2>
        <button className="counter__btn" onClick={this.plus}>
          plus
        </button>
        <button className="counter__btn" onClick={this.minus}>
          minus
        </button>
      </div>
    )
  }
}

export default ClassCounter

////Устаревший подход
