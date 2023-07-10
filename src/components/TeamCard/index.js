// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, imageUrl} = teamData

    return (
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="team-card">
          <img src={imageUrl} className="team-card-image" alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
