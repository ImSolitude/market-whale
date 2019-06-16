import React from 'react';
import PropTypes from 'prop-types';
import './Item.css'
import { formatCurrency } from '../../helpers';


class Item extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.bool,
      //price: PropTypes.number
    }),
    addToOrder: PropTypes.func,
  };

  myImage = React.createRef();
  defaultImage = '/images/default.png';
  loadImage = () => {
    this.myImage.current.setAttribute('src', this.defaultImage);
  }

  handleAddToOrder = () => {
    this.props.addToOrder(this.props.index);
  }

  render(){
    const {image, name, price, description, status} = this.props.data;
    
    return(
      <li className={'single-item ' + (status ? '' : 'disabled') }>

        <img src={(image || this.defaultImage)} alt={name} onError={this.loadImage} ref={this.myImage}/>
        <h3>{name} <span className="price">{formatCurrency(parseInt(price))}</span></h3>
        <p className="desc">{description}</p>
        <button className="add-to-cart" disabled={!status} onClick={this.handleAddToOrder}>
          {status ? 'Add to Card' : 'SOLD OUT!'}
        </button>
      </li>
    );
  }
}
// Item.propTypes = {

// }
export default Item;