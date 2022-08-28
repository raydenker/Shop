import { useContext } from "react"
import { ShopContext } from "../Context"


function Cart(props) {
  // const { quantity = 0, handlBasketShow = Function.prototype } = props

  const {handlBasketShow, order}= useContext(ShopContext)
  const quantity = order.length
  return (
    <>
      <button
        className="material-symbols-outlined  Header_cart text-white text-3xl bg-amber-500 fixed right-4 bottom-3 md:top-3 z-10 w-14 h-14 flex justify-center items-center"
        onClick={handlBasketShow}
      >
        shopping_cart
        {quantity ? (
          <span className="text-sm text-white">{quantity}</span>
        ) : null}
      </button>
    </>
  )
}
export { Cart }
