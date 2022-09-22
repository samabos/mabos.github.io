import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Banner from '../Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './Layout.css';

class Layout extends React.Component {
	render() {
		return (
			<div id="wrapper" className="Layout">
				<>
					<Header />
					<Nav />
					<Banner />
					<main>{this.props.children}</main>
					<Contact />
					<Footer />
				</>
			</div>
		);
	}
}


export default Layout;
