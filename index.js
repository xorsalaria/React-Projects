// Sajjad Salaria (17-02-2018)


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var calculatePayment = function(principal, years, rate) {
  var monthlyRate = rate / 100 /12;
  var monthlyPayment = principal * monthlyRate /(1- (Math.pow(1/(1 + monthlyRate), years * 12 )));
  var balance = principal;
  for(var y=0; y<years; y++) {
    var interestY = 0;
    var principalY = 0;
    for (var m=0; m<12; m++) {
      var interestM = balance * monthlyRate;
      var princialM = monthlyPayment - interestM;
      interestY = interestY + interestM;
      principalY = balance - princialM;
      balance = balance - princialM;
    }

    }
    return {monthlyPayment: monthlyPayment};
  };

var Header = React.createClass({   // createReactClass()  React.createClass
  render: function () {
    return (
      <header>
            <h1>{this.props.title}</h1>
      </header>
    );
  }
});

var MortgageCalculator = React.createClass({
  getInitialState: function() {
    return {
      principal: this.props.principal,
      years: this.props.years,
      rate: this.props.rate
    };
  },
  principalChange: function(event) {
    this.setState({principal: event.target.value});
  },
  yearsChange: function(event) {
    this.setState({years: event.target.value});
  },
  rateChange: function(event) {
    this.setState({rate: event.target.value});
  },

  render: function () {
      var payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
      var monthlyPayment = payment.monthlyPayment;

    return (
      <div className="content">
        <div className="form">
            <label>Principal:</label>
            <input type="text" value={this.state.principal} onChange={this.principalChange}/>
        </div>
        <div>
            <label>Years:</label>
            <input type="text" value={this.state.years} onChange={this.yearsChange}/>
        </div>
        <div>
              <label htmlFor="rate">Rate:</label>
              <input type="text" value={this.state.rate} onChange={this.rateChange}/>
        </div>
        <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span> </h2>
        </div>
      );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
          <Header title="React Mortgage Calculator"/>
          <MortgageCalculator principal="200000" years="30" rate="5"/>
      </div>
    );
  }
})


ReactDOM.render(<App />, document.getElementById('root'));
