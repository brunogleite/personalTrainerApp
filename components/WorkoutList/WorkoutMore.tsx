
import React from 'react'
import { Button } from 'tamagui'
import WorkoutSheet from './WorkoutSheet'

const WorkoutMore = (props : any) => {
  const { open, setOpen, position, setPosition, modal, setModal, innerOpen, setInnerOpen, snapPointsMode, setSnapPointsMode } = props
  return (
    <Button onPress={() => setOpen(true)}>
        More
        <WorkoutSheet
          open={open}
          setOpen={setOpen}
          position={position}
          setPosition={setPosition}
          modal={modal}
          setModal={setModal}
          innerOpen={innerOpen}
          setInnerOpen={setInnerOpen}
          snapPointsMode={snapPointsMode}
          setSnapPointsMode={setSnapPointsMode}
        />
    </Button>
  )
}

export default WorkoutMore

