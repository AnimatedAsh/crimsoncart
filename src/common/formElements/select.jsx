import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group row">
      <label htmlFor={name}>{label}</label>
      <select {...rest} name={name} id={name} className="form-control">
        <option value="" />
        {options.map(value => (
          <option key={value.id} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
      {error && <span className="form-input-error">{error}</span>}
    </div>
  );
};

export default Select;
