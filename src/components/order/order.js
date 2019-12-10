import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import cartStore from "~/store/cart";
import orderStore from "~/store/order";
import { Link } from "react-router-dom";
import { routesMap } from "~/router/";

@observer
class Order extends React.Component {
  state = {
    showModal: false
  };

  show = () => this.setState({ showModal: true });
  hide = () => this.setState({ showModal: false });

  formCalc() {
    let inputs = document.querySelectorAll("form input");
    let mass = [];

    inputs.forEach(item => {
      return mass.push(item.value);
    });

    return mass;
  }

  render() {
    let formData = orderStore.formData.map((val, ind) => {
      return (
        <input
          key={val.name}
          name={val.name}
          placeholder={val.label}
          type="text"
          valid={val.valid}
          onChange={e => orderStore.formChange(ind, e.target.value)}
        />
      );
    });

    return (
      <>
        <div>
          <h2>TODO HW</h2>
          <div>
            <h2>Order</h2>
            <hr />
            <form>{formData}</form>
            <hr />
            <strong>Total: {cartStore.total}</strong>
            <hr />
          </div>
          <Link className="btn btn-warning" to={routesMap.cart}>
            Back to cart
          </Link>
          <button type="button" className="btn btn-success" onClick={this.show}>
            YES!
          </button>
        </div>
        <>
          <Modal show={this.state.showModal} onHide={this.hide}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hide}>
                Close
              </Button>
              <Link className="btn btn-success" to={routesMap.result}>
                Save Changes
              </Link>
            </Modal.Footer>
          </Modal>
        </>
      </>
    );
  }
}

export default Order;
