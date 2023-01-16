import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import './TDP.css';
import Week1_3 from './Week1_3';

const Tdp = () => (
	<Layout>
		<div id="main">
			<section id="banner" class="style2">
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
						<li><a class="button primary">Week 1 - 3</a></li>
						<li><a class="button">Week 4</a></li>
					</ul>
					
					</div>
			</section>
			<Week1_3/>
			

		</div>
	</Layout>
);

Tdp.propTypes = {};

Tdp.defaultProps = {};

export default Tdp;
