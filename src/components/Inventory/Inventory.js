import React from "react";
import PropTypes from "prop-types";
// import firebase from "firebase/app";
// import "firebase/auth";
// import Login from "../Login/Login";
import AddItemForm from "../AddItemForm/AddItemForm";
import EditItemForm from "../EditItemForm/EditItemForm";
// import base, { firebaseApp } from "../../base";
import "./Inventory.css";

class Inventory extends React.Component {
  static propTypes = {
    items: PropTypes.object,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    addItem: PropTypes.func,
    loadItemsSamples: PropTypes.func
  };
  // state = {
  //   uid: null,
  //   owner: null
  // };

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHandler({ user });
  //     }
  //   });
  // }

  // authHandler = async authData => {
  //   // Load current store in the firebase database
  //   const store = await base.fetch(this.props.storeId, { context: this });
  //   // Claim if there's no owner
  //   if (!store.owner) {
  //     // Save it as my own
  //     base.post(`${this.props.storeId}/owner`, {
  //       data: authData.user.uid
  //     });
  //   }
  //   // Set the state
  //   this.setState({
  //     uid: authData.user.uid,
  //     owner: store.owner || authData.user.uid
  //   });
  // };
  // authenticate = provider => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseApp
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };

  // logout = async () => {
  //   await firebase.auth().signOut();
  //   this.setState({ uid: null });
  // };
  // render() {
  /*
    const logout = (
      <button onClick={this.logout} className="logout">
        Log Out!
      </button>
    );
    // Check if they're logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // Check if they're not the owner of the store.
    if (this.state.uid !== this.state.owner) {
      return (
        <div className="login-page">
          <h2>Sorry, you're not the owner</h2>
          {logout}
        </div>
      );
    }
    // Then finally, they're the owner, render the inventory;
    */
  render() {
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        {/* {logout} */}
        {Object.keys(this.props.items).map(key => (
          <EditItemForm
            key={key}
            index={key}
            item={this.props.items[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}
        <AddItemForm addItem={this.props.addItem} />
        <button className="load-button" onClick={this.props.loadItemsSamples}>
          Load Sample Items
        </button>
      </div>
    );
  }
}
export default Inventory;
