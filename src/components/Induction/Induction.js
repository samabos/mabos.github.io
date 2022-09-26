import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import './Induction.css';

const Induction = () => (
	<Layout>
		<div id="main">
			<section id="banner" class="style2">
				<div class="inner">
					<span class="image">
						<img src="/assets/images/pic07.jpg" alt="" />
					</span>
					<header class="major">
						<h1>Induction Module</h1>
					</header>
					<div class="content">
						<p>An introduction to the world of Data Science<br />
							Introductory module.</p>
					</div>
				</div>
			</section>
			<section id="one">
				<div class="inner">
					<header class="major">
						<h2>Learning Outcomes</h2>
					</header>
					<p>I will learn:</p>
					
					{/*<ul>*/}
					{/*	<li>Dolor etiam magna etiam.</li>*/}
					{/*	<li>Sagittis lorem eleifend.</li>*/}
					{/*	<li>Felis dolore viverra.</li>*/}
					{/*</ul>*/}
				</div>
			</section>

			<section id="two" class="spotlights">
				<section>
					<a href="generic.html" class="image">
						<img src="/assets/images/pic08.jpg" alt="" data-position="center center" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Artefacts</h3>
							</header>
							<p>These are the projects carried out to meet those learning outcomes, which are described in the link below.</p>
							{/*<ul class="actions">*/}
							{/*	<li><a href="generic.html" class="button">Learn more</a></li>*/}
							{/*</ul>*/}
						</div>
					</div>
				</section>
				<section>
					<a href="generic.html" class="image">
						<img src="/assets/images/pic09.jpg" alt="" data-position="top center" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Reflections</h3>
							</header>
							<p>What exactly have I learnt and how?</p>
							{/*<ul class="actions">*/}
							{/*	<li><a href="generic.html" class="button">More Information here</a></li>*/}
							{/*</ul>*/}
						</div>
					</div>
				</section>
				<section>
					<a href="generic.html" class="image">
						<img src="/assets/images/pic10.jpg" alt="" data-position="25% 25%" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Meeting Notes</h3>
							</header>
							<p>Notes from various meetings, as well as feedback from team members and tutors.</p>
							{/*<ul class="actions">*/}
							{/*	<li><a href="generic.html" class="button">For specific cases, see here</a></li>*/}
							{/*</ul>*/}
						</div>
					</div>
				</section>
			</section>

			<section id="three">
				<div class="inner">
					<header class="major">
						<h2>Professional Skills Matrix and Action Plan</h2>
					</header>
					<p>What skills have I gained or enhanced as a result of this module and how can I use it?  What else do I need to learn?</p>
					{/*<ul class="actions">*/}
					{/*	<li><a href="generic.html" class="button next">Learn More</a></li>*/}
					{/*</ul>*/}
				</div>
			</section>

		</div>
	</Layout>
);

Induction.propTypes = {};

Induction.defaultProps = {};

export default Induction;
