import React from "react"

class Radiobuttons extends React.Component {

  render() {
    return (
      <div className="formsection__radio">
        <label className="radio-button-container" htmlFor="option25"> 25%
          <input
            type="radio"
            id="option25"
            name="vatRate"
            value="25"
            onChange={this.props.changeHandler}
            checked={this.props.vatRate === 25} />
          <span className="custom-radio-button" />
        </label>
        <br />
        <label className="radio-button-container" htmlFor="option12"> 12%
          <input
            type="radio"
            id="option12"
            name="vatRate"
            value="12"
            onChange={this.props.changeHandler}
            checked={this.props.vatRate === 12} />
          <span className="custom-radio-button" />
        </label>
        <br />
        <label className="radio-button-container" htmlFor="option6"> 6%
          <input
            type="radio"
            id="option6"
            name="vatRate"
            value="6"
            onChange={this.props.changeHandler}
            checked={this.props.vatRate === 6} />
          <span className="custom-radio-button" />
        </label>
        <br />
      </div>
    )
  }
}

export default Radiobuttons
