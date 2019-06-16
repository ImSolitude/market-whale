import React from 'react';
import PropTypes from "prop-types";
import './StorePicker.css'
import { getFunStore } from '../../helpers';

class StorePicker extends React.Component {
  constructor(){
    super();
    this.myInput = React.createRef();
  }
  static propTypes = {
    history: PropTypes.object
  }
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="store-name" defaultValue={getFunStore()} />

        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;