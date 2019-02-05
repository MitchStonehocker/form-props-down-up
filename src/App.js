import React, { Component } from 'react'

import Greeting from './components/Greeting'
import Calculator from './components/Calculator'

import './App.css'

export default class App extends Component {
  state = {
    userName: 'Mitch',
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <Greeting
            userName={this.state.userName}
            time={this.state.time}
            date={this.state.date}
          />
        </header>
        <main className='App-main'>
          <Calculator />
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    )
  }
}
