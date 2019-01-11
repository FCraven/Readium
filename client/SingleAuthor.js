import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
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
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>

        <div>
          <Route  path='/authors/:authorId/comments'
                  render={() => <Stories stories={author.stories} />} />
          <Route  path='/authors/:authorId/stories'
                  render={() => <Comments comments={author.comments} />} />
        </div>
      </div>
    )
  }
}
