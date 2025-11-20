import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder () {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    function handleSubmit (e) {
        e.preventDefault()
        if (!query) return;

        navigate(`/order/${query}`)
        setQuery("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input className="text-sm text-stone-500 placeholder:text-sm rounded-full bg-yellow-200 px-3 py-2 outline-0 w-28 focus:w-60 sm:focus:w-75 transition-all duration-300" placeholder="search order" value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchOrder