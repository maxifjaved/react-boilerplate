// // inprogress ....

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import map from 'lodash/map'
import { toggle } from '../../utils'

class CheckboxGroup extends React.Component {

    static propTypes = {
        checked: PropTypes.array.isRequired,
        field: PropTypes.string.isRequired,
        error: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };
    static defaultProps = {
        checked: []
    };
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    };

    _handleChange = (e) => {
        const { field } = this.props
        const { value } = e.target;

        console.log(this.state.checked)
        let checked = this.state.checked
        toggle(checked, value)

        this.props.onChange(field, checked)
        this.setState({ checked: checked })
    };

    render() {
        const { field, label, data, error } = this.props;
        const { checked } = this.state;


        let options = map(data, (val, key) => <label key={key} className="form-check-label">
            <input
                onChange={this._handleChange}
                checked={checked.indexOf(key) > -1}
                type='checkbox'
                value={key}
                name={field}
                className="form-check-input"
            />
            <span className="custom-control-description">{val}</span>
        </label>)

        return (
            <div className={classnames('form-check', { 'has-danger': error })}>
                {options}
                <br />
                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

export default CheckboxGroup;