import { useEffect } from 'react'

function Allert(props) {
  const { name = '', closeAlert = Function.prototype } = props
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)
    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [name])
  return (
    <div className="Allert rounded-md bg-green-200 w-3/4 max-w-xs py-3 px-4 fixed bottom-3 md:bottom-auto md:top-16 right-4 z-30">
      <p className="text-green-800 font-medium text-xm">
        {name} добавлен в корзину
      </p>
    </div>
  )
}

export { Allert }
