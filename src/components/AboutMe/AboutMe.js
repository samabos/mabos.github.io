import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import Modules from '../Modules/Modules';
import './AboutMe.css';
import { Link } from "react-router-dom";

const AboutMe = () => (
    <Layout>
	
		<div id="main">
			<section id="banner" class="style2">
				<div class="inner">
					<span class="image">
						<img src="/assets/images/pic07.jpg" alt="" />
					</span>
					<header class="major">
						<h1>About Me</h1>
					</header>
					<div class="content">
						<p>Creativity and innovation</p>
					</div>
				</div>
			</section>
			<section id="one">
				<div class="inner">
					<header class="major">
						<h2>Brief Intro</h2>
					</header>
					<p>
						Strategic Information Technology Manager skilled in guiding navigation of modern technology.

						Accustomed to driving efficiency and effectiveness by developing, delivering and supporting strategic plans.

						Software and Data Engineering background working productively in dynamic environments for over 12 years.

						Fluent in C#, SQL, and Javascript programming languages used to develop software in Trade and Fin-tech industry.

						Proud team player with successful 7 years record of building positive relationships with internal and external stakeholders.

					</p>
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
								<h3>Work History</h3>
							</header>
							<table>
								<tr>
									<td width="20%">2021-To Date</td>
									<td>
										<strong>Solution Delivery Manager</strong><br />
										Bizqore Consulting (Nigeria)
									</td>
								</tr>
								<tr>
									<td width="20%">2020-2021</td>
									<td>
										<strong>Software Engineer & AI Consultant
											</strong><br />
										Palmview Technologies Limited (Nigeria)
									</td>
								</tr>
								<tr>
									<td width="20%">2016-2020</td>
									<td>
										<strong>Head Solution Delivery </strong><br />
										West Blue Ghana Limited (Ghana)
									</td>
								</tr>
								<tr>
									<td width="20%">2013-2015</td>
									<td>
										<strong>Software Developer</strong><br />
										West Blue Consulting (Nigeria)
									</td>
								</tr>
								
							</table>
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
								<h3>Benchmark Statement</h3>
							</header>
							<p>Coming soon...</p>
							{/*<p>(what I know in theory and practice and what I want to learn)</p>*/}
						</div>
					</div>
				</section>
				{/*<section>*/}
				{/*	<a href="generic.html" class="image">*/}
				{/*		<img src="/assets/images/pic10.jpg" alt="" data-position="25% 25%" />*/}
				{/*	</a>*/}
				{/*	<div class="content">*/}
				{/*		<div class="inner">*/}
				{/*			<header class="major">*/}
				{/*				<h3>Other Info</h3>*/}
				{/*			</header>*/}
				{/*			<p>Test, test, test</p>*/}
				{/*			<ul class="actions">*/}
				{/*				<li><a href="generic.html" class="button">For details, see here</a></li>*/}
				{/*			</ul>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
			</section>

			{/*<section id="three">*/}
			{/*	<div class="inner">*/}
			{/*		<header class="major">*/}
			{/*			<h2>More Info</h2>*/}
			{/*		</header>*/}
			{/*		<p>Test test test</p>*/}
			{/*		<ul class="actions">*/}
			{/*			<li><a href="generic.html" class="button next">Learn More</a></li>*/}
			{/*		</ul>*/}
			{/*	</div>*/}
			{/*</section>*/}

		</div>
        <Modules />
    </Layout>
);

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
