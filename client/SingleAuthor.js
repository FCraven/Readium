import React, { Component } from 'react'
import Comments from './Comments'
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
        <div>
          <h4>STORIES</h4>
          <h4>COMMENTS</h4>
          <Comments comments={author.comments} />
        </div>
      </div>
    )
  }
}
