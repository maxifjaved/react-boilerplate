import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextFieldGroup = ({ field, value, label, placeholder, error, type, onChange, onBlur }) => {
    console.log(value);
    return (
        <div className={classnames('form-group', { 'has-danger': error })}>
            <input
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder || label}
                value={value}
                type={type}
                name={field}
                className="form-control"
            />

            {error && <div className="form-control-feedback">{error}</div>}
        </div>);
}

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;