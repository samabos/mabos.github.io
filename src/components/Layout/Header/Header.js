import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
	<header id="header" class="alt" className="Header">
			<a href="index.html" class="logo"><span>Abiodun Maborukoje</span></a>
			<nav>
				<a href="#menu">Menu</a>
			</nav>
		</header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
