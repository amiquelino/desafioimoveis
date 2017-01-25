import React from 'react'
import { getValues } from "../values"

const SelectRegion = (props) => {
  const values = getValues()
  let regions = Object.keys(values)

  return (
      <select
        name={name}
        value={props.selectedOption}
        onChange={props.controlFunc}>
        {regions.map(opt => {
          return (
            <option
              key={opt}
              value={opt}>{opt}</option>
          )
        })}
      </select>
  )
}

SelectRegion.propTypes = {
  name: React.PropTypes.string.isRequired,
  selectedOption: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired
}

export default SelectRegion
