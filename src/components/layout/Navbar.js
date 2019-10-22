import React, { Component } from 'react'
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Navbar extends Component {

    

    render() {
        return (
            <nav className='navbar bg-primary'>Github Finder
                <h1>
                <i className="fab fa-github"></i>
                                {this.props.title}
                </h1><ul>
                <li>
                <Link to ='/'>Home</Link>
                </li><li>
                <Link to ='/About'>About</Link></li>
                
                </ul>
            </nav>
        )
    }
}

export default Navbar
