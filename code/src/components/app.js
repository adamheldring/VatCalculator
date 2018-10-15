import React from "react";
import { exVatToIncVat, incVatToExVat } from "../calculations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
      amountVat: 0
    };
  }

  handleRadioChange = e => {
    const newVatRate = parseInt(e.target.value);
    this.setState({
      vatRate: newVatRate,
      incVat: Math.round(exVatToIncVat(newVatRate, this.state.exVat)),
      amountVat: Math.round(
        exVatToIncVat(newVatRate, this.state.exVat) - this.state.exVat
      )
    });
  };
  handleInputChange = e => {
    const newUserInputValue = parseInt(e.target.value, 10);
    if (e.target.id === "incVat") {
      this.setState({
        incVat: newUserInputValue,
        exVat: Math.round(incVatToExVat(this.state.vatRate, e.target.value)),
        amountVat: Math.round(
          newUserInputValue - incVatToExVat(this.state.vatRate, e.target.value)
        )
      });
    } else if (e.target.id === "exVat") {
      this.setState({
        incVat: Math.round(exVatToIncVat(this.state.vatRate, e.target.value)),
        exVat: newUserInputValue,
        amountVat: Math.round(
          exVatToIncVat(this.state.vatRate, e.target.value) - newUserInputValue
        )
      });
    }
  };

  render() {
    return (
      <div className="outer-wrapper">
        <img className="image" src="./assets/calc.png" />
        <form className="form">
          <h1 className="h1-logo">VAT LOCO</h1>
          <h1 className="h1-shadow">VAT LOCO</h1>
          <div className="formsection__radio">
            <label className="radio-button-container" htmlFor="option25"> 25%
              <input
                type="radio"
                id="option25"
                name="vatRate"
                value="25"
                onChange={this.handleRadioChange}
                checked={this.state.vatRate === 25}
              />
              <span className="custom-radio-button" />
            </label>
            <br />
            <label className="radio-button-container" htmlFor="option12"> 12%
              <input
                type="radio"
                id="option12"
                name="vatRate"
                value="12"
                onChange={this.handleRadioChange}
                checked={this.state.vatRate === 12}
              />
              <span className="custom-radio-button" />
            </label>
            <br />
            <label className="radio-button-container" htmlFor="option6"> 6%
              <input
                type="radio"
                id="option6"
                name="vatRate"
                value="6"
                onChange={this.handleRadioChange}
                checked={this.state.vatRate === 6}
              />
              <span className="custom-radio-button" />
            </label>
            <br />
          </div>

          <br />
          <div className="formsection__textfields">
            <label htmlFor="incVat">Including Vat:</label>
            <br />
            <input
              type="text"
              id="incVat"
              name="incVat"
              onChange={this.handleInputChange}
              value={this.state.incVat}
            />
            <br />
            <label htmlFor="exVat">Excluding Vat:</label>
            <br />
            <input
              type="text"
              id="exVat"
              name="exVat"
              onChange={this.handleInputChange}
              value={this.state.exVat}
            />
            <br />
            <label htmlFor="amountVat">Amount Vat:</label>
            <br />
            <input
              type="text"
              id="amountVat"
              name="amountVat"
              onChange={this.handleInputChange}
              value={this.state.amountVat}
            />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
