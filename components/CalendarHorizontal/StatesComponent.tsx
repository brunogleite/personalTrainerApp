import { View } from 'react-native'
import React from 'react'
import { Circle } from 'tamagui'
import { isFuture, isPast } from 'date-fns'

const StateCircle = (props: any) => {
const { Date, currentDate } = props

const color = isPast(Date)
? '$color.red3Light'  // If there are dates before the current date
: isFuture(Date)
? '$color.gray7Dark' // If there are dates after the current date
: '$color.green3Light'; 

  return (
    <Circle size="$2" backgroundColor={color} />
  )
}

export default StateCircle