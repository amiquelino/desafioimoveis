import React from 'react'
import renderer from 'react-test-renderer'
import ChartTotalCost from '../ChartTotalCost'

describe('ChartTotalCost', ( ) => {

  it('render using Snapshots', ( ) => {
    const component = renderer.create(
        <ChartTotalCost
          rentInterest={3000}
          buyInterest={100000}
      />)
    expect( component ).toMatchSnapshot( )
  })
})
