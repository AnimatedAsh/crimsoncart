import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProfileItems = props => {
  const { faIcon, data } = props;
  return (
    <div className="col mb-4 card-deck">
      <div className="card h-100">
        <div
          className="card-body profile-item-body"
          onClick={() => props.onClick(data.id)}
        >
          <div className="row position-relative">
            <div className="col-3">
              <FontAwesomeIcon
                className={faIcon.classes}
                key={faIcon.name}
                icon={faIcon.styles}
                size={faIcon.size}
              />
            </div>
            <div className="col ">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItems;
