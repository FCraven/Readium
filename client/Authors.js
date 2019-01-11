import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Authors extends Component {
  constructor(props){
    super(props)

    this.state = {
      authors: []
    }
  }
  
  render(){
    return (
      <div>
        {
          this.state.authors.map(author => (
            <Link to='/authors/:authorId' key={author.id} >
              <div className='author row'>
                <img src={author.imageUrl} />
                <p>{author.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}
