import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';

import { switchLanguage } from '../../../actions'
import requireAuth from '../../../utils/requireAuth'

import { Home, Signup, Login } from '../../'

class EmptyLayout extends Component {
    render() {
        const { intl, switchLanguage } = this.props

        const languageNodes = intl.enabledLanguages.map(
            lang => <li key={lang} onClick={() => switchLanguage(lang)} className={lang === intl.locale ? 'active' : ''}>{lang}</li>
        );

        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={requireAuth(Home)} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
                <div>
                    <ul>
                        <li><FormattedMessage id="switchLanguage" /></li>
                        {languageNodes}
                    </ul>
                </div>
            </div>
        );
    }
}

EmptyLayout.propTypes = {
    switchLanguage: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
    intl: state.intl
});

export default connect(mapStateToProps, { switchLanguage })(EmptyLayout);
// export default EmptyLayout;