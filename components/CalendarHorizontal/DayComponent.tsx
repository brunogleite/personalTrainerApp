import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from 'tamagui'
import StateCircle from './StatesComponent'

const DayComponent = (props: any) => {
    const { formattedDate } = props
    
  return (
    <View borderColor='$color.yellow1Light' borderWidth='$1' borderRadius="$14" paddingHorizontal='$2' paddingVertical='$6'>
        <Text color='$color.yellow1Light'>{formattedDate}</Text>
        <StateCircle />
    </View>
  )
}

export default DayComponent