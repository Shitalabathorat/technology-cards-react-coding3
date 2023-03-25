import '.index.css'
const UserProfile = props => {
  const {userDetails} = props
  const {imgUrl, className, description, title, key} = userDetails
}
return (
  <div className={className}>
    <h2 className="heading">{title}</h2>
    <p className="para">{description}</p>
    <img src={imgUrl} className="avtar" alt="avtar" />
  </div>
)
export default UserProfile
