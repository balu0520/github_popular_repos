// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {selectedList} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = selectedList

  return (
    <li className="selected-language-item">
      <img src={avatarUrl} className="avatar" alt={name} />
      <h1 className="name-para">{name}</h1>
      <div className="selected-language-item-description">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="icon"
          alt="stars"
        />
        <p className="description-para">{starsCount} stars</p>
      </div>
      <div className="selected-language-item-description">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="icon"
          alt="forks"
        />
        <p className="description-para">{forksCount} forks</p>
      </div>
      <div className="selected-language-item-description">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="icon"
          alt="open issues"
        />
        <p className="description-para">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
