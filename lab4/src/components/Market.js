import React from "react";
import MarketItem from '../components/MarketItem';
import "./Market.css"

class Market extends React.Component {
    constructor() {
        super();
        this.state = {count: 0}
    }

    render() {
      return <div className="item">
          <MarketItem count={this.state.count} />
          <button onClick={() => this.setState({ count: this.state.count + 1})}
          className="button">Add Item</button>
      </div>;
    }
  }

  export default Market;