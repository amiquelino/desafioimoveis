import React from 'react'
import renderer from 'react-test-renderer'
import SelectRegion from '../SelectRegion'

describe('SelectRegion', ( ) => {
  const id = 'selectTest'
  const regions = require('../../../api/valores.json')
  it('render using Snapshots', ( ) => {
    let component = renderer.create(
        <SelectRegion dataset={regions}  name={id} selectedOption={'RJ'} controlFunc={jest.fn()}/>)
    expect( component ).toMatchSnapshot( )
  })
})
