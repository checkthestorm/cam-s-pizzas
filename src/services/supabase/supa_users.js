import supabase from "./supabase"
export async function getUser () {
   const { data } = await supabase.auth.getUser()
    console.log(data)
    return data
}

export async function getUserID () {
   const { data } = await supabase.auth.getUser()
    console.log(data)
    return data.user.id
}

export async function logIn (username, password) {   
    const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password
    })

    if (error) console.log(error.message)

    console.log(data)
    return data
}

export async function userSignUp (username, password) {
const { data, error } = await supabase.auth.signUp({
  email: username,
  password: password
})

if (error) {
    console.log({error})
    return error

    // error.error.name
}

return data
}