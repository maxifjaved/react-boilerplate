import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextAreaGroup = ({ field, value, label, rows, placeholder, error, onChange, onBlur }) => {
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <textarea
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder || label}
                value={value}
                name={field}
                rows={rows}
                className="form-control"
            />
            {error && <span className="help-block">{error}</span>}
        </div>);
}

TextAreaGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
}


TextFieldGroup.defaultProps = {
    rows: 5
}

export default TextAreaGroup;