import React from 'react'
import {Chart} from 'react-google-charts'

const ChartTotalCost = (props) => {
  const data = [
    ['Element', 'Valor', { role: 'style' }],
    ['Alugar', props.rentInterest, '#4C3FFF'],
    ['Comprar', props.buyInterest, 'E612E8']
  ]

  const options={
    isStacked: true,
    vAxis: { scaleType: 'log' },
    legend: 'none'
  }

  return (
    <div>
      <h2>Custo total</h2>
       <Chart
         chartType="ColumnChart"
         data={data}
         options={options}
         graph_id="chartTotalCost"
         width="100%"
         height="400px"
         legend_toggle
        />
    </div>
  )
}

ChartTotalCost.propTypes = {
  rentInterest: React.PropTypes.number.isRequired,
  buyInterest: React.PropTypes.number.isRequired,
}

export default ChartTotalCost
