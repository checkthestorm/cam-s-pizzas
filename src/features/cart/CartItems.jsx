import { currencyConverter } from "../../services/kitchen"
import CartUpdate from "./CartUpdate"

function CartItems ({item}) {
  // const {cartItems} = useSelector((store) => store.cart)

  console.log(item.id)
  return (
    <li className="py-2 sm:flex sm:items-center justify-between">
            <p>{item.quantity} x {item.title}</p>
            <div className="flex justify-between items-center mt-2 sm:mt-0">
              <p className="text-sm font-bold sm:mr-6">{currencyConverter(item.totalPrice)}</p>
              {/* PRICE IS NOT UPDATING ?? */}

              <CartUpdate id={item.id} />
            </div>
      </li>
  )
}

export default CartItems