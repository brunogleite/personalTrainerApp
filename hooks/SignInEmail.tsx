import { supabase } from "@/utils/supabase";

async function SignInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) {
      console.log(error)
      return error
    }

    return data
  }

export default SignInWithEmail
  