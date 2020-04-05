import React from "react";

const Input = ({ name, label, mutedText, error, ...rest }) => {
  return (
    <div className="form-group row">
      <label htmlFor={name}>{label}</label>
      <small className="text-muted">{mutedText}</small>
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
      />
      {error && <span className="form-input-error">{error}</span>}
    </div>
  );
};

export default Input;
