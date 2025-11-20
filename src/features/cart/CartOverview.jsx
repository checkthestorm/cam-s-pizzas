import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { currencyConverter } from "../../services/kitchen"


function CartOverview () {
    const {cartItems} = useSelector((store) => store.cart)

    const beansNum = cartItems?.length
    const overrallPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)

    return(
        <div className="bg-black text-white flex p-4 justify-between gap-6 uppercase text-xs sm:text-sm">
            <p className="space-x-4">
                <span>{beansNum} pizzas</span>
                <span>{currencyConverter(overrallPrice)}</span>
            </p>

            <Link to={'/cart'}>open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview