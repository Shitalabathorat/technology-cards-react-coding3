import './index.css'

const CardItem = props => {
  const {userDetails, key} = props
  const {imgUrl, className, description, title} = userDetails

  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} className="avtar" alt={title} />
    </li>
  )
}
export default CardItem
