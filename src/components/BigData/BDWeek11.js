import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDWeek11 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 11: Development Team Project: Executive Summary</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Design, develop and evaluate solutions for processing datasets and solving complex problems in various environments using relevant programming paradigms.</li>
                <li>Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real life perspectives on team roles and organisation.</li>
              </ul>
        
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <h4>EXECUTIVE SUMMARY</h4>
            <p>This executive summary analyses the proposed database design for the Hotel Management System (HMS) of Dreamland Manor. This summary aims to inform the organization of the key findings and justification of the decisions made.</p>

            <h4>INTRODUCTION</h4>
            <p>A Hotel Management System (HMS) allows for various management operations including room allocation, payments, and information relating to the guests' needs (Hsu & Hsu, 2011). The purpose of an HMS is to enhance operational efficiency and optimize the performance of the hospitality establishment by enabling a centralized platform to streamline processes (Kasavana & Cahill, 2014). TSM Consulting’s role is to evaluate the needs of Dreamland Manor and create an HMS that is tailored to best suit these requirements.</p>

            <p><br/> Reead the full Executive Summary report at the GitHub repository below
                <br/>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3_ExecutiveSummary_DreamlandManor_DB_v3.0.pdf' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/Team3_ExecutiveSummary_DreamlandManor_DB_v3.0.pdf</a></p>
            
            <h4>Team Minutes of Meeting</h4>
            Find the team meeting notes at the GitHub repository below
            <br/>
            <p>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Meeting%20Minutes-2.pdf' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Meeting%20Minutes-2.pdf</a></p>
            <hr/>
            <h4>Tutor Feedback</h4>
            <p>Not Available.</p>
        </div>
    </section>
    <section id="two" class="spotlights">
        <section>
            <a href="#" class="image">
                <img src="/assets/images/pic09.jpg" alt="" data-position="top center" />
            </a>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>Reflections</h3>
                    </header>
                    <p>In this Unit 11 Project, I took on the responsibility of populating the database with the dataset, which proved to be an immensely valuable experience. This task required applying various data extraction, exploration, cleaning, and modelling techniques that I had learned throughout the module. By doing so in a real-world context, I gained a deeper understanding of the practical significance and challenges of these techniques.
                    </p>
                    <p>Leveraging my technical expertise and extensive experience, I proposed and implemented appropriate solutions effectively. Ensuring accurate data insertion and creating a realistic testing environment demanded meticulous attention to detail. Reflecting on this experience, I can confidently say that the hands-on application of data extraction, exploration, cleaning, and modelling techniques has not only strengthened my technical skills but also enhanced my ability to tackle complex database engineering tasks. This project provided a bridge between theoretical knowledge and practical implementation, allowing me to become a more competent and confident database professional.
                    </p>
                    </div>
            </div>
        </section>
    </section>
    </div>
	</BigData>
);

BDWeek11.propTypes = {};

BDWeek11.defaultProps = {};

export default BDWeek11;
