import { useSelector, useDispatch } from "react-redux"
import EmptyCart from "../cart/EmptyCart";
import Button from "../../ui/Button";
import { getUserID } from "../../services/supabase/supa_users";
import { useState } from "react";
import { sendOrders } from "../../services/supabase/supa_orders";
import { createOrderId } from "../../services/OrderSlice";
import { clearCart } from "../../services/CartSlice";
import { useNavigate } from "react-router-dom";

function CreateNewOrder () {
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [firstName, setFirstName] = useState("")
  const [priorityOrder, setPriorityOrder] = useState(false)
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()

    const contact = [{"phone": phone, "address": address}]
    
    const userId = await getUserID()
    console.log(userId)

    const arr = [];
    cartItems.map((item) => {
    arr.push({
        "pizzaId": item.id,
        "quantity": item.quantity,
        "unitPrice": item.price,
        "totalPrice": item.totalPrice
      })
    })

    const overrallPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)

    const data = await sendOrders(contact, arr, overrallPrice)

    if (data !== null) {
      console.log(data)
      dispatch(clearCart())
      setAddress("")
      setFirstName("")
      setPhone("")
      dispatch(createOrderId(data[0].id))
      navigate(`/order/${data[0].id}`)
    }
  }

  if (cartItems.length < 1) return <EmptyCart />

  return (<div className="p-4 sm:p-10 text-sm md:text-lg">
            <h2 className="text-lg font-semibold mb-3 sm:mb-7">Ready to order ?</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <label>First name: </label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstname" type="text" className="outline-1 outline-yellow-500 flex-1 rounded-full px-3 py-1 sm:py-2 text-sm text-stone-500" />
              </div>
      
              <div className="flex items-center gap-2 mt-2">
                <label>address: </label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} name="address" type="text" className="outline-1 outline-yellow-500 flex-1 rounded-full px-3 py-1 sm:py-2 text-sm text-stone-500" />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <label className="text-wrap">Phone number: </label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} name="phoneNumber" type="tel" className="outline-1 outline-yellow-500 flex-1 rounded-full px-3 py-1 sm:py-2 text-sm text-stone-500" />
              </div>

              <div className="my-5 space-x-1">
                <input type="checkbox" id="priority" value={priorityOrder} onClick={() => setPriorityOrder(!priorityOrder)} />
                <label htmlFor="priority" >Would you like to make your order a priority ?</label>
              </div>

              <Button type={"primary"} text={"order"} onclick={handleSubmit} />
            </form>
        </div>
  )
}

export default CreateNewOrder