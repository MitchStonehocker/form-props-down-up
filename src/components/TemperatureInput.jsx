// src/components/TemperatureInput.jsx

import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'

import { unitNames } from '../utilities/Utilities'

export default class TemperatureInput extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    // console.log('this.props in TemperatureInput ===>', this.props)
    return (
      <Paper className='TemperatureInput'>
        <fieldset>
          <legend>
            Enter temperature in {unitNames.temperature[this.props.unit]}:
          </legend>
          <input value={this.props.measure} onChange={this.handleChange} />
        </fieldset>
      </Paper>
    )
  }
}
