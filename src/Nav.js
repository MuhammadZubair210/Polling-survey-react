import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to='/'> Home</Link></li>
                            <li><Link to='/poll'> Poll</Link> </li>
                            <li><Link to='/createpoll'> Create Poll</Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
