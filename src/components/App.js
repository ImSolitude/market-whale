import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Inventory from "./Inventory/Inventory";
import sampleItems from "../ItemsSamples";
import Item from "./Item/Item";
import base from "../base";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.marketWhale = React.createRef();
  }
  static propTypes = {
    match: PropTypes.object
  };
  state = {
    items: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    this.ref = base.syncState(`${params.storeId}/items`, {
      context: this,
      state: "items"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  componentWillUpdate() {
    const key = this.props.match.params.storeId;
    localStorage.setItem(key, JSON.stringify(this.state.order));
  }

  addItem = item => {
    const items = { ...this.state.items }; // Take copy of state;
    items[`item${Date.now()}`] = item; // Change it.
    this.setState({
      // Update the origin state;
      items
    });
  };

  updateItem = (item, updatedItem) => {
    const items = { ...this.state.items }; // Take a copy of state
    items[item] = updatedItem; // Change it
    this.setState({
      // Update it
      items
    });
  };
  "";

  deleteItem = item => {
    const items = { ...this.state.items }; // Take a copy of state
    items[item] = null;
    this.setState({
      items
    });
  };

  addToOrder = item => {
    const order = { ...this.state.order }; // Take copy of state;
    order[item] = order[item] + 1 || 1; // Change it
    this.setState({
      // Update the origin state
      order
    });
  };

  deletefromOrder = item => {
    const order = { ...this.state.order };
    delete order[item];
    this.setState({
      order
    });
  };

  loadItemsSamples = () => {
    this.setState({
      items: sampleItems
    });
  };

  foldElements = event => {
    event.target.classList.toggle("folded");
    this.marketWhale.current.classList.toggle("folded");
  };

  render() {
    return (
      <>
        <button className="fold" onClick={this.foldElements}>
          Fold
        </button>
        <button className="built-by">
          <a
            href="https://imsolitude.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built By @codebymj
          </a>
        </button>

        <div className="market-whale" ref={this.marketWhale}>
          <div className="menu">
            <Header tagline="Literally a market whale!" />
            <ul className="list-of-items">
              {Object.keys(this.state.items).map(key => (
                <Item
                  key={key}
                  data={this.state.items[key]}
                  addToOrder={this.addToOrder}
                  index={key}
                />
              ))}
            </ul>
          </div>

          <Order
            items={this.state.items}
            order={this.state.order}
            deletefromOrder={this.deletefromOrder}
          />
          <Inventory
            addItem={this.addItem}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
            loadItemsSamples={this.loadItemsSamples}
            items={this.state.items}
            storeId={this.props.match.params.storeId}
          />
        </div>
      </>
    );
  }
}

export default App;
