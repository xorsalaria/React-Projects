// Sajjad Salaria @xorsalaria

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TickTock extends React.Component{

    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval (
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
     tick() {
       this.setState({
         date:new Date()
       });
     }
render() {
      return (
        <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
}
}

ReactDOM.render(<TickTock />, document.getElementById('root'));

