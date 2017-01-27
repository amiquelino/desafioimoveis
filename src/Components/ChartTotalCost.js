import React from 'react'
import Interest from 'interestjs'
import {Chart} from 'react-google-charts'

const ChartTotalCost = (props) => {

  const rentInterest  = new Interest(props.rentValue, props.dwellingTime, props.annualInterest)
  const buyInterest  = new Interest(props.purchaseValue, props.dwellingTime, props.annualInterest)

  const data = [
    ['Element', 'Valor', { role: 'style' }],
    ['Alugar', rentInterest.sum, '#4C3FFF'],
    ['Comprar', buyInterest.sum, 'E612E8']
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
  rentValue: React.PropTypes.number.isRequired,
  purchaseValue: React.PropTypes.number.isRequired,
  dwellingTime: React.PropTypes.number.isRequired,
  annualInterest: React.PropTypes.number.isRequired
}

export default ChartTotalCost
