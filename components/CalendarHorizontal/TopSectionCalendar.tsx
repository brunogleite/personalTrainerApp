import React from 'react'
import { XStack, Text, Button, View } from 'tamagui'

const TopSectionCalendar = (props : any) => {
    const { currentDate, toggleVisibility} = props

  return (
    <View padding='$-10'>
        <XStack alignItems='center' justifyContent='space-between'>
            <Text color='$color.yellow1Light'>{currentDate}</Text>
            <Button onPress={() => toggleVisibility()} color='$color.yellow1Light'>MAIS</Button>
        </XStack>   
    </View>
  )
}

export default TopSectionCalendar