import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Banner from '../Banner/Banner';
import Modules from '../Modules/Modules';
import { Link } from "react-router-dom";

const Home = () => (


	<div id="main" className="Home">

		<Banner />
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
					<li><Link to="/aboutme" class="button">Learn more</Link></li>
					</ul>
				</div>
			</section>
		<Modules />
		</div>

);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
