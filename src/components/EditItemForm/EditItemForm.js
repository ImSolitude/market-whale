import React from "react";
import PropTypes from 'prop-types';
import "./EditItemForm.css";

class EditItemForm extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.bool,
      // price: PropTypes.number
    }),
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    index: PropTypes.string
  };
  mySelect = React.createRef();
  handleChange = e => {
    const updatedItem = {
      ...this.props.item,
      [e.currentTarget.name]: e.currentTarget.value,
      status: this.mySelect.current.value === "true"
    };
    this.props.updateItem(this.props.index, updatedItem);
  };
  handleDelete = () => {
    this.props.deleteItem(this.props.index);
  };
  render() {
    return (
      <form className="item-create" onSubmit={this.createItem}>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.item.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.item.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.item.status}
          ref={this.mySelect}
        >
          <option value="true">Fresh</option>
          <option value="false">Sold Out!</option>
        </select>
        <textarea
          name="description"
          onChange={this.handleChange}
          value={this.props.item.description}
        />
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.item.image}
        />
        <button
          type="submit"
          onClick={() => this.props.deleteItem(this.props.index)}
        >
          - Remove Item
        </button>
      </form>
    );
  }
}

export default EditItemForm;
