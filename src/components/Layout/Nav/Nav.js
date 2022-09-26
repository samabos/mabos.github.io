import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Nav.css';



class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.init();
		//this.state = { isToggleOn: true };

		// This binding is necessary to make `this` work in the callback
		//this.handleClick = this.handleClick.bind(this);
	}

	init() {
		let body = document.body;
		let menu = document.getElementById("menu");
		
		//menu._locked = false;
		//menu._lock = function () {

		//	if (menu._locked)
		//		return false;

		//	menu._locked = true;

		//	window.setTimeout(function () {
		//		menu._locked = false;
		//	}, 350);

		//	return true;

		//};
		//menu._show = function () {

		//	if (menu._lock())
		//		body.classList.add("is-menu-visible");

		//};
		//menu._hide = function () {

		//	if (menu._lock())
		//		body.classList.remove("is-menu-visible");

		//};
		//menu._toggle = function () {

		//	if (menu._lock())
		//		body.classList.toggle("is-menu-visible");

		//};
		//menuInner.addEventListener('click', (event) => {
		//	event.stopPropagation();
		//});
		//.on('click', 'a', function (event) {
		//	let href = this.attr('href');

		//	event.preventDefault();
		//	event.stopPropagation();
		//	// Hide.
		//	menu._hide();
		//	// Redirect.
		//	window.setTimeout(function () {
		//		window.location.href = href;
		//	}, 250);
		//});
		//menu.appendTo(body).on('click', function (event) {

		//	event.stopPropagation();
		//	event.preventDefault();
		//	body.classList.remove("is-menu-visible");

		//}).append('<a class="close" href="#menu">Close</a>');
	}

	render() {
		return (

			<nav id="menu" className="Nav">
				<div class="inner">
					<ul class="links">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/aboutme">About Me</Link></li>
						<li><a href="Launch Module.html">Induction Module</a></li>
						<li><a href="Module 2.html">The Data Professional</a></li>
					</ul>
				</div>
			</nav>
		)
	}
};



export default Nav;


