import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'tamagui'

const WorkoutImage = () => {
  return (
      <Image source={{
        uri: 'https://placekitten.com/200/300',
        width: 50,
        height: 50,
      }} />
  )
}

export default WorkoutImage

const styles = StyleSheet.create({})