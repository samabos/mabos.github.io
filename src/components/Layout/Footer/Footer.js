import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const LayoutFooter = () => (
		<footer id="footer" className="Footer">
			<div class="inner">
				<ul class="icons">
					<li><a href="https://github.com/samabos" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
					<li><a href="https://www.linkedin.com/in/samabos/" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
				</ul>
			</div>
		</footer>
);

LayoutFooter.propTypes = {};

LayoutFooter.defaultProps = {};

export default LayoutFooter;
