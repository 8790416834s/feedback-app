import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {resource} = this.props
    const {name, imageUrl} = resource

    return (
      <li className="list-container">
        <div className="image-container">
          <img
            src={imageUrl}
            alt={name}
            className="image"
            onClick={this.onImage}
          />
          <p>{name}</p>
        </div>
      </li>
    )
  }
}
export default Feedback
