import { useState } from "react"
import { createUser, setSignUp } from "../../services/UserSlice"
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import { logIn } from "../../services/supabase/supa_users"

function CreateUser () {
    const [inputName, setInputName] = useState("")
    const [inputPassword, setPassword] = useState("")
    const [loginError, setLoginError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function logInFunction () {
        const user = await logIn(inputName, inputPassword)

        if (user.user === null) {
            setInputName("")
            setPassword("")
            setLoginError(true)
        }

        dispatch(createUser(user.user.email))
        setInputName("")
        navigate('/menu')
    }

    function handleSubmit (e) {
        e.preventDefault()
        logInFunction()
    }

    // HOME JSX NOT MOVING TO SIGN UP

    function handleSignUp () {
        dispatch(setSignUp())
        navigate('/')
    }

    return(
        <div className="mt-5 bg-stone-200 max-w-[80vw] xl:max-w-[40vw] mx-auto border border-yellow-300 flex flex-col rounded py-4">
            <h3 className="text-lg font-bold">Log in to start.</h3>
            <form onSubmit={handleSubmit} className="flex flex-col p-4">
                <label typeof="text" className="text-start text-sm mb-2">e-mail:</label>
                <input className="rounded px-7 py-2 bg-stone-100 text-stone-600 outline-0 text-sm w-full" type="email" name="email" placeholder="enter your name" value={inputName} onChange={(e) => setInputName(e.target.value)} onClick={() => setLoginError(false)} />
                <label typeof="text" className="text-start text-sm mt-1 mb-2">password:</label>
                <input className="rounded px-7 py-2 bg-stone-100 text-stone-600 outline-0 text-sm w-full mb-3" type="password" name="password" placeholder="password" value={inputPassword} onChange={(e) => setPassword(e.target.value)} onClick={() => setLoginError(false)} />
                {loginError && <p className="bg-red-600 p-3 text-stone-300 text-xs mb-2 rounded">incorrect e-mail or password.</p>}
                <Button type={"homeButton"} text={"enter"} onclick={handleSubmit} />
            </form>
            <button className="inline self-end w-20 cursor-pointer text-xs hover:text-stone-500" onClick={handleSignUp}>sign up.</button>
        </div>
    )
}

export default CreateUser