import { useEffect, useContext } from 'react'
import { ShopContext } from '../Context'

import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'
import { Cart } from './Cart'
import { BascetList } from './BascetList'
import { Allert } from './Allert'

// API_KEY
// API_URL

function Shop() {
  const { loading, setGoods, order, isBasketShow, alertName } = useContext(
    ShopContext,
  )
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.specialFeatured)
        // setLoading(false)
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
