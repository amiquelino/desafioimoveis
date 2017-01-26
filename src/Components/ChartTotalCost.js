import React from 'react'
import {Bar} from 'react-chartjs-2'
import Interest from 'interestjs'

const ChartTotalCost = (props) => {

  let rentInterest  = new Interest(props.rentValue, props.dwellingTime, props.annualInterest)
  let buyInterest  = new Interest(props.purchaseValue, props.dwellingTime, props.annualInterest)

  let data = {
    datasets: [
      {
        label: 'Alugar',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
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

  return (
    <div>
      <h2>Custo total</h2>
      <Bar
        data={data}
        width={100}
        height={150}
        options={{
          maintainAspectRatio: false
        }}
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
