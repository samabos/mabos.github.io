import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = () => (


<div id="main" className="Home">
			<section id="two">
				<div class="inner">
					<header class="major">
						<h2>About Me</h2>
					</header>
					<p>
						Strategic Information Technology Manager skilled in guiding navigation of modern technology.

						Accustomed to driving efficiency and effectiveness by developing, delivering and supporting strategic plans.

						Software and Data Engineering background working productively in dynamic environments for over 12 years.

						Fluent in C#, SQL, and Javascript programming languages used to develop software in Trade and Fin-tech industry.

						Proud team player with successful 7 years record of building positive relationships with internal and external stakeholders.

					</p>
					<ul class="actions">
						<li><a href="About.html" class="button">Learn more</a></li>
					</ul>
				</div>
			</section>


			<section id="one" class="tiles">
				<article>
					<span class="image">
						<img src="images/pic01.jpg" alt="" />
					</span>
					<header class="major">
						<h3><a href="Launch Module.html" class="link">Induction Module</a></h3>
						<p>Introductory module</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic02.jpg" alt="" />
					</span>
					<header class="major">
						<h3><a href="Module 2.html" class="link">The Data Professional</a></h3>
						<p>Exploring the critical theoretical concepts in the discipline of data science.</p>
					</header>
				</article>

			</section>

		</div>

);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
