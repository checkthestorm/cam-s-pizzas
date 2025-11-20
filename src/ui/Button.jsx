import { Link } from "react-router-dom"

function Button ({type, children, text, onclick, sendTo}) {
    if (type === "small") {
        return(
            <button onClick={onclick} className="inline-block bg-yellow-500 rounded-full text-xs px-3 py-1 uppercase cursor-pointer font-semibold hover:bg-yellow-300 transition-all duration-300">{text}</button>
        )
    }

    if (type === "primary") {
        return <button onClick={onclick} className="inline-block bg-yellow-500 rounded-full text-xs sm:text-sm px-5 py-2 uppercase cursor-pointer sm:font-semibold focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">{text}</button>
    }

    if (type === "homeButton") {
        return <button onClick={onclick} className="inline-block bg-yellow-500 rounded text-xs sm:text-sm px-5 py-2 uppercase cursor-pointer sm:font-semibold focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-all duration-300">{text}</button>
    }

    if (type === "secondary") {
        return <button onClick={onclick} className="inline-block rounded-full text-xs sm:text-sm px-5 py-1.5 uppercase cursor-pointer sm:font-semibold ring-1 ring-stone-500 focus:ring focus:bg-stone-400 focus:text-stone-500">{text}</button>
    }

    if (type === "quantityBtn") {
        return <button onClick={onclick} className="inline-block rounded-full text-xs px-3 py-1 ring-1 ring-stone-400 cursor-pointer">{children}</button>
    }

    if (type === "menuQuantityBtn") {
        return <button onClick={onclick} className="inline-block rounded-full text-xs px-5 py-1 ring-1 ring-yellow-500 bg-yellow-500 cursor-pointer">{children}</button>
    }

    if (type === "link") {
        return <Link to={sendTo} onClick={onclick} className="inline-block bg-yellow-500 rounded-full text-xs sm:text-sm px-5 py-2 uppercase cursor-pointer sm:font-semibold focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">{text}</Link>
    }
}

export default Button