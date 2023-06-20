import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDHome = () => (
	<BigData>
    <div id="main">
        
				
                <section id="two">
			<div class="inner">
				<header class="major">
					<h2>Learning Outcomes</h2>
				</header>
				<ul> 
                    <li>Introduce and review various concepts of big data, technologies, and data management to enable you identify and manage challenges associated with security risks and limitations.</li>
                    <li>Critically analyse data wrangling problems and determine appropriate methodologies and tools in problem solving.</li>
                    <li>Explore different data types and formats. Evaluate various data storage formats ranging from structured, quasi structured, semi structured, and unstructured formats. We explore the various memory and storage requirements.</li>
                    <li>Critically examine various data collection methods and sources. Review fact finding methods to determine the integrity, reliability and readiness of data extracted and presented for pre-processing, cleaning, and usage.</li>
                    <li>Examine data exploration methods and analyse data for presentation in an organisation. Critically evaluate data readability, readiness, and longevity within the data Pipeline. Examine cloud services, API (Application Programming Interfaces) and how this enables data interoperability and connectivity.</li>
                    <li>Examine and analyse the ideas and theoretical concepts underlying DBMS (Database Management Systems) Database Design and Modelling.</li>
                    <li>Explore the future of use of data and deciphering by examining some fundamental ideas and concepts of machine learning and how these concepts are applied in various methods in handling big data.</li>
                </ul>
			</div>
		</section>
    </div>
	</BigData>
);

BDHome.propTypes = {};

BDHome.defaultProps = {};

export default BDHome;
