// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  applyBreak = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="heading-1">
          Speed is <span className="counter">{count}</span>mph
        </h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn-1" onClick="accelerate">
            Accelerate
          </button>
          <button className="btn-2" onClick="applyBreak">
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
