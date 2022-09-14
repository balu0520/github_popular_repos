// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, onClickLanguage} = props
  const {id, language} = languageDetails
  const activeColor = isActive === id ? 'active-btn' : ''
  console.log(activeColor)

  const onClickLanguageItem = () => {
    onClickLanguage(id)
  }

  return (
    <li className="language-item">
      <button
        className={`btn ${activeColor}`}
        type="button"
        onClick={onClickLanguageItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
