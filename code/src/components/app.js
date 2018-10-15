import React from "react"
import { exVatToIncVat, incVatToExVat } from "../calculations"

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
  this.setState({
    vatRate: parseInt(e.target.value)
  })

}
handleInputChange = (e) => {
  if (e.target.id === "incVat") {
    this.setState({
      incVat: parseInt(e.target.value),
      exVat: incVatToExVat(this.state.vatRate, e.target.value),
      amountVat: parseInt(e.target.value) - incVatToExVat(this.state.vatRate, e.target.value)
    })
  } else if (e.target.id === "exVat") {
    this.setState({
      incVat: exVatToIncVat(this.state.vatRate, e.target.value),
      exVat: parseInt(e.target.value),
      amountVat: parseInt(e.target.value) - incVatToExVat(this.state.vatRate, e.target.value)
    })
  }
}


render() {
  return (
    <div className="App">
      <form>
        <div className="formsection__radio">
          <input
            type="radio"
            id="option25"
            name="vatRate"
            value="25"
            onChange={this.handleRadioChange}
            checked={this.state.vatRate === 25}
          />
          <label htmlFor="option25">25%</label><br />
          <input
            type="radio"
            id="option12"
            name="vatRate"
            value="12"
            onChange={this.handleRadioChange}
            checked={this.state.vatRate === 12}
          />
          <label htmlFor="option12">12%</label><br />
          <input
            type="radio"
            id="option6"
            name="vatRate"
            value="6"
            onChange={this.handleRadioChange}
            checked={this.state.vatRate === 6}
          />
          <label htmlFor="option6">6%</label><br />
        </div>

        <br />
        <div className="formsection__textfields">
          <label htmlFor="incVat">Including Vat:</label><br />
          <input type="text" id="incVat" name="incVat" onChange={this.handleInputChange} value={this.state.incVat}/><br />
          <label htmlFor="exVat">Excluding Vat:</label><br />
          <input type="text" id="exVat" name="exVat" onChange={this.handleInputChange} value={this.state.exVat}/><br />
          <label htmlFor="amountVat">Amount Vat:</label><br />
          <input type="text" id="amountVat" name="amountVat" onChange={this.handleInputChange} value={this.state.amountVat}/><br />
        </div>
      </form>
      <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExVat(25, 1000)}</p>
      <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>
    </div>
  )
}

}

export default App
