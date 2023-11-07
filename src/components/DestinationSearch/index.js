// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserValue = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="search-input"
            onChange={this.searchUserValue}
            value={searchInput}
            placeholder="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <div className="card-bg-container">
          <ul className="each-card">
            {filterSearchResults.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
