import React from "react";

//import our CSS file
//Webpack will actually merge the contents
//of this file into an inline <style></style>
//attribute within the <head> section, so that
//the browser doesn't have to make another
//network request to get the styles!
//note that here we start the path with a `.`
//to signal that this is a relative file
//path and not a module in our node_modules
//directory 
import "./css/main.css";
<<<<<<< HEAD
import {Link, IndexLink} from "react-router";
//import syntax used in two forms, default exported identifer or import several identifiers you can do { }
=======

>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" 
                            activeClassName ="active">Products</IndexLink>
                        </li>
                        <li>
                            <Link to="/cart"
                            activeClassName="active">Cart</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
=======
                <main>
                    <h1>Hello React!</h1>
>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
                </main>
            </div>
        );
    }
}
