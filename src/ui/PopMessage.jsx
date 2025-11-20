import { setSignUp } from "../services/UserSlice"
import Button from "./Button"
import { useDispatch } from "react-redux"

function PopMessage ({refresh}) {
    const dispatch = useDispatch()
    function handle () {
        // find a way to refresh the home page so the new user can log in
        refresh()
        dispatch(setSignUp())
    }

    return (
        <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-stone-200 border-2 border-yellow-500 p-8 flex flex-col gap-10 rounded">
                <h2>Account created successfully.</h2>
                <Button type={"primary"} onclick={handle} text={"Log in"} />
            </div>
        </div>
    )
}

export default PopMessage