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
            <p>This design report presents the proposed database design for the Hotel Management System (HMS) of Dreamland Manor. The design aims to fulfil the requirements of the organization by providing an efficient system for managing hotel operations.
                <br/> Find the full report at the GitHub repository below
                <br/>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Database%20Report.pdf' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Database%20Report.pdf</a></p>
            
            <h4>Team Minutes of Meeting</h4>
            Find the team meeting notes at the GitHub repository below
            <br/>
            <p>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Meeting%20Minutes-1.pdf' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/Team3%20Meeting%20Minutes-1.pdf</a></p>
            <hr/>
            <h4>Tutor Feedback</h4>
            <p>
                Knowledge and understanding of the topic/ issues under consideration An very good demonstration of knowledge and understanding, displaying some originality and in-depth understanding in all key areas of knowledge relevant to the work. 
                The report focuses on the design which is indeed appropriate. There needs to be a good balance between theory and practice and that does not come across in the report - it is more theoretical and require better application focus. </p>
             <p>   <strong>See below for further comments. </strong><br/>
             <ul>
  <li>Application of knowledge and understanding: A satisfactory demonstration of the application of knowledge and understanding to address the learning outcomes assessed by the assignment within a real-world application.
    <ul>
      <li>The application is a hotel management database, and the report offers much detail on the design. However, there are issues with demonstrating knowledge in a practical setting.</li>
      <li>For example, the data management pipeline in section 5 is a diagram offering basic descriptions without any reference to the report's application.</li>
      <li>Please consider that you need to demonstrate how your understanding of the theory assisted with the design process.</li>
      <li>The requirements section also needs better articulation with the design section, as each is rather standalone in the report.</li>
    </ul>
  </li>
  <li>Criticality: A reasonable demonstration of critical analysis, with some insights and reflection, but the linking between theory and practice is not great.
    <ul>
      <li>There was some critical discussions in section 6 but really limited. More is needed for sections 3 and 4.</li>
      <li>Please consider that critical analysis naturally results when linking theory to practice and evaluating design options.</li>
      <li>There is a reasonable list of references in Harvard style that are well cited to focus arguments where appropriate. However, more is needed to redress the report limitations.</li>
    </ul>
  </li>
  <li>Structure and Presentation (as detailed in the assessment guidance): A very good structure and presentation but has some issues against the guidelines.
    <ul>
      <li>The report redresses all assessment requirements, albeit with limitations as explained in other comments.</li>
      <li>The English grammar and spelling are sound.</li>
      <li>The word count is within limits at 1162 (excluding table of contents etc., references, and appendix).</li>
      <li>Please be consistent with the use of "figure" and "table" in section 4.</li>
      <li>Attention to fine details is good, so consider consistent line spacing and general table formatting.</li>
      <li>The report is accompanied with a SQL code file, but that is not required here. Please consider that for Unit 11 assessment.</li>
    </ul>
  </li>
</ul>
 </p>
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
                        I also provided valuable recommendations, such as the name of the consulting firm and client, which contributed to the assignment's success. Moving forward, I aim to delegate technical tasks to non-technical members, fostering collaboration and knowledge sharing within the team. Additionally, 
                        I plan to strengthen the practical application focus of my work, demonstrating a deeper understanding of theoretical concepts in practical settings and engaging in more critical analysis to improve future project outcomes. The feedback received has been insightful and will guide my personal growth as a data professional.</p>
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
