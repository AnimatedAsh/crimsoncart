import React from "react";
import Joi from "joi-browser";
import Form from "../../common/formElements/form";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addAddress, updateAddress } from "../../store/addresses/actions";

class AddressForm extends Form {
  state = {
    data: {
      fullName: "",
      streetAddress: "",
      landMark: "",
      city: "",
      state: "",
      pin: "",
      phoneNumber: "",
      defaultAddress: false,
    },
    headerLabel: "",
    isAdd: false,
    cities: [],
    states: [],
    errors: {},
  };

  componentDidMount() {
    const states = this.props.states;
    const cities = this.props.cities;

    this.setState({ cities, states });
    const addressId = this.props.match.params.id;
    // const data = { ...this.state.data };
    if (addressId === "new")
      return this.setState({ isAdd: true, headerLabel: "Add Address" });

    const address = this.props.address;
    if (!address) return this.props.history.replace("/not-found");

    this.setState({
      data: this.mapToViewModel(address, addressId),
      headerLabel: "Edit Address",
    });
  }

  mapToViewModel(address) {
    return {
      fullName: address.fullName,
      streetAddress: address.streetAddress,
      landMark: address.landMark,
      city: address.city,
      state: address.state,
      pin: address.pin,
      phoneNumber: address.phoneNumber,
      defaultAddress: address.defaultAddress,
    };
  }
  schema = {
    id: Joi.string().allow(""),
    fullName: Joi.string().required().label("Full Name"),
    streetAddress: Joi.string().required().label("StreetAddress"),
    landMark: Joi.string().allow("").label("Landmark"),
    city: Joi.string().required().label("City"),
    state: Joi.string().required().label("State"),
    pin: Joi.string()
      .trim()
      .regex(/^\d{6}$/)
      .required()
      .label("Pin")
      .error(() => {
        return {
          message: "Please enter a valid Pin Code",
        };
      }),
    phoneNumber: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
      .label("Phone Number")
      .error(() => {
        return {
          message: "Please enter a valid Phone Number",
        };
      }),
    defaultAddress: Joi.boolean().label("Default Address CheckBox"),
  };

  doSubmit = () => {
    if (this.state.isAdd) this.props.addAddress(this.state.data);
    else this.props.updateAddress(this.state.data, this.state.isAdd);
    this.props.history.push({
      pathname: "/profile/addresses",
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10 form p-2">
            <h1 className="display-4 py-2"> {this.state.headerLabel}</h1>
            <div className="px-2">
              <form className="form" onSubmit={this.handleSubmit}>
                {this.renderInput("fullName", "Full Name", "text")}
                {this.renderInput(
                  "streetAddress",
                  "Street Address",
                  "textarea"
                )}
                {this.renderInput("landMark", "Landmark", "text", "(Optional)")}
                {this.renderSelect("city", "City", this.state.cities)}
                {this.renderSelect("state", "State", this.state.states)}
                {this.renderInput("pin", "Pin code", "text")}
                {this.renderInput("phoneNumber", "Phone Number", "text")}
                {this.renderCheckBox("defaultAddress", "Save Default Address")}
                {this.renderButton("Save Address")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const addresses = state.firestore.data.addresses;

  const address = addresses ? addresses[id] : null;

  return {
    cities: state.location.cities,
    states: state.location.states,
    auth: state.firebase.auth,
    address,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addAddress: (address) => dispatch(addAddress(address)),
    updateAddress: (address) =>
      dispatch(updateAddress(address, ownProps.match.params.id)),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AddressForm);
