import React from 'react';

const FormInput = ({ label, type, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
);

export default FormInput;
