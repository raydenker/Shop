function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    AddGoods = Function.prototype,
  } = props
  return (
    <div
      key={id}
      className="group relative border-2 border-blue-800 border-solid"
    >
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
      
          src={full_background ? full_background : `https://via.placeholder.com/230x320?text=${name}`}
          alt={name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="pt-4 pb-2 px-2  flex justify-between flex-wrap items-center">
        <div className="w-full	 mb-2">
          <h3 className="text-lg font-medium text-gray-700">
            <a href="/">
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {name}
            </a>
          </h3>
          <p className="mt-1 text-md  text-gray-500">{description}</p>
        </div>

        <button
          onClick={()=>{AddGoods({
            id,
            name,
            price
          })}}
          className="px-4 py-2 w-3/6 font-semibold text-sm bg-sky-500 hover:bg-blue-800 text-white rounded-none shadow-sm"
        >
          Купить
        </button>
        <p className="text-lg font-medium w-2/6 text-gray-900">{price}</p>
      </div>
    </div>
  )
}
export { GoodsItem }
