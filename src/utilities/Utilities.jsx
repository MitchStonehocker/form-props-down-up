// src/utilities/Utilities.jsx

import React from 'react'

export const unitNames = {
  temperature: {
    c: 'Celsius',
    f: 'Fahrenheit'
  },
  weight: {
    lbs: 'Pounds',
    kg: 'Kilograms'
  }
}

export function toCelsius (fahrenheit) {
  // return ((fahrenheit - 32) * 5) / 9
  return (5 / 9) * (45967 / 100 + fahrenheit) - 5463 / 20
}

export function toFahrenheit (celsius) {
  // return (celsius * 9) / 5 + 32
  return ((5463 / 20 + celsius) * 9) / 5 - 45967 / 100
}

export function toPounds (kilograms) {
  // return ((fahrenheit - 32) * 5) / 9
  return (100000000 * kilograms) / 45359237
}

export function toKilograms (pounds) {
  // return ((fahrenheit - 32) * 5) / 9
  return (45359237 * pounds) / 100000000
}

export function tryConvert (measure, convert) {
  const input = parseFloat(measure)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

export function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water will boil.</p>
  }
  return <p>The water will not boil.</p>
}

export function PenguinVerdict (props) {
  if (props.kilograms >= 45) {
    return <p>More than an adult male Emperor.</p>
  }
  return <p>Less than an adult male Emperor.</p>
}
