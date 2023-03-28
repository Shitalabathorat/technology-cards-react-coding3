import '.index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imgUrl, className, description, title, key} = userDetails
}
return (
  <li className="user-card-container">
    <div className={className}>
      <h2 className="heading">{title}</h2>
      <p className="para">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="avtar" alt="avtar" />
      </div>
    </div>
  </li>
)
export default UserProfile
