import { useAuth } from '@/provider/authProvider'
import { Redirect } from 'expo-router'

const Page = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <Redirect href={'/(login)/home'} />
    )
  }

  return (
    <Redirect href={"/(drawer)/home"} />
  )
}

export default Page

