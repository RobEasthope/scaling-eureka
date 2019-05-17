import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  id,
  label,
  fieldData,
  onChange,
  errMsg,
  formValidated,
}) => (
  <label htmlFor={id}>
    {label}
    <input
      type="text"
      id={id}
      name={id}
      value={fieldData.value}
      onChange={onChange}
    />
    {formValidated && !fieldData.valid && <span>{errMsg}</span>}
  </label>
);

FormField.defaultProps = {
  id: '',
  label: '',
  fieldData: { value: '', valid: '' },
  errMsg: '',
  formValidated: false,
};

FormField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  fieldData: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  errMsg: PropTypes.string,
  formValidated: PropTypes.bool,
};

export default FormField;
