import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from "../../services/CartSlice";
import DeleteIcon from "../../ui/DeleteIcon"

function CartUpdate ({id}) {
    const {cartItems} = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    const item = cartItems.find((item) => item.id === id);
    const quantity = item.quantity;

    function handleIncreaseQuantity() {
        dispatch(increaseItemQuantity(id))
    }

    function handleDecreaseQuantity() {
        const item = cartItems.find((item) => item.id === id)
        console.log(item)
        if (item.quantity === 1) return;

        dispatch(decreaseItemQuantity(id))
    }

    function handleDeleteCartItem () {
        dispatch(removeItem(id))
    }

    return (
        <div className="flex items-center space-x-2">
            <Button type={"quantityBtn"} onclick={handleDecreaseQuantity}>-</Button>
            <Button type={"quantityBtn"} onclick={handleIncreaseQuantity}>+</Button>
            <span className="text-xs">{quantity}</span>
            {window.innerWidth > 600 ? <Button type={"small"} text={"delete"} onclick={handleDeleteCartItem} /> : <DeleteIcon onclick={handleDeleteCartItem} />}
        </div>)
}
{/*  */}
export default CartUpdate