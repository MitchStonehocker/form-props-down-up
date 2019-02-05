// src/components/TemperatureInput.jsx

import React, { Component } from 'react'
import { scaleNames } from '../utilities/Utilities'

export default class TemperatureInput extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    console.log('this.props in TemperatureInput ===>', this.props)
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}
