// // inprogress ....

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// const CheckboxGroup = ({ field, value, label, placeholder, error, onChange, onBlur }) => {
//     console.log(!!value);
//     return (
//         <div className={classnames('form-group', { 'has-error': error })}>
//             <input
//                 onChange={onChange}
//                 checked={!!value}
//                 type='checkbox'
//                 name={field}
//                 className="form-control"
//             />
//             {error && <span className="help-block">{error}</span>}
//         </div>);
// }

// CheckboxGroup.propTypes = {
//     field: PropTypes.string.isRequired,
//     value: PropTypes.bool.isRequired,
//     label: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     error: PropTypes.string,
//     onChange: PropTypes.func.isRequired,
//     onBlur: PropTypes.func
// }

// export default CheckboxGroup;

class CheckboxGroup extends React.Component {

    static propTypes = {
        checked: PropTypes.bool.isRequired,
        field: PropTypes.string.isRequired,
        error: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };
    static defaultProps = {
        checked: false
    };
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    };

    _handleChange = () => {
        const { field } = this.props
        this.props.onChange(field, !this.state.checked)
        this.setState({ checked: !this.state.checked })
    };

    render() {
        const { field, label, error } = this.props;
        const { checked } = this.state;
        return (
            <div className={classnames('form-check', { 'has-danger': error })}>
                <label className="form-check-label">
                    <input
                        onChange={this._handleChange}
                        checked={checked}
                        type='checkbox'
                        name={field}
                        className="form-check-input"
                    />
                    <span className="custom-control-description">{label}</span>
                </label>
                <br />
                {error && <span className="help-block">{error}</span>}
            </div>
        );
    }
}

export default CheckboxGroup;