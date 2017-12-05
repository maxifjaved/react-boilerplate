import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { EmptyLayout, MainLayout } from '../containers';

let layoutAssignments = {
    '/': EmptyLayout,
    '/login': EmptyLayout,
    '/signup': EmptyLayout,
    '/dashboard': MainLayout
}

let layoutPicker = function (props) {
    let Layout = layoutAssignments[props.location.pathname];
    return Layout ? <Layout /> : <pre>bad route</pre>;
};


function Routes() {
    return (
        <BrowserRouter>
            <Route path="*" render={layoutPicker} />
        </BrowserRouter>
    )
}
export default Routes;