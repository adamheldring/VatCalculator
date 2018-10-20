import React from "react"
import { exVatToIncVat, incVatToExVat } from "../calculations"
import Radiobuttons from "./radiobuttons"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
      amountVat: 0
    }
  }

  handleRadioChange = (e) => {
    const newVatRate = parseInt(e.target.value, 10)
    this.setState({
      vatRate: newVatRate,
      incVat: Math.round(exVatToIncVat(newVatRate, this.state.exVat)),
      amountVat: Math.round(exVatToIncVat(newVatRate, this.state.exVat) - this.state.exVat)
    })
  }
  handleIncVatChange = (e) => {
    const newUserInputValue = parseInt(e.target.value, 10)
    console.log('IncVatChange')
    {this.setState({
        incVat: newUserInputValue,
        exVat: Math.round(incVatToExVat(this.state.vatRate, e.target.value)),
        amountVat: Math.round(newUserInputValue - incVatToExVat(this.state.vatRate, e.target.value))
      })
    }
  }
  handleExVatChange = (e) => {
    const newUserInputValue = parseInt(e.target.value, 10)
    console.log('ExVatChange')
    {this.setState({
        incVat: Math.round(exVatToIncVat(this.state.vatRate, e.target.value)),
        exVat: newUserInputValue,
        amountVat: Math.round(exVatToIncVat(this.state.vatRate, e.target.value) - newUserInputValue)
      })
    }
  }

  render() {
    return (
      <div className="outer-wrapper">
        <img className="image" src="./assets/calc.png" alt="calculator" />
        <form className="form">
          <h1 className="h1-logo">VAT LOCO</h1>
          <h1 className="h1-shadow">VAT LOCO</h1>
          <Radiobuttons vatRate={this.state.vatRate} changeHandler={this.handleRadioChange} />

          <br />
          <div className="formsection__textfields">
            <label htmlFor="incVat">Including VAT:</label>
            <br />
            <input
              type="text"
              id="incVat"
              name="incVat"
              onChange={this.handleIncVatChange}
              value={this.state.incVat} />
            <br />
            <label htmlFor="exVat">Excluding VAT:</label>
            <br />
            <input
              type="text"
              id="exVat"
              name="exVat"
              onChange={this.handleExVatChange}
              value={this.state.exVat} />
            <br />
            <label htmlFor="amountVat">Total amount VAT:</label>
            <br />
            <input
              type="text"
              id="amountVat"
              name="amountVat"
              value={this.state.amountVat} />
            <br />
          </div>
        </form>
      </div>
    )
  }
}

export default App
