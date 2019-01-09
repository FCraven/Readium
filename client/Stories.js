import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Stories extends Component {
  constructor () {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount () {
    try {
      const storiesResponse = await axios.get('/api/stories')
      this.setState({ stories: storiesResponse.data })
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const stories = this.state.stories

    return (
      <div id='stories' className='column'>
        {
          stories.map(story => (
            <div className='story' key={story.id}>
              <Link to={`/stories/${story.id}`}>
                <h3>{story.title}</h3>
              </Link>
              <a>
                <p>{story.author.name}</p>
              </a>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}
