// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem
  return (
    <li className="list-item">
      <img src={imgUrl} className="img-size" alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
