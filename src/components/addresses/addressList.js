import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressSummaryCard from "./addressSummaryCard";

const AddressList = (props) => {
  const { addresses } = props;
  return (
    <div className="address-list section">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4 card-deck">
          <div className="card h-100 add-addresscard">
            <Link
              key={`newAddress`}
              className="newAddress-card"
              to="/profile/addresses/new"
            >
              <FontAwesomeIcon className="plus" icon="plus" size="3x" />
            </Link>
          </div>
        </div>

        {addresses &&
          addresses.map((address) => {
            return <AddressSummaryCard address={address} key={address.id} />;
          })}
      </div>
    </div>
  );
};

export default AddressList;
