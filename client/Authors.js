import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Authors extends Component {
  constructor(props){
    super(props)

    this.state = {
      authors: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/authors')
    const authors = res.data
    this.setState({authors})
  }

  render(){
    return (
      <div>
        {
          this.state.authors.map(author => (
            <Link to={`/authors/${author.id}`} key={author.id} >
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
