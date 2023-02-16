import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {arr: [], inputValue: ''}

  renderImage = () => (
    <div className="empty-arr">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  onSubmit = e => {
    e.preventDefault()
    const {inputValue} = this.state
    const textItem = {
      id: uuidv4(),
      text: inputValue,
    }
    this.setState(prev => ({arr: [...prev.arr, textItem], inputValue: ''}))
  }

  renderCharecter = () => {
    const {arr} = this.state
    return (
      <ul className="list-container">
        {arr.map(item => (
          <li key={item.id}>
            <p className="word">
              {item.text} : {item.text.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  onChangeInput = e => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    const {arr, inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="left-container">
            <div className="header">
              <h1>Count the characters like a Boss...</h1>
            </div>
            <div>
              {arr.length > 0 ? this.renderCharecter() : this.renderImage()}
            </div>
          </div>
          <div className="right-container">
            <h1>Character Counter</h1>
            <div>
              <form onSubmit={this.onSubmit} className="input-container">
                <input
                  type="text"
                  placeholder="Enter the characters here."
                  onChange={this.onChangeInput}
                  value={inputValue}
                />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
