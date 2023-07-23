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
		const divStyle = {
			fontSize: '12pt', 
			lineHeight: '30pt'
		  };
		return (
	<Layout>
		<div id="main">
				<section id="banner" className="style3">
					<div class="inner">
						<header class="major">
							<h1>Deciphering Big Data Module</h1>
						</header>
						<div class="content">
							<p>This module explore the diversity of different data types, sources and methods of data collection.</p>
                            <br/><br/>
						</div>
                        
						<div class="content"> 
                            <ul class="actions">
                                <li><Link class="button" to="/BDHome">Home</Link></li>
                                <li><Link class="button" to="/BDWeek1">1,2</Link></li>
                                <li><Link class="button" to="/BDWeek3"> 3</Link></li>
                                <li><Link class="button" to="/BDWeek4"> 4,5</Link></li>
                                <li><Link class="button" to="/BDWeek6"> 6</Link></li>
                                <li><Link class="button" to="/BDWeek7"> 7</Link></li>
                                <li><Link class="button" to="/BDWeek8"> 8,9</Link></li>
                                <li><Link class="button" to="/BDWeek10"> 10</Link></li>
                                <li><Link class="button" to="/BDWeek11"> 11</Link></li>
                                <li><Link class="button" to="/BDReflection">Reflection</Link></li>
                            </ul></div>
							<div style={divStyle}>Click on the link/button above to to see the task for each unit in this module</div>
					</div>
				</section>
				<main>{this.props.children}</main>
		</div>
	</Layout>
		);
	}
}
export default BigData;
