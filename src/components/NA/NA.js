import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';



class Na extends React.Component {
	render() {
		return (
	<Layout>
		<div id="main">

				<section id="banner" class="style2">
					<div class="inner">
						<span class="image">
							<img src="/assets/images/pic07.jpg" alt="" />
						</span>
						<header class="major">
							<h1>Numerical Analysis Module</h1>
						</header>
						<div class="content">
							<p>This module introduces key aspects of mathematics and statistics for data science and artificial intelligence.</p>
						</div>
					</div>
				</section>
				<section id="one">
					<div class="inner">
						<ul class="actions">
                            <li><Link class="button" to="/NAWeek1_3">Week 1 - 3</Link></li>
							<li><Link class="button" to="/NAWeek4_6">Week 4 - 6</Link></li>
						</ul>
					
						</div>
				</section>
				<main>{this.props.children}</main>
		

		</div>
	</Layout>
		);
	}
}
export default Na;
