// src/components/WeightInput.jsx

import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'

import { unitNames } from '../utilities/Utilities'

export default class WeightInput extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onWeightChange(e.target.value)
  }

  render () {
    // console.log('this.props in WeightInput ===>', this.props)
    return (
      <Paper className='WeightInput'>
        <fieldset>
          <legend>Enter weight in {unitNames.weight[this.props.unit]}:</legend>
          <input value={this.props.measure} onChange={this.handleChange} />
        </fieldset>
      </Paper>
    )
  }
}
