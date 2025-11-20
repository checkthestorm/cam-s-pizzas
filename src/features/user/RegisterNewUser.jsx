import { useState } from "react"
import {userSignUp} from "../../services/supabase/supa_users"
import Button from "../../ui/Button"
import PopMessage from "../../ui/PopMessage"

function RegisterNewUser ({refresh}) {
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setPassword] = useState("")
    const [inputConfirmPassword, setConfirmPassword] = useState("")
    const [passwordMismatch, setPasswordMismatch] = useState(false)
    const [popMessageToggle, setPopMessageToggle] = useState(false);
    const [signUpError, setSignUpError] = useState(false)

    async function handleSubmit (e) {
        e.preventDefault()
        if (!inputEmail && !inputPassword && inputConfirmPassword) return

        if (inputPassword !== inputConfirmPassword) {
            setPasswordMismatch(true);
            return
        }

        const newUser = await userSignUp(inputEmail, inputPassword)

        if (newUser.hasOwnProperty("session")) {
            console.log(newUser)
            setPopMessageToggle(true)
        } else {
            setSignUpError(true)
            console.log(newUser)
        }
    }

return(
    <>
        {popMessageToggle && <PopMessage refresh={refresh} />}
        <div className="mt-5 bg-stone-200 max-w-[80vw] xl:max-w-[40vw] mx-auto border border-yellow-300 flex flex-col rounded py-4">
            <h3 className="text-lg font-bold">Sign up today.</h3>
            <form onSubmit={handleSubmit} className="flex flex-col p-4">
                <label typeof="text" className="text-start text-sm mb-2">e-mail:</label>
                <input className="rounded px-7 py-2 bg-stone-100 text-stone-600 outline-0 text-sm w-full" type="email" name="email" placeholder="enter your name" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                <label typeof="text" className="text-start text-sm mt-1 mb-2">password:</label>
                <input className="rounded px-7 py-2 bg-stone-100 text-stone-600 outline-0 text-sm w-full mb-3" type="password" name="password" placeholder="password" value={inputPassword} onChange={(e) => setPassword(e.target.value)} />
                <label typeof="text" className="text-start text-sm mt-1 mb-2">confirm password:</label>
                <input className="rounded px-7 py-2 bg-stone-100 text-stone-600 outline-0 text-sm w-full mb-3" type="password" name="passwordConfirm" placeholder="confirm password" value={inputConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {passwordMismatch && <p className="bg-red-600 p-3 text-stone-300 text-xs mb-2 rounded">passwords do not match.</p>}
                {signUpError && <p className="bg-red-600 p-3 text-stone-300 text-xs mb-2 rounded">account creation error.</p>}
                <Button type={"homeButton"} text={"enter"} onclick={handleSubmit} />
            </form>
        </div>
    </>
    )
}

export default RegisterNewUser