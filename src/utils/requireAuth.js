import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentWillMount = () => {
            if (!this.props.isAuthenticated) {

                this.context.router.history.push('/signup');
            }
        };

        componentWillUpdate = (nextProps) => {
            if (!nextProps.isAuthenticated) {
                this.context.router.history.push('/');
            }
        }

        render = () => {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth
        };
    }

    return connect(mapStateToProps, {})(Authenticate);
}