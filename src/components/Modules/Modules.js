import React from 'react';
import PropTypes from 'prop-types';
import './Modules.css';
import { Link } from "react-router-dom";

const Modules = () => (
	<section id="one" class="tiles" className="Modules tiles">
				<article>
					<span class="image">
						<img src="images/pic01.jpg" alt="" />
					</span>
					<header class="major">
						<h3><Link to="/induction" class="link">Induction Module</Link></h3>
						<p>Introductory module</p>
					</header>
				</article>
				<article>
					<span class="image">
						<img src="images/pic02.jpg" alt="" />
					</span>
					<header class="major">
						<h3><Link to="/tdp" class="link">The Data Professional</Link></h3>
						<p>Exploring the critical theoretical concepts in the discipline of data science.</p>
					</header>
				</article>

			</section>
);

Modules.propTypes = {};

Modules.defaultProps = {};

export default Modules;
