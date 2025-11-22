import { useSelector } from "react-redux"
import Button from "../../ui/Button"
import CartItems from './CartItems.jsx'
import { clearCart } from "../../services/CartSlice.js"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Cart () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function clearCartFunction () {
    dispatch(clearCart())
    navigate('/menu')
  }

  const {cartItems} = useSelector((store) => store.cart)
  console.log(cartItems)
  
  return (
    cartItems.length > 0 ? (<div className="p-6 text-sm">
      <ul className="divide-y divide-stone-300">
        {cartItems?.map((items) => <CartItems item={items} key={items.id} />)}
      </ul>
      <div className="space-x-2 mt-4">
        <Button type={"link"} text={"order now"} sendTo={'/order/new'} />
        <Button type={"secondary"} text={"clear cart"} onclick={clearCartFunction} />
      </div>
    </div>) : (<div className="p-4 space-y-3.5">
                  <p>your cart is empty.</p>
                  <Button type={"link"} sendTo={"/menu"} text={"menu"} />
              </div>)
  )
}

export default Cart