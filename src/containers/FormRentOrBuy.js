import React from 'react'
import { connect } from 'react-redux'
import { setRegion, setRentValue, setPurchaseValue, setDwellingTime, setAnnualInterest } from '../actions/rentOrBuy'
import SelectRegion from '../components/SelectRegion'
import InputRange from 'react-input-range'
import ChartTotalCost from '../components/ChartTotalCost'

export const FormRentOrBuy = ({
  regions,
  region,
  rentValue,
  purchaseValue,
  dwellingTime,
  annualInterest,
  rentInterest,
  buyInterest,
  onRegionSelected,
  updateRentValue,
  updatePurchaseValue,
  updateDwellingTime,
  updateAnnualInterest
}) => (
  <form className="form">
    <div className="formField">
      <label>
        Selecione seu estado:
        <SelectRegion
          dataset={regions}
          name="SelectRegion"
          selectedOption={region}
          controlFunc={onRegionSelected}/>
      </label>
    </div>
    <div className="formField">
      <label >Valor do aluguel mensal (R${rentValue.toLocaleString('pt-BR')})</label>
      <InputRange
        formatLabel={(labelValue) => {return ""}}
        step={100}
        maxValue={10000}
        minValue={100}
        value={rentValue}
        onChange={updateRentValue}
      />
    </div>
    <div className="formField">
      <label >Valor do imóvel para comprar (R${purchaseValue.toLocaleString('pt-BR')})</label>
      <InputRange
        formatLabel={(labelValue) => {return ""}}
        step={10000}
        maxValue={2000000}
        minValue={10000}
        value={purchaseValue}
        onChange={updatePurchaseValue}
      />
    </div>
    <div className="formField">
      <label >Quanto tempo você irá morar? ({dwellingTime} anos).</label>
      <InputRange
        formatLabel={(labelValue) => {return ""}}
        maxValue={30}
        minValue={1}
        value={dwellingTime}
        onChange={updateDwellingTime}
      />
    </div>
    <div className="formField">
      <label >Taxa de juros anual ({annualInterest}%).</label>
      <InputRange
        formatLabel={(labelValue) => {return ""}}
        step={0.5}
        maxValue={25.0}
        minValue={0.5}
        value={annualInterest}
        onChange={updateAnnualInterest}
      />
    </div>
    <ChartTotalCost rentInterest={rentInterest} buyInterest={buyInterest} />
    >
  </form>

)
export default connect(
  ( state ) => ({
    regions: state.regions.dataset,
    region: state.rentOrBuy.region,
    rentValue: state.rentOrBuy.rentValue,
    purchaseValue: state.rentOrBuy.purchaseValue,
    dwellingTime: state.rentOrBuy.dwellingTime,
    annualInterest: state.rentOrBuy.annualInterest,
    rentInterest: state.rentOrBuy.compoundInterest.rent,
    buyInterest: state.rentOrBuy.compoundInterest.buy
  }),
  ( dispatch ) => ({
    onRegionSelected: ( e ) => dispatch(setRegion( e.target.value )),
    updateRentValue: ( component, value ) => dispatch(setRentValue( value )),
    updatePurchaseValue: ( component, value ) => dispatch(setPurchaseValue( value )),
    updateDwellingTime: ( component, value ) => dispatch(setDwellingTime( value )),
    updateAnnualInterest: ( component, value ) => dispatch(setAnnualInterest( value ))
  })
)( FormRentOrBuy )
