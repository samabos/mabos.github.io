import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = () => (

	<nav id="menu" className="Nav">
			<ul class="links">
				<li><a href="index.html">Home</a></li>
				<li><a href="About.html">About Me</a></li>
				<li><a href="Launch Module.html">Induction Module</a></li>
				<li><a href="Module 2.html">The Data Professional</a></li>
			</ul>
		</nav>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
