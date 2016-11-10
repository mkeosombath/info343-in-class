import React from "react";
import {render} from "react-dom";

import App from "./app.jsx";
import Cart from "./cart.jsx";
import Products from "./products.jsx";

<<<<<<< HEAD
import {Router, Route, IndexRoute, hashHistory} from "react-router";

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Products}></IndexRoute>
            <Route path="/cart" component={Cart}></Route>
        </Route>
    </Router>
);
render(router, document.getElementById("app"));
=======
render(<App/>, document.getElementById("app"));
>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
