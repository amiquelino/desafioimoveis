import React from 'react'

const SelectRegion =  (props) => {

  const regions = Object.keys(props.dataset)
  
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
  controlFunc: React.PropTypes.func.isRequired,
  dataset: React.PropTypes.object.isRequired,
}

export default SelectRegion
