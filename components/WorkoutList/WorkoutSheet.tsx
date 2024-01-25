import { Link, LinkProps } from 'expo-router'
import React from 'react'
import { Button, H2, View, Paragraph, Sheet, SheetProps, YStack, Text } from 'tamagui'

const WorkoutSheet = (props : any) => {
    const { open, setOpen, position, setPosition, modal, setModal, innerOpen, setInnerOpen, snapPointsMode, setSnapPointsMode } = props
    const snapPoints = undefined
  return (
    <Sheet
    forceRemoveScrollEnabled={open}
    modal={modal}
    open={open}
    onOpenChange={setOpen}
    snapPoints={snapPoints}
    snapPointsMode={snapPointsMode}
    dismissOnSnapToBottom
    position={position}
    onPositionChange={setPosition}
    zIndex={100_000}
    animation="quick"
  >
    <Sheet.Overlay
      animation="lazy"
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
    />
    <Sheet.Handle />
    <Sheet.Frame padding="$4" justifyContent="center" space="$5">
      <Link
        href={{
          pathname: "/(videoDetails)/[id]",
          params: { id: 'bacon' }
        }}>
          View user
        </Link>
        <Text>Exercise History</Text>
        <Text>Replace Exercise</Text>
    </Sheet.Frame>
  </Sheet>
  )
}

function InnerSheet(props: SheetProps) {
    return (
      <Sheet animation="quick" modal snapPoints={[90]} dismissOnSnapToBottom {...props}>
        <Sheet.Overlay
          animation="quick"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame flex={1} justifyContent="center" alignItems="center" space="$5">
          <Sheet.ScrollView>
            <YStack p="$5" gap="$8">
              <Button
                size="$6"
                circular
                alignSelf="center"
                onPress={() => props.onOpenChange?.(false)}
              />
              <H2>Hello world</H2>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Paragraph key={i} size="$8">
                  Eu officia sunt ipsum nisi dolore labore est laborum laborum in esse ad
                  pariatur. Dolor excepteur esse deserunt voluptate labore ea. Exercitation
                  ipsum deserunt occaecat cupidatat consequat est adipisicing velit
                  cupidatat ullamco veniam aliquip reprehenderit officia. Officia labore
                  culpa ullamco velit. In sit occaecat velit ipsum fugiat esse aliqua dolor
                  sint.
                </Paragraph>
              ))}
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    )
  }

export default WorkoutSheet