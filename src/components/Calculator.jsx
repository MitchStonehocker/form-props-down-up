// src/components/Calculator.jsx

import React, { Component } from 'react'
import {
  BoilingVerdict,
  toCelsius,
  toFahrenheit,
  tryConvert
} from '../utilities/Utilities'
import TemperatureInput from './TemperatureInput'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Calculator extends Component {
  constructor (props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange (temperature) {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange (temperature) {
    this.setState({ scale: 'f', temperature })
  }

  render () {
    console.log('this.state in Calculator ===>', this.state)
    console.log('this.props in Calculator ===>', this.props)
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <Card className='card'>
        <CardContent>
          <Typography className='typography' color='textSecondary' gutterBottom>
            Enter a temperature. Will water boil?
          </Typography>
          <TemperatureInput
            scale='c'
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
          />
          <TemperatureInput
            scale='f'
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </CardContent>
      </Card>
    )
  }
}
