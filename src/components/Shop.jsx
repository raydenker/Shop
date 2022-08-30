import { useContext, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'
import { Cart } from './Cart'
import { BascetList } from './BascetList'
import { Allert } from './Allert'
import { ShopContext } from '../Context'

// API_KEY
// API_URL

function Shop() {
  const {
    loading,
    order,
    alertName,
    setGoods,
    isBasketShow,
  } = useContext(ShopContext)

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.specialFeatured)
      })
       // eslint-disable-next-line
  }, [])
  return (
    <main className="Shop bg-blue-100">
      <Cart quantity={order.length} />

      <div className="container mx-auto">
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow && <BascetList />}
        {alertName && <Allert />}
      </div>
    </main>
  )
}
export { Shop }
