import React, { Component } from 'react'
import {Link, NavLink, Route} from 'react-router-dom'
import Comments from './Comments'
import Stories from './Stories'
import axios from 'axios'

export default class SingleAuthor extends Component {
  constructor() {
    super()
    this.state = {
      author: {
        comments:[],
        stories: []
      }
    }
  }

  async componentDidMount() {
    const authorId = this.props.match.params.authorId
    const authorPath = `/api/authors/${authorId}`
    const responses = await Promise.all([
      axios.get(authorPath),
      axios.get(`${authorPath}/stories`),
      axios.get(`${authorPath}/comments`)
    ])
    const dataArr = responses.map(res => res.data)
    const [author, stories, comments] = dataArr
    author.stories = stories
    author.comments = comments
    this.setState({author})
  }

  render() {
    const {author} = this.state

    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>

        <hr />

        <div id='single-author-nav'>
          <NavLink to={`/authors/${author.id}/comments`} activeClassName='active'>Comments</NavLink>
          <NavLink to={`/authors/${author.id}/stories`} activeClassName='active'>Stories</NavLink>
        </div>

        <div>
          <Route  path='/authors/:authorId/stories'
                  render={() => <Stories stories={author.stories} />} />
          <Route  path='/authors/:authorId/comments'
                  render={() => <Comments comments={author.comments} />} />
        </div>
      </div>
    )
  }
}
