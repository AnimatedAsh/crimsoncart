import React from "react";

const CheckBox = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-check row">
      <input
        {...rest}
        name={name}
        id={name}
        value={value}
        type="checkbox"
        className={error ? "form-check-input is-invalid" : "form-check-input"}
        checked={value ? "checked" : ""}
      />
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
      {error && <span className="form-input-error">{error}</span>}
    </div>
  );
};

export default CheckBox;
