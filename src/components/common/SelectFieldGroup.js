import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import map from 'lodash/map'

const SelectFieldGroup = ({ field, value, label, data, placeholder, error, onChange }) => {
    const options = map(data, (val, key) =>
        <option key={val} value={val}>{key}</option>)

    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <select
                onChange={onChange}
                value={value}
                name={field}
                className="form-control"
            >
                <option value="" disabled>Choose Your {placeholder || label}</option>
                {options}
            </select >
            {error && <span className="help-block">{error}</span>}
        </div>);
}

SelectFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default SelectFieldGroup;