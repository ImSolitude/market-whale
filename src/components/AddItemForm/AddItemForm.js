import React from "react";
import PropTypes from 'prop-types';
import "./AddItemForm.css";
import { isNumber } from "util";

class AddItemForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func
  }
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createItem = e => {
    e.preventDefault();
    const item = {
      name: this.nameRef.current.value,
      price: isNumber(this.priceRef.current.value)
        ? parseFloat(this.priceRef.current.value)
        : 0,
      status: this.statusRef.current.value === "true",
      description: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addItem(item);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="item-add" onSubmit={this.createItem}>
        <input
          name="name"
          type="text"
          placeholder="Item Name"
          ref={this.nameRef}
          required
        />
        <input
          name="price"
          type="text"
          placeholder="Item Price"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="true">Fresh</option>
          <option value="false">Sold Out!</option>
        </select>
        <textarea
          name="description"
          placeholder="Item Description"
          ref={this.descRef}
        />
        <input
          name="image"
          type="text"
          placeholder="Item Image"
          ref={this.imageRef}
        />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;
