import React, { useEffect } from 'react'
import { Input, Main, YStack, Text, XStack, Button } from 'tamagui'
import { Container } from '@/tamagui.config'
import SignInWithEmail from '@/hooks/SignInEmail'
import { useRouter } from 'expo-router'

const Page = () => {
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>('')
  const router = useRouter()

  async function RedirectUserToHome() {
    await SignInWithEmail(email, password)
    router.replace('/(drawer)/home')
  }


  return (
    <Main backgroundColor='$color.yellow1Dark' width='100%' height='100%'> 
        <Container>
          <YStack>
            <Input autoCapitalize='none' autoCorrect={false} onChangeText={e => setEmail(e)} backgroundColor="$color.yellow1Light" color='$color.yellow1dDark' size="$4" borderWidth={2} />
            <Input autoCapitalize='none' autoCorrect={false} secureTextEntry={true} onChangeText={e => setPassword(e)} backgroundColor="$color.yellow1Light" color='$color.yellow1dDark' size="$4" borderWidth={2} />
            <Text color='$color.yellow1Light'>Or</Text>
            <Button onPress={() => RedirectUserToHome()} size="$6" >Log in </Button>
          </YStack>
        </Container>
    </Main>
  )
}

export default Page