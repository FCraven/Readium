import React, { Component } from 'react'
import axios from 'axios'

export default class SingleStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      story: {
        comments: [],
        content: ''
      }
    }
  }

  async componentDidMount() {
    const { storyId } = this.props.match.params
    const res = await axios.get(`api/stories/${storyId}`)
    const story = res.data
    this.setState({ story })
  }

  render() {
    const story = this.state.story
    const content = story.content
    const comments = story.comments
  
    return (
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {
          content.split('\n').map((line, idx) => <p key={idx}>{line}</p>)
        }
        <h3>Responses:</h3>
        {
          comments.map(comment => (
            <div className='comment row' key={comment.id}>
              <img src={comment.author.imageUrl} />
              <div className='column'>
                <a>
                  <h5>{comment.author.name}</h5>
                </a>
                <div>{comment.content}</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

