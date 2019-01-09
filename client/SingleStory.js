import React, { Component } from 'react'

const fakeStory = {
  title: 'Ships',
  id: 2,
  content: "A ship in port is safe,\nbut that's not what ships are built for",
  author: {
    id: 1,
    name: 'Grace Hopper'
  },
  comments: [
    {
      id: 4,
      content: 'I like ships!',
      author: {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'default-author.png'
      }
    }
  ]
}

export default class SingleStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      story: fakeStory
    }
  }

  render() {
    const story = this.state.story
    const content = story.content ||  ''
    const comments = story.comments
    return (
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {
          content.split('/n').map((line,idx) => <p key={idx}>{line}</p>)
        }
        <h3>Responses:</h3>
        {
          comments.map(comment => (
            <div className='comment row' key ={comment.id}>
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

