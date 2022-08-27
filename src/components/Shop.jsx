import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'
import { Cart } from './Cart'
import { BascetList } from './BascetList'
import { Allert } from './Allert'

// API_KEY
// API_URL

function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setIsBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const closeAlert = () => {
    setAlertName('')
  }

  const handlBasketShow = () => {
    setIsBasketShow(!isBasketShow)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId)
    setOrder(newOrder)
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (itemId === el.id) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (itemId === el.id) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const AddGoods = (item) => {
    const itemIndex = order.findIndex((itemOrder) => itemOrder.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((itmeOrder, index) => {
        if (index === itemIndex) {
          return {
            ...itmeOrder,
            quantity: itmeOrder.quantity + 1,
          }
        } else {
          return itmeOrder
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.specialFeatured && setGoods(data.specialFeatured)
        setLoading(false)
      })
  }, [])
  return (
    <main className="Shop bg-blue-100">
      <Cart quantity={order.length} handlBasketShow={handlBasketShow} />

      <div className="container mx-auto">
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList goods={goods} AddGoods={AddGoods} />
        )}
        {isBasketShow && (
          <BascetList
            order={order}
            handlBasketShow={handlBasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
        {alertName && <Allert name={alertName} closeAlert={closeAlert} />}
      </div>
    </main>
  )
}
export { Shop }
