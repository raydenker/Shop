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
        order: state.order.filter((el) => el.id !== payload), // возврвщаем новый массив, удалив элемент с id в payload
      }
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow, // возвращаем перевёрнутое значение
      }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (payload === el.id) { // нашли элемент id которого равен полученному payload
            const newQuantity = el.quantity + 1  // новое значение quantity
            return {
              ...el, // rest оператор, получили сюда все значения el
              quantity: newQuantity, // переписали quantity на новое значение в найденном элементе
            }
          } else {
            return el // простов вернули элемент, в случае ошибки или не найденного id
          }
        }),
      }
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (payload === el.id) { // нашли элемент id которого равен полученному payload
            const newQuantity = el.quantity - 1 // новое значение quantity
            return {
              ...el,// rest оператор, получили сюда все значения el
              quantity: newQuantity >= 0 ? newQuantity : 0, // переписали quantity на новое значение в найденном элементе, сделав проверку на >=0
            }
          } else {
            return el
          }
        }),
      }
    case 'ADD_GOODS':
      const itemIndex = state.order.findIndex(
        (itemOrder) => itemOrder.id === payload.id,
      ) //нашли индекс элемента сравнив по id
      let newOrder = null // создаём переменную, которая будет возвращаться, обновляя order
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem] // если индекс меньше нуля, в itemOrder попадёт полученнй элемент payload с количеством 1
      } else {
        newOrder = state.order.map((itmeOrder, index) => {
          // если индекс найден, и он совпадает порядковым номером в
          // списке в itemOrder попадёт полученнй элемент payload с изменяемым количеством
          if (index === itemIndex) {
            return {
              ...itmeOrder,
              quantity: itmeOrder.quantity + 1,
            }
          } else {
            // либо сам itmeOrder, поскольку такого аказа у нас нет
            return itmeOrder
          }
        })
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name, // перезаписываем имя добавленного в корзину товара беря его из payload
      }

    default:
      return state
  }
}
