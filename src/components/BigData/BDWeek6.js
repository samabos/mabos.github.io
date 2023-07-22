import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDWeek6 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 6: Development Team Project: Project Report</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Critically analyse data wrangling problems and determine appropriate methodologies, tools, and techniques (involving preparing, cleaning, exploring, creating, optimising and evaluating big data) to solve them.</li>
                <li>Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real life perspectives on team roles and organisation.</li>
            </ul>
        
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <h4>Database Design Proposal</h4>
            <p>This design report presents the proposed database design for the Hotel Management System (HMS) of Dreamland Manor. The design aims to fulfil the requirements of the organization by providing an efficient system for managing hotel operations.</p>
            <p>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Database%20Report.docx' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Database%20Report.docx</a></p>
            
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
                    <p>During the assignment, I made significant contributions as a team member, leveraging my technical knowledge and experience to enhance brainstorming sessions and propose the database design and RDBMS adoption. 
                        My leadership and communication skills played a pivotal role in ensuring team efficiency and early completion of the project. I also provided valuable recommendations, such as the name of the consulting firm and client, which contributed to the assignment's success. Moving forward, I aim to delegate technical tasks to non-technical members, fostering collaboration and knowledge sharing within the team. Additionally, I plan to strengthen the application focus of my work, demonstrating a deeper understanding of theoretical concepts in practical settings and engaging in more critical analysis to improve future project outcomes. The feedback received has been insightful and will guide my personal growth as a data professional.</p>
                    </div>
            </div>
        </section>
    </section>
    </div>
	</BigData>
);

BDWeek6.propTypes = {};

BDWeek6.defaultProps = {};

export default BDWeek6;
