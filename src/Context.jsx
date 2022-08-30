import { reducer } from './Reducer'
const { createContext, useReducer } = require('react')
export const ShopContext = createContext()

const initStation = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
}

export const Context = ({ children }) => { // Context является обёрткой, куда будет помещаться элемент, который будет children для него
  // <Context >
  // <Shop/>
  // </Context>
  // его же и импортим он же нам возвращает ShopContext.provider со значением value


  const [value, dispatch] = useReducer(reducer, initStation) // используем useReducer; в value  попадает initStation
  // расширяем value за счёт функций-методов, которые вызываются 
  // в нужных местах и пофакту являются раширением initStation и 
  // передаются в контект, из которого извлекаем через  деструктуризацию 
  // в самой функции через dispatch передаём ключ для обработки в  reducer и payload, если передаём доп параметр 
  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }
  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: itemId })
  }
  value.handlBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' })
  }
  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId })
  }
  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: itemId })
  }
  value.AddGoods = (item) => {
    dispatch({ type: 'ADD_GOODS', payload: item })
  }
  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
