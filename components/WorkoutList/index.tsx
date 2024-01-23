import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import WorkoutImage from './WorkoutImage'
import { XStack, View } from 'tamagui'
import WorkoutDetails from './WorkoutDetails'
import WorkoutMore from './WorkoutMore'

const spModes = ['percent', 'constant', 'fit', 'mixed'] as const

const WorkoutCard = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [snapPointsMode, setSnapPointsMode] =
  useState<(typeof spModes)[number]>('fit')

  return (
    <View width='100%' borderColor='$color.red3Light' borderWidth='$-10'>
        <XStack justifyContent='space-between' alignItems='center'>
            <WorkoutImage />
            <WorkoutDetails />
            <WorkoutMore
              position={position}
              setPosition={setPosition}
              open={open}
              setOpen={setOpen}
              modal={modal}
              setModal={setModal}
              innerOpen={innerOpen}
              setInnerOpen={setInnerOpen}
              snapPointsMode={snapPointsMode}
              setSnapPointsMode={setSnapPointsMode}  
            />
        </XStack>
    </View>
  )
}

export default WorkoutCard

const styles = StyleSheet.create({})