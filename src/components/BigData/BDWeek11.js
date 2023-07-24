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
                <br/>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3_ExecutiveSummary_DreamlandManor_DB_v3.0.pdf' target='blank' class="button">Executive Summary Report, see here</a></p>
            
            <hr/>
            <h4>Tutor Feedback</h4>
            <p>Not Available.</p>
        </div>
    </section>
    <section id="two" class="spotlights">
    <section>
        <a href="#" class="image">
            <img src="/assets/images/pic10.jpg" alt="" data-position="25% 25%" />
        </a>
        <div class="content">
            <div class="inner">
                <header class="major">
                    <h3>Meeting Notes</h3>
                </header>
                <p>Notes from various meetings, as well as feedback from team members.</p>
                <ul class="actions">
                    <li><a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Meeting%20Minutes-2.pdf' target='blank' class="button">For details, see here</a></li>
                </ul>
            </div>
        </div>
    </section>
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
    <section id="three">
        <div class="inner">
            <header class="major">
                <h2>Professional Skills Matrix and Action Plan</h2>
            </header>
            <h4>Professional Skills Matrix</h4>
<ul>
  <li><strong>Data Population:</strong> Acquired hands-on experience in populating a database with real-world datasets, improving my ability to handle large-scale data insertion.</li>
  <li><strong>Data Extraction and Cleaning:</strong> Further developed data extraction and cleaning skills, enabling me to prepare and integrate diverse datasets effectively.</li>
  <li><strong>Performance Testing:</strong> Gained proficiency in conducting performance tests, allowing me to evaluate the efficiency and responsiveness of the database system under different conditions.</li>
  <li><strong>Penetration Testing:</strong> Acquired knowledge and practical expertise in performing penetration tests to identify and address security vulnerabilities in the database system.</li>
  <li><strong>Technical Writing:</strong> Enhanced technical writing skills by documenting the database implementation process, findings, and recommendations in a clear and concise manner.</li>
</ul>

<h4>Action Plan</h4>
<ul>
  <li><strong>Advanced Performance Testing:</strong> To further improve my performance testing skills, I plan to explore advanced performance testing tools and methodologies to conduct more comprehensive and in-depth assessments.</li>
  <li><strong>Data Security and Privacy:</strong> As data security and privacy are crucial in database management, I aim to continue learning about the latest security measures and regulatory requirements to ensure data protection.</li>
  <li><strong>Database Optimization:</strong> To enhance database efficiency, I intend to explore optimization techniques like indexing and query tuning to streamline data retrieval and manipulation processes.</li>
  <li><strong>Continued Collaboration:</strong> Building on my experience in teamwork, I will seek more collaborative projects to improve my ability to work effectively with diverse groups and leverage collective strengths.</li>
  <li><strong>Real-World Data Challenges:</strong> Seeking opportunities to work on real-world data challenges will enable me to apply my data extraction, cleaning, and population skills in practical scenarios.</li>
  <li><strong>Stay Updated with Database Technologies:</strong> To remain current with the rapidly evolving database technologies, I plan to follow industry trends and participate in relevant workshops or courses.</li>
</ul>


        </div>
    </section>
    </div>
	</BigData>
);

BDWeek11.propTypes = {};

BDWeek11.defaultProps = {};

export default BDWeek11;
