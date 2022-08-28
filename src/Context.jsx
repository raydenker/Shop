import { reducer } from './Reducer'

const { createContext, useReducer } = require('react')
export const ShopContext = createContext()
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }
  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } })
  }
  value.handlBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' })
  }
  value.AddGoods = (item) => {
    dispatch({
      type: 'ADD_GOODS',
      payload: item,      
    })
  }
  value.incQuantity = (itemId) => {
    dispatch({
      type: 'INC_QUANTITY',
      payload: {
        id: itemId,
      },
    })
  }

  value.decQuantity = (itemId) => {
    dispatch({
      type: 'DEC_QUANTITY',
      payload: {
        id: itemId,
      },
    })
  }
  value.setGoods = (data) => {
    dispatch({
      type: 'SET_GOODS',
      payload: data,
    })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
