import { useRouteError } from "react-router-dom"

function Error () {
    const error = useRouteError()

    return (
        <div className="bg-yellow-500 p-12 w-full h-screen">
            <p>something went wrong: <span className="font-bold">{error.data || error.message}</span></p>
        </div>
    )
}

export default Error