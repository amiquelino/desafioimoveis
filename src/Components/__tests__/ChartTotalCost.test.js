import React from 'react'
import renderer from 'react-test-renderer'
import ChartTotalCost from '../ChartTotalCost'

describe('ChartTotalCost', ( ) => {

  it('render using Snapshots', ( ) => {
    let component = renderer.create(
        <ChartTotalCost
          rentValue={3000}
          purchaseValue={100000}
          dwellingTime={10}
          annualInterest={11.5}/>)
    expect( component ).toMatchSnapshot( )
  })
})
