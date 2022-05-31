import ChartItem from './ChartItem'

function Chart({ data }) {
  return (
    <div className="flex items-end h-52 justify-center">
      {data.map(({ day, amount }) => (
        <ChartItem
          key={day}
          day={day}
          amount={amount}
          active={day === 'wed' ? true : false}
        />
      ))}
    </div>
  )
}

export default Chart
