import { StyleSheet, View } from 'react-native'
import React from 'react'
import { XStack, Text } from 'tamagui'

const TopSectionCalendar = (props : any) => {
    const { currentDate } = props

    console.log(currentDate)
  return (
    <View>
        <XStack>
            <Text color='$color.yellow1Light'>{currentDate}</Text>
            <Text color='$color.yellow1Light'></Text>
        </XStack>   
    </View>
  )
}

export default TopSectionCalendar

const styles = StyleSheet.create({})