// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {ranNum: 0}

  generateRanNum = () => {
    const genNumIs = Math.ceil(Math.random() * 100)
    this.setState({ranNum: genNumIs})
  }

  render() {
    const {ranNum} = this.state

    return (
      <div className="random-number-bg-img-container">
        <div className="random-num-card-container">
          <h1 className="heading"> Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>

          <button
            className="generate-btn"
            type="button"
            onClick={this.generateRanNum}
          >
            Generate
          </button>

          <p className="generated-random-num">{ranNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
