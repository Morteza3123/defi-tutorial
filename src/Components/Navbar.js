import React, { Component } from 'react';
import farmer from '../farmer.png';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark  fixed-top  bg-dark  flex-md-nowrap  p-0 shadow">
                <a
                    className="navbar-brand col-sm-3  col-md-2  mr-0"
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noopener  norefferer"
                >
                    <img src={farmer}  width="30"  height="30"  className="d-inline-block   align-top"></img>
                    &nbsp; Dapp Token  Farm
                </a>

                <ui  className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none  d-sm-none   d-sm-block">
                        <small  className="text-secondary">
                            <small id="account">{this.props.account}</small>
                        </small>
                    </li>
                </ui>
            </nav>
        )
    }

}

export default Navbar;
