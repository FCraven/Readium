import React from 'react'
import {Link} from 'react-router-dom'

const Comments = (props) => props.comments.map(comment => (
      <div className='comment row' key={comment.id}>
        <Link to={`/authors/${comment.author.id}`}>
          <img src={comment.author.imageUrl} />
        </Link>
        <div className='column'>
          <a>
            <h5>{comment.author.name}</h5>
          </a>
          <div>{comment.content}</div>
        </div>
      </div>
    ))


export default Comments
