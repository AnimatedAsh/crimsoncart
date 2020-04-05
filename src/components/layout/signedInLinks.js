import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/auth/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignedInLinks = props => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link key="cart" className="cart" to="/cart">
          <span className="fa-layers cart-icon fa-fw">
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
          <span className="badge badge-warning cart-item-count-badge">1</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link rounded-circle border-info avatar ml-4"
          to={{ pathname: "/profile", state: { opened: "profileItems" } }}
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
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
