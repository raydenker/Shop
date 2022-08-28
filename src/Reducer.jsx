export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      }
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (payload.id === el.id) {
            const newQuantity = el.quantity + 1
            return {
              ...el,
              quantity: newQuantity,
            }
          } else {
            return el
          }
        }),
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (payload.id === el.id) {
            const newQuantity = el.quantity - 1
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            }
          } else {
            return el
          }
        }),
      }
    case 'ADD_GOODS': {
      const itemIndex = state.order.findIndex(
        (itemOrder) => itemOrder.id === payload.id,
      )
      let newOrder = null
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
        //   setOrder([...order, newItem])
      } else {
        newOrder = state.order.map((itmeOrder, index) => {
          if (index === itemIndex) {
            return {
              ...itmeOrder,
              quantity: itmeOrder.quantity + 1,
            }
          } else {
            return itmeOrder
          }
        })
        //   setOrder(newOrder)
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }

    default:
      return state
  }
}
