import { useContext } from "react"
import { ShopContext } from "../Context"


// import styles from '../index.css'

function BascetItem(props) {
  const {
    id,
    name,
    price,
    quantity,   
  } = props
  const {removeFromBasket, decQuantity, incQuantity}= useContext(ShopContext)

  return (
    <div
      key={id}
      className="bg-indigo-50 text-amber-700  py-2 px-4 mb-5 flex justify-between"
    >
      <p className="flex items-center">
        {name} {price}
        <span
          className="flex items-center justify-center text-md p-0.5 cursor-pointer border-2 ml-2 mr-2 border-indigo-500 material-symbols-outlined"
          onClick={() => decQuantity(id)}
        >
          remove
        </span>
       <span className='shrink-0'> x {quantity}</span>
        <span
          className="flex items-center justify-center text-md p-0.5 ml-2 mr-2 cursor-pointer border-2 border-indigo-500 material-symbols-outlined"
          onClick={() => incQuantity(id)}
        >
          add
        </span>
       <span className='shrink-0'> =  {price * quantity}</span>
      </p>
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={() => removeFromBasket(id)}
      >
        close
      </span>
    </div>
  )
}
export { BascetItem }
