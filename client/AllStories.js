import React, {Component} from 'react'
import axios from 'axios'

export default class AllStories extends Component {
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
    )
  }
}
