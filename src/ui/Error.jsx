import { useRouteError } from "react-router-dom"
import errorImage from "../../public/errorImage.jpg"

function Error () {
    const error = useRouteError()

    return (
        <section className="h-full flex justify-center items-center">
            <div className="py-8 px-10 border border-yellow-500 rounded">
                <h1 className="text-lg sm:text-xl font-bold">{error.data || error.message}</h1>
            </div>
        </section>
    )
}

export default Error