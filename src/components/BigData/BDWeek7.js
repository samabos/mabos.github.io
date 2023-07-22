import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';




const BDWeek7 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 7: Constructing Normalised Tables and Database Build</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Understand the concept of transforming a flat file database model into a normalised model.</li>
                <li>Build a relational database model and test its useability.</li>
                <li>Identify functional dependencies of data items in the dataset.</li>
                <li>Evaluate constraints and limitations associated with the use and application of a dataset.</li>
                <li>Specify data attributes relevant and critical to using a given dataset.</li>
            </ul>
        
            <header class="major">
                <h3>Normalisation Task</h3>
            </header>
            <p>To normalize the given data to the 3rd Normal Form (3NF), we need to identify the functional dependencies and split the data into separate tables.</p>
            <p>&nbsp;</p>
            <img src='/assets/images/Screenshot2023-06-27082454.png'></img>
            <p>&nbsp;</p>
            <p>Step 1: 1st Normal Form (1NF)</p>
            <p>In 1NF, we ensure that each column contains atomic values, and there are no repeating groups.</p>
            <p>Table 1: Students</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Student Number(PK)</p>
                        </td>
                        <td>
                            <p>Student Name</p>
                        </td>
                        <td>
                            <p>Date of Birth</p>
                        </td>
                        <td>
                            <p>Support</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1001</p>
                        </td>
                        <td>
                            <p>Bob Baker</p>
                        </td>
                        <td>
                            <p>25/08/2001</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1002</p>
                        </td>
                        <td>
                            <p>Sally Davies</p>
                        </td>
                        <td>
                            <p>02/10/1999</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1003</p>
                        </td>
                        <td>
                            <p>Mark Hanmill</p>
                        </td>
                        <td>
                            <p>05/06/1995</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1004</p>
                        </td>
                        <td>
                            <p>Anas  Ali</p>
                        </td>
                        <td>
                            <p>03/08/1980</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1005</p>
                        </td>
                        <td>
                            <p>Cheuk Yin</p>
                        </td>
                        <td>
                            <p>01/05/2002</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Table 2: Exam Scores</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Student Number(PK)(FK)</p>
                        </td>
                        <td>
                            <p>Course Name(PK)(FK)</p>
                        </td>
                        <td>
                            <p>Exam Score</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1001</p>
                        </td>
                        <td>
                            <p>Computer Science</p>
                        </td>
                        <td>
                            <p>78</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1002</p>
                        </td>
                        <td>
                            <p>Maths</p>
                        </td>
                        <td>
                            <p>55</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1002</p>
                        </td>
                        <td>
                            <p>Biology</p>
                        </td>
                        <td>
                            <p>55</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1002</p>
                        </td>
                        <td>
                            <p>Music</p>
                        </td>
                        <td>
                            <p>55</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1003</p>
                        </td>
                        <td>
                            <p>Computer Science</p>
                        </td>
                        <td>
                            <p>90</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1004</p>
                        </td>
                        <td>
                            <p>Maths</p>
                        </td>
                        <td>
                            <p>70</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1004</p>
                        </td>
                        <td>
                            <p>Physics</p>
                        </td>
                        <td>
                            <p>70</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1004</p>
                        </td>
                        <td>
                            <p>Biology</p>
                        </td>
                        <td>
                            <p>70</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1005</p>
                        </td>
                        <td>
                            <p>Computer Science</p>
                        </td>
                        <td>
                            <p>45</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1005</p>
                        </td>
                        <td>
                            <p>Maths</p>
                        </td>
                        <td>
                            <p>45</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1005</p>
                        </td>
                        <td>
                            <p>Music</p>
                        </td>
                        <td>
                            <p>45</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Table 3: Exam Boards</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Course Name(PK)</p>
                        </td>
                        <td>
                            <p>Exam Boards</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Computer Science</p>
                        </td>
                        <td>
                            <p>BCS</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Maths</p>
                        </td>
                        <td>
                            <p>EdExcel</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Physics</p>
                        </td>
                        <td>
                            <p>OCR</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Biology</p>
                        </td>
                        <td>
                            <p>WJEC</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Music</p>
                        </td>
                        <td>
                            <p>AQA</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Table 4: Teachers</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Course Name(PK)</p>
                        </td>
                        <td>
                            <p>Teacher Name</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Computer Science</p>
                        </td>
                        <td>
                            <p>Mr Jones</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Maths</p>
                        </td>
                        <td>
                            <p>Ms Parker</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Physics</p>
                        </td>
                        <td>
                            <p>Mr Peters</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Biology</p>
                        </td>
                        <td>
                            <p>Mrs Patel</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Music</p>
                        </td>
                        <td>
                            <p>Ms Daniels</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Step 2: 2nd Normal Form (2NF)</p>
            <p>In 2NF, we identify the partial dependencies and remove them by splitting the tables further.</p>
            <p>Table 5: Courses</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Course Name(PK)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Computer Science</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Maths</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Physics</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Biology</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Music</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Step 3: 3rd Normal Form (3NF)</p>
            <p>In 3NF, we identify the transitive dependencies and split the tables accordingly.</p>
            <p>Table 6: Students Support</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Student Number</p>
                        </td>
                        <td>
                            <p>Support</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1001</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1002</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1003</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1004</p>
                        </td>
                        <td>
                            <p>No</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1005</p>
                        </td>
                        <td>
                            <p>Yes</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Each table is now in 3NF, and the data has been normalized accordingly.</p>  

            <header class="major">
                <h3>Data Build Task</h3>
            </header>
            <a href='/sqlscript.sql' download>Download SQL Script</a>
            <p>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/sqlscript.sql' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/sqlscript.sql</a></p>
            
            
        </div>
    </section>
    <section id="two" class="spotlights">
        <section>
            <a href="#" class="image">
                <img  src="/assets/images/pexels-valiphotos-589808.jpg" alt="" data-position="top center" />
            </a>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>Reflections</h3>
                    </header>
                    <p>Throughout Unit 7, I found the task of constructing normalized tables and building a database to be highly relevant and valuable to my learning objectives. As someone aspiring to become a data professional, understanding how to transform a flat-file database model into a normalized one was crucial. In the first step, achieving the 1st Normal Form (1NF) by ensuring atomic values and removing repeating groups helped enhance data organization. The subsequent steps, particularly reaching the 3rd Normal Form (3NF) by addressing transitive dependencies, significantly improved data integrity and reduced redundancy. This hands-on experience allowed me to critically analyze data-wrangling problems and determine appropriate methodologies, tools, and techniques.</p>
                    <p>The data build task further solidified my understanding of building a relational database model and its usability. By downloading and successfully executing the SQL script, I gained practical skills in database creation and evaluation. The entire unit helped me identify and manage challenges, security issues, risks, and limitations in data wrangling. I now have the expertise to specify relevant data attributes and tackle constraints associated with a dataset. </p>
                    </div>
            </div>
        </section>
    </section>
    </div>
	</BigData>
);

BDWeek7.propTypes = {};

BDWeek7.defaultProps = {};

export default BDWeek7;
