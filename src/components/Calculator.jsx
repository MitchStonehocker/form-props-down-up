// src/components/Calculator.jsx

import React, { Component } from 'react'
import {
  BoilingVerdict,
  toCelsius,
  toFahrenheit,
  PenguinVerdict,
  toPounds,
  toKilograms,
  tryConvert
} from '../utilities/Utilities'
import TemperatureInput from './TemperatureInput'
import WeightInput from './WeightInput'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Calculator extends Component {
  constructor (props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.handlePoundsChange = this.handlePoundsChange.bind(this)
    this.handleKilogramsChange = this.handleKilogramsChange.bind(this)
    this.state = {
      temperatureMeasure: '',
      temperatureUnit: 'c',
      weightMeasure: '',
      weightUnit: 'lbs'
    }
  }

  handleCelsiusChange (measure) {
    this.setState({ temperatureUnit: 'c', temperatureMeasure: measure })
    console.log('this.state in Calculator ===>', this.state)
  }

  handleFahrenheitChange (measure) {
    this.setState({ temperatureUnit: 'f', temperatureMeasure: measure })
    console.log('this.state in Calculator ===>', this.state)
  }

  handlePoundsChange (measure) {
    this.setState({ weightUnit: 'lbs', weightMeasure: measure })
  }

  handleKilogramsChange (measure) {
    this.setState({ weightUnit: 'kg', weightMeasure: measure })
  }

  render () {
    console.log('this.state in Calculator ===>', this.state)

    const celsiusMeasure =
      this.state.temperatureUnit === 'f'
        ? tryConvert(this.state.temperatureMeasure, toCelsius)
        : this.state.temperatureMeasure
    const fahrenheitMeasure =
      this.state.temperatureUnit === 'c'
        ? tryConvert(this.state.temperatureMeasure, toFahrenheit)
        : this.state.temperatureMeasure
    const kilogramsMeasure =
      this.state.weightUnit === 'lbs'
        ? tryConvert(this.state.weightMeasure, toKilograms)
        : this.state.weightMeasure
    const poundsMeasure =
      this.state.weightUnit === 'kg'
        ? tryConvert(this.state.weightMeasure, toPounds)
        : this.state.weightMeasure

    return (
      <Grid item xs={12}>
        <Card className='card'>
          <CardContent>
            <Typography
              className='typography'
              color='textSecondary'
              gutterBottom
            >
              Enter a temperature. Will water boil?
            </Typography>
            <TemperatureInput
              unit='c'
              measure={celsiusMeasure}
              onTemperatureChange={this.handleCelsiusChange}
            />
            <TemperatureInput
              unit='f'
              measure={fahrenheitMeasure}
              onTemperatureChange={this.handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsiusMeasure)} />
          </CardContent>
        </Card>

        <Card className='card'>
          <CardContent>
            <Typography
              className='typography'
              color='textSecondary'
              gutterBottom
            >
              Enter a weight. More or less than an adult male Emperor penguin?
            </Typography>
            <WeightInput
              unit='lbs'
              measure={poundsMeasure}
              onWeightChange={this.handlePoundsChange}
            />
            <WeightInput
              unit='kg'
              measure={kilogramsMeasure}
              onWeightChange={this.handleKilogramsChange}
            />
            <PenguinVerdict kilograms={parseFloat(kilogramsMeasure)} />
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
