import { useDispatch, useSelector } from "react-redux"
import { addItems } from "../../services/CartSlice"
import Button from "../../ui/Button"
import CartUpdate from "../cart/CartUpdate"
import { currencyConverter, editString } from "../../services/kitchen"
import { useEffect, useState } from "react"  

function Beans ({beans}) {
  const {price, image, description, id, title} = beans
  const dispatch = useDispatch()
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleWidthChanges () {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWidthChanges)
  }, [])

  let value;
  if (width > 700) {
    value = 170
  } else {
    value = 50
  }

  // don't touch
  const {cartItems} = useSelector((store) => store.cart)
  const cart = Array.isArray(cartItems) ? cartItems : ""

  const isAdded = cart.some((items) => items.id === id);

  function handleSubmit () {
    // guard for when it is already added.
    const newBean = {
      id,
      description,
      title,
      price,
      quantity: 1,
      totalPrice: price
    }

    dispatch(addItems(newBean));
    // setItemAdded(true)
  }

  return (
    <div className="grid grid-rows-[min-content] sm:grid-rows-[min-content] grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr] gap-x-2.5 py-3 sm:py-4">
        <img src={image} alt={"image"} className="w-20 h-20 self-start object-cover block rounded-[50%]" />

      <div className="flex flex-col">
        <p className="text-xs font-bold">{title}</p>
        <p className="font-light">{editString(description, value)}</p>

        <div className="mt-auto flex justify-between items-baseline">
          <p className="font-semibold">{currencyConverter(price)}</p>
          {isAdded ? <CartUpdate id={id} /> : <Button type={"small"} text={"add to cart"} onclick={handleSubmit} />}
        </div>
      </div>
    </div>

    // real
    //     <div className="flex gap-3 py-4 h-40">
    //   <div className="h-full">
    //     <img src={image} alt={"image"} className="h-full w-auto object-cover" />
    //   </div>

    //   <div className="basis-full">
    //     <p className="sm:text-lg">{title}</p>
    //     <p className="text-xs sm:text-sm italic mb-3 sm:my-2">{editString(description, value)}</p>

    //     <div className="flex justify-between items-center">
    //       <p className="text-sm font-bold">{currencyConverter(price)}</p>
    //       {isAdded ? <CartUpdate id={id} /> : <Button type={"small"} text={"add to cart"} onclick={handleSubmit} />}
    //     </div>
    //   </div>
    // </div>
  )
}
{/* <DeleteIcon /> */}
// {/* <Button type={"small"} text={"add to cart"} onclick={handleSubmit} /> */}
export default Beans