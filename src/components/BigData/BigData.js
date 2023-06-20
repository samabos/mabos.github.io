import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';


class BigData extends React.Component {
	render() {
		return (
	<Layout>
		<div id="main">
				<section id="banner" className="style5">
					<div class="inner">
						<header class="major">
							<h1>Deciphering Big Data Module</h1>
						</header>
						<div class="content">
							<p>This module explore the diversity of different data types, sources and methods of data collection.</p>
                            <br/> <br/>
						</div>
                        
						<div class="content"> 
                            <ul class="actions">
                                <li><Link class="button" to="/BDHome">Module Home</Link></li>
                                <li><Link class="button" to="/BDWeek1">Unit 1</Link></li>
                            </ul></div>
					</div>
				</section>
				<main>{this.props.children}</main>
		</div>
	</Layout>
		);
	}
}
export default BigData;
