import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/auth/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SignedInLinks = (props) => {
  function renderTooltip(key, data) {
    return <Tooltip id={`tooltip-${key}`}>{data}</Tooltip>;
  }
  return (
    <ul className="navbar-nav ml-auto">
      <OverlayTrigger
        key="cart"
        placement="bottom"
        delay={{ show: 250 }}
        overlay={renderTooltip("cart", "Manage Cart and Checkout.")}
      >
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
      </OverlayTrigger>
      <OverlayTrigger
        key="profile"
        placement="bottom"
        delay={{ show: 250, hide: 500 }}
        overlay={renderTooltip(
          "profile",
          "Manage Profile, Addresses and Orders."
        )}
      >
        <li className="nav-item">
          <Link
            className="nav-link rounded-circle border-info avatar ml-4"
            to="/profile"
          >
            {props.profile.initials}
          </Link>
        </li>
      </OverlayTrigger>
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
