import React from "react";
import "./Header.css";
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header className="header">
      <h1>
        <img src="../logo.png" alt="Market Whale" width="35px" /> Market
        <span>Whale</span>
      </h1>
      <h3 className="tagline">{props.tagline}</h3>
    </header>
  );
};
Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
export default Header;
