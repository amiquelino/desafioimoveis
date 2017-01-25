import React from 'react'
import renderer from 'react-test-renderer'
import SelectRegion from '../SelectRegion'

describe('SelectRegion', ( ) => {
  let id = 'selectTest'

  it('render using Snapshots', ( ) => {
    let component = renderer.create(
        <SelectRegion   name={id} selectedOption={'RJ'} controlFunc={jest.fn()}/>)
    expect( component ).toMatchSnapshot( )
  })
})
