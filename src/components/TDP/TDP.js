import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import './TDP.css';



class Tdp extends React.Component {
	render() {
		return (
	<Layout>
		<div id="main">

				<section id="banner" class="style5">
					<div class="inner">
						<span class="image">
							<img src="/assets/images/pic07.jpg" alt="" />
						</span>
						<header class="major">
							<h1>The Data Professional</h1>
						</header>
						<div class="content">
							<p>Exploring the critical theoretical concepts in the discipline of data science.</p>
						</div>
					</div>
				</section>
				<section id="one">
					<div class="inner">
						<ul class="actions">
							<li><Link class="button" to="/Week1_3">Week 1 - 3</Link></li>
							<li><Link class="button" to="/Week4_6">Week 4 - 6</Link></li>
						</ul>
					
						</div>
				</section>
				<main>{this.props.children}</main>
		

		</div>
	</Layout>
		);
	}
}
export default Tdp;
