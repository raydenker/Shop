import { useContext } from 'react'
import { GoodsItem } from './GoodsItem'

import { ShopContext } from '../Context'

function GoodsList(props) {
  // const {  AddGoods = Function.prototype } = props
  const {goods = []} = useContext(ShopContext)
  if (!goods.length) {
  return    <h3>Ничего нет</h3>
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 bg-stripes-fuchsia rounded-lg">
        {goods.map((item) => {
           return <GoodsItem key={item.id} {...item} />
        })}
    </div>
  )
}
export { GoodsList }
