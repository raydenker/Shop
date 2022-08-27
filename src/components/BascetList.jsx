import { BascetItem } from './BascetItem'

function BascetList(props) {
  const {
    order = [],
    handlBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
    <div className="collection bg-indigo-900 p-4 lg:inset-40 inset-y-20 md:inset-x-10 inset-x-4 fixed z-20 mx-auto shadow-md shadow-blue-500/50 overflow-y-auto">
      <span
        onClick={handlBasketShow}
        className="material-symbols-outlined  cursor-pointer absolute right-3 top-3 text-white "
      >
        close
      </span>
      <h2 className="text-amber-500 text-2xl mb-4">Корзина</h2>
      {order.length ? (
        order.map((item) => (
         <BascetItem
            key={item.id}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <div className="Basket-item bg-indigo-50 text-amber-500 py-2 px-4 mb-5 flex justify-between">
          <p>Корзина пуста</p>
        </div>
      )}
      <p className="Basket-price ml-auto text-xl bg-indigo-50 text-amber-500 flex py-2 px-4 justify-between items-center">
        <span>Общая стоимость</span>
        <span className="text-2xl">{totalPrice}руб</span>
      </p>
      <button className='block px-5 py-3 bg-amber-500 text-white text-xl font-medium mt-3'>
        Оформить
      </button>
    </div>
  )
}
export { BascetList }
