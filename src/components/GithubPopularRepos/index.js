import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: languageFiltersData[0].id,
    isLoading: true,
    languagesData: [],
  }

  componentDidMount() {
    this.renderLanguages()
  }

  onClickLanguage = id => {
    this.setState({activeLanguageId: id}, this.renderLanguages)
  }

  renderLanguages = async () => {
    const {activeLanguageId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok !== true) {
      this.renderFailureView()
    }
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachRepo => ({
      name: eachRepo.name,
      id: eachRepo.id,
      issuesCount: eachRepo.issues_count,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      avatarUrl: eachRepo.avatar_url,
    }))
    this.setState({languagesData: updatedData, isLoading: false})
  }

  renderLanguagesList = () => {
    const {languagesData} = this.state
    return (
      <ul className="selected-languages-list">
        {languagesData.map(eachLanguage => (
          <RepositoryItem key={eachLanguage.id} selectedList={eachLanguage} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
      className="failure-img"
    />
  )

  render() {
    const {activeLanguageId, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="popular-heading">Popular</h1>
        <ul className="languages-list">
          {languageFiltersData.map(language => (
            <LanguageFilterItem
              key={language.id}
              languageDetails={language}
              isActive={activeLanguageId}
              onClickLanguage={this.onClickLanguage}
            />
          ))}
        </ul>
        {isLoading && (
          <div>
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
        {this.renderLanguagesList()}
      </div>
    )
  }
}

export default GithubPopularRepos
