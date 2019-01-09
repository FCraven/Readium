import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
       <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path='/' component={Stories} />
          <Route path='/stories' component={Stories} />
        </div>
      </Router>
    )
  }
}
