function ChartItem({ day, amount, active }) {
  const size = Math.ceil(amount * 3) + 'px'

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <p className="bg-dark-brown text-very-pale-orange text-xs mb-1 p-1 rounded opacity-0 group-hover:opacity-100">
        ${amount}
      </p>
      <div
        className={`w-9 rounded group-hover:opacity-60 ${
          active ? 'bg-cyan' : 'bg-soft-red'
        } transition-opacity duration-200 ease-in`}
        style={{ height: size }}
      ></div>
      <p className="text-medium-brown text-xs mt-2">{day}</p>
    </div>
  )
}

export default ChartItem
