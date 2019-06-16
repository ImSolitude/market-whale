import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Order.css";
import { formatCurrency } from "../../helpers";

class Order extends React.Component {
  static propTypes = {
    items: PropTypes.object,
    order: PropTypes.object,
    deletefromOrder: PropTypes.func,
  };
  renderOrder = key => {
    const item = this.props.items[key];
    const count = this.props.order[key];
    const orderTransitionConfig = {
      classNames: "order",
      key: key,
      timeout: { enter: 150, exit: 150 }
    };
    const countConfig = {
      classNames: "count",
      key: count,
      timeout: { enter: 300, exit: 300 }
    };

    if (!item) {
      // Make sure the item is loaded first;
      return null;
    }
    if (!item.status) {
      // If item not available
      return (
        <CSSTransition {...orderTransitionConfig}>
          <li key={key}>
            Sorry {item ? item.name : "Item"} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...orderTransitionConfig}>
        <li key={key}>
          <span className="order-count">
            <TransitionGroup component="span" className="count">
              <CSSTransition {...countConfig}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs
          </span>
          <span className="order-name">{item.name}</span>
          <span className="order-price">
            {formatCurrency(count * item.price)}
          </span>
          <button
            className="order-delete"
            onClick={() => this.props.deletefromOrder(key)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.order[key];
      const isAvailable = item && item.status;
      if (isAvailable) {
        return prevTotal + count * item.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order">
        <h1>Order</h1>

        <TransitionGroup component="ul" className="order-list">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        <div className="total">
          Total: <span>{formatCurrency(total)}</span>
        </div>
      </div>
    );
  }
}
export default Order;
