import { useSelector } from "react-redux"
import Button from "../../ui/Button"

function Order () {
  const {orderId} = useSelector((store) => store.order)
  console.log(orderId)

  return (
    <div className="py-3 px-3 lg:px-20">
      <div className="p-4 bg-green-500 rounded">
        <p className="text-sm sm:text-base">your order <span className="font-bold">{orderId}</span> is on it's way !</p>
      </div>

      <div className="rounded mt-2 bg-green-500 p-4 flex flex-col items-center">
        <p className="mb-5">Delivery typically takes 20 minutes from time of order.</p>
        <h2 className="text-sm sm:text-base mb-5">you can track your order on the app with tracking number: <span className="font-bold">{orderId}</span>.</h2>

        <Button type={"link"} sendTo={"/menu"} text={"menu"} />
      </div>
    </div>
  )
}

export default Order