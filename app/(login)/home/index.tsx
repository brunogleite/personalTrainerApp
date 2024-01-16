import React, { useEffect } from 'react'
import { Input, Main, YStack, Text, XStack, Button } from 'tamagui'
import { Container } from '@/tamagui.config'
import { color } from '@tamagui/themes'
import { Platform } from 'react-native'

const Page = () => {
  const [platForm, setPlatform] = React.useState('')

  useEffect(()  => {
    if(Platform.OS === 'ios') {
      setPlatform('ios')
    }
    if(Platform.OS === 'android') {
      setPlatform('android')
    }
  },[])
  


  return (
    <Main backgroundColor='$color.yellow1Dark' width='100%' height='100%'> 
        <Container>
          <YStack>
            <Input backgroundColor="$color.yellow1Light" color='$color.yellow1dDark' size="$4" borderWidth={2} />
            <Input backgroundColor="$color.yellow1Light" color='$color.yellow1dDark' size="$4" borderWidth={2} />
            <Text color='$color.yellow1Light'>Or</Text>
            <XStack>
              <Button disabled={platForm == 'ios'} size="$6">Google</Button>
              <Button disabled={platForm == 'android'} size="$6"> Apple </Button>
            </XStack>
          </YStack>
        </Container>
    </Main>
  )
}

export default Page