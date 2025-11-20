import { Link } from "react-router-dom"

function EmptyCart () {
    return (
        <div>
            <Link to={'/menu'}>back to Menu. &rarr;</Link>
            <h2>Cart is empty. Go back to fill your cart.</h2>
        </div>
    )
}

export default EmptyCart