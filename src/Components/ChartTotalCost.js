import React from 'react'
import Interest from 'interestjs'
import {Chart} from 'react-google-charts'

const ChartTotalCost = (props) => {

  let rentInterest  = new Interest(props.rentValue, props.dwellingTime, props.annualInterest)
  let buyInterest  = new Interest(props.purchaseValue, props.dwellingTime, props.annualInterest)

  let data1 = {
    datasets: [
      {
        label: 'Alugar',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)1',
        data: [rentInterest.sum]
      },
      {
        label: 'Comprar',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 0, 255, 0.4)',
        hoverBorderColor: 'rgba(0, 0, 255, 1)',
        data: [buyInterest.sum]
      }
    ]
  }

  const data =[
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
         graph_id="ScatterChart"
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
