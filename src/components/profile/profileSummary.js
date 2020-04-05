import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileItems from "./profileItems";
import AddressList from "../addresses/addressList";
import AddressForm from "../addresses/addressForm";
class ProfileSummary extends Component {
  state = {
    items: [],
    opened: ""
  };
  componentDidMount() {
    const { items } = this.props;
    const { opened } = this.props.location.state;
    this.setState({ items, opened });
  }

  handleItemClick = id => {
    const opened = id;
    this.setState({
      opened
    });
  };

  renderProfileItems(items) {
    return (
      <div className="row row-cols-1 row-cols-md-2">
        {items.map((item, i) => (
          <Link
            key={`itmL${i}`}
            className="profile-card"
            to={{
              pathname: `/profile/${item.data.id}`,
              state: { opened: item.data.id }
            }}
          >
            <ProfileItems
              key={`itm${i}`}
              faIcon={item.faIcon}
              data={item.data}
              onClick={this.handleItemClick}
            />
          </Link>
        ))}
      </div>
    );
  }

  renderAddresses() {
    return (
      <div className="container">
        <AddressList />
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
  renderComponent(open) {
    switch (open) {
      case "addresses":
        return this.renderAddresses();
      case "newAddress":
        return this.renderAddressForm();
      case "profileItems":
        return this.renderProfileItems(this.state.items);

      default:
        return this.renderProfileItems(this.state.items);
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            {this.renderComponent(this.props.location.state.opened)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.profileItems.items
  };
};

export default connect(mapStateToProps)(ProfileSummary);
