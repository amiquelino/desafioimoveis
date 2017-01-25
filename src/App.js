import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'react-input-range/dist/react-input-range.css'
import SelectRegion from './Components/SelectRegion'
import InputRange from 'react-input-range'
import ChartTotalCost from './Components/ChartTotalCost'
import { findValue } from "./values"

class App extends Component {
  constructor(props, context) {
    super(props, context)

    let value = findValue("RJ")
    this.state = {
      region: "RJ",
      rentValue: value.aluguel,
      purchaseValue: value.compra,
      dwellingTime: 10,
      annualInterest:11.5
    };
  }

  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Comprar ou Alugar?</h2>
        </div>
        <br/>
        <form className="form">
          <div className="formField">
            <label>
              Selecione seu estado:
              <SelectRegion
                name="SelectRegion"
                selectedOption={this.state.region}
                controlFunc={(e) => {
                 let value = findValue(e.target.value)
                 this.setState({
                   region: e.target.value,
                   rentValue: value.aluguel,
                   purchaseValue: value.compra,
                 })
                }}/>
            </label>
          </div>
          <div className="formField">
            <label >Valor do aluguel mensal (R${this.state.rentValue.toLocaleString('pt-BR')})</label>
            <InputRange
              formatLabel={(labelValue) => {return ""}}
              step={100}
              maxValue={10000}
              minValue={100}
              value={this.state.rentValue}
              onChange={(component, value) => {
                this.setState({
                  rentValue: value,
                });
              }}
            />
          </div>
          <div className="formField">
            <label >Valor do imóvel para comprar (R${this.state.purchaseValue.toLocaleString('pt-BR')})</label>
            <InputRange
              formatLabel={(labelValue) => {return ""}}
              step={10000}
              maxValue={2000000}
              minValue={10000}
              value={this.state.purchaseValue}
              onChange={(component, value) => {
                this.setState({
                  purchaseValue: value,
                });
              }}
            />
          </div>
          <div className="formField">
            <label >Quanto tempo você irá morar? ({this.state.dwellingTime} anos).</label>
            <InputRange
              formatLabel={(labelValue) => {return ""}}
              maxValue={30}
              minValue={1}
              value={this.state.dwellingTime}
              onChange={(component, value) => {
                this.setState({
                  dwellingTime: value,
                });
              }}
            />
          </div>
          <div className="formField">
            <label >Taxa de juros anual ({this.state.annualInterest}%).</label>
            <InputRange
              formatLabel={(labelValue) => {return ""}}
              step={0.5}
              maxValue={25.0}
              minValue={0.5}
              value={this.state.annualInterest}
              onChange={(component, value) => {
                this.setState({
                  annualInterest: value,
                });
              }}
            />
          </div>
          <ChartTotalCost
            rentValue={this.state.rentValue}
            purchaseValue={this.state.purchaseValue}
            dwellingTime={this.state.dwellingTime}
            annualInterest={this.state.annualInterest}/>
        </form>
      </div>
    )
  }
}

export default App;
