import React, {Component} from 'react'

export default class SingleAuthor extends Component {
  render() {
    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>AUTHOR_NAME</h1>
            <p>AUTHOR_BIO</p>
          </div>
          <img src='AUTHOR-IMAGEURL' />
        </div>
        <hr/>
        <div>
          <h4>STORIES</h4>
          <h4>COMMENTS</h4>
        </div>
      </div>
    )
  }
}
