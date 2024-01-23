import { StyleSheet, View } from 'react-native'
import React from 'react'
import { YStack, Text } from 'tamagui'

const WorkoutDetails = () => {
    //TODO: ADD PROPS
  return (
    <YStack alignItems='flex-start'>
      <Text color='$color.yellow1Light'>Bench Press</Text>
      <Text color='$color.yellow1Light'>8 sets / 8-12 reps</Text>
    </YStack>
  )
}

export default WorkoutDetails

const styles = StyleSheet.create({})