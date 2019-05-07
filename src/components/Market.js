import React, { Component } from "react";
import BarcodeReader from "react-barcode-reader";

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result",
      action: "Welcome to mordor market",
      status: "Waiting for RFID",
      counter: 0
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data
    });
    //check if 1st scan is a known RFID
    if (data === "94ae8ea4") {
      this.setState({
        counter: this.state.counter + 1,
        action: "Access granted",
        status: "RFID found"
      });
    }
    //check if 2nd scan is a product ELSE -> reset
    //  -product.price
    //
    // loop until scan is the same as the first scan
    if (this.state.counter === 2) {
      this.setState({
        action: "Product added to cart",
        status: "Product found"
      });
    }
    // 2 minutes to purchase
    //
    // when scan is the same as the first scan it confirms the purchase
    if (this.state.counter === 3) {
      this.setState({
        action: "Thank you for your purchase",
        status: "Waiting for RFID",
        counter: 0
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <p>{this.state.result}</p>
        <h1>{this.state.action}</h1>
        <h4>{this.state.status}</h4>
      </div>
    );
  }
}

export default Market;
