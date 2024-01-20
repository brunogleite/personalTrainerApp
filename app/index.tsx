import { useAuth } from '@/provider/authProvider'
import { Redirect } from 'expo-router'
import { useEffect } from 'react'

const Page = () => {
  const { user, session } = useAuth()
  
  useEffect(() => {
    console.log(user)
    console.log(session)
  }
  , [user, session])

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

