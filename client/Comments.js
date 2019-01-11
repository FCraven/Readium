import React from 'react'

const Comments = (props) => props.comments.map(comment => (
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


export default Comments
