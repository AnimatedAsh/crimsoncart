import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/auth/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignedInLinks = (props) => {
  useEffect(() => {
    let popover_element = document.querySelectorAll('[data-toggle="popover"]');
    //popover_element.popover();
  });
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link key="cart" className="cart" to="/cart">
          <span
            className="fa-layers cart-icon fa-fw"
            data-toggle="popover"
            data-placement="bottom"
            data-content={`Subtotal ${props.cartTotal.totalPrice}`}
          >
            <FontAwesomeIcon
              className="circle cart-circle"
              icon="circle"
              size="3x"
            />

            <FontAwesomeIcon
              className="shopping-cart"
              icon="shopping-cart"
              transform="shrink-6 right-2 "
              size="2x"
              color="#343a40"
            />
          </span>
          <span className="badge badge-warning cart-item-count-badge">
            {props.cartTotal.productQuantity}
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link rounded-circle border-info avatar ml-4"
          to="/profile"
        >
          {props.profile.initials}
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={props.signOut}>
          Log Out
        </a>
      </li>
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    cartTotal: state.total.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
