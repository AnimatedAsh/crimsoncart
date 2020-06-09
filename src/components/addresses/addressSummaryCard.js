import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export const AddressSummaryCard = (props) => {
  const {
    fullName,
    streetAddress,
    landMark,
    pin,
    phoneNumber,
    defaultAddress,
  } = props.address;

  const { address, cities, states } = props;
  const cityName = cities.find((c) => c.id === address.city).name;

  const stateName = states.find((s) => s.id === address.state).name;
  return (
    <div className="col mb-4 card-deck">
      <div className="card h-100">
        <div className="card-body">
          <address>
            <h5 className="card-title">
              <strong>{fullName}</strong>
              {defaultAddress && (
                <span className="badge badge-dark float-right">Default</span>
              )}
            </h5>
            {streetAddress}
            <br></br>
            {landMark ? `${landMark}, ` : ""}
            {cityName}, {stateName}-{pin}
            <br></br>
            <abbr title="Phone">P :</abbr>
            &nbsp;{phoneNumber}
          </address>
          <Link
            key={`editAddress`}
            className="editAddressForm"
            to={`/profile/addresses/${address.id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    states: state.location.states,
    cities: state.location.cities,
  };
};
export default connect(mapStateToProps)(AddressSummaryCard);
