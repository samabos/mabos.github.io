import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
	<header id="header" class="alt {this.props.style}" className="Header">
		<Link to="/" class="logo"><span>Abiodun Maborukoje</span></Link>
		<nav className='nav nav-pills'>
			{/*	<a href="#menu">Menu</a>*/}
			<Link to="/aboutme">About Me</Link>
			{/*<Link to="/induction">Induction</Link> */}
			<Link to="/tdp">TDP</Link>
			<Link to="/na">Numerical Analysis</Link>
			<Link to="/bigdata">Big Data</Link>
		</nav>
	</header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
