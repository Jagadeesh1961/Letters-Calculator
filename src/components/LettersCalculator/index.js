import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeLetters = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-container">
          <div className="content-container ">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="forPhrase" className="phrase">
                Enter the phrase
              </label>
              <input
                id="forPhrase"
                type="text"
                className="input-type"
                placeholder="Enter the Phrase"
                onChange={this.onChangeLetters}
              />
            </div>
            <p className="letter-count">No.of letters: {count.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
