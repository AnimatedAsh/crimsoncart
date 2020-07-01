import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ProfileItems from "./profileItems";
import AddressList from "../addresses/addressList";
import AddressForm from "../addresses/addressForm";
class ProfileSummary extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    const { items } = this.props;
    this.setState({ items });
  }

  renderProfileItems(items) {
    return (
      <div className="row row-cols-1 row-cols-md-2">
        {items.map((item, i) => (
          <Link
            key={`itmL${i}`}
            className="profile-card"
            to={`/profile/${item.data.id}`}
          >
            <ProfileItems
              key={`itm${i}`}
              faIcon={item.faIcon}
              data={item.data}
            />
          </Link>
        ))}
      </div>
    );
  }

  renderAddresses(addresses) {
    return (
      <div className="container">
        <AddressList addresses={addresses} />
      </div>
    );
  }

  renderAddressForm() {
    return (
      <div className="container">
        <AddressForm />
      </div>
    );
  }
  renderComponent(param) {
    const open = param.navitem && param.id ? param.id : param.navitem;
    if (open && open === "addresses")
      return this.renderAddresses(this.props.addresses);
    else if (open && open === "new") return this.renderAddressForm();
    else if (open && open !== "new") return this.renderAddressForm(open);

    return this.renderProfileItems(this.state.items);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            {this.renderComponent(this.props.match.params)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.profileItems.items,
    auth: state.firebase.auth,
    addresses: state.firestore.ordered.addresses,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "addresses",
        where: [["userId", "==", props.auth.uid]],
        orderBy: ["createdAt", "desc"],
      },
    ];
  })
)(ProfileSummary);
