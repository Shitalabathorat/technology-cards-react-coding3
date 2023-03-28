import {Component} from 'react'
import '.index.css'

const CardItem = props => {
  const {userDetails, key} = props
  const {imgUrl, className, description, title} = userDetails

  return (
    <li className={className}>
      <div className="container">
        <h2 className="heading">{title}</h2>
        <p className="para">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="avtar" alt="avtar" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
