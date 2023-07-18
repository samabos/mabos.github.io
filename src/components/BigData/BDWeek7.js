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
                    <p>During the process of this week&apos;s exercise on Data Cleaning and Transformation, I realized the importance of using Python for data cleaning, as well as the importance of standardizing data, normalizing it, and removing outliers where applicable.</p>
                    <p>I was able to export data into an SQLite database file, structure code segments into Python functions, and learn the importance of code documentation.</p>
                    <p>I faced some challenges while following the instructions in the textbook. It seems the Python version that was used in the textbook was older than what I used in the Google Collab environment. I was able to do some extra research on how to resolve this issue and later refactor the code where necessary to make it work. This cost me some time, but I gained some more technical knowledge.</p>
                    <p>Finally, learning about data cleaning as a repetitive process is crucial since most data analysis tasks will be periodic. It is imperative to write a script to automate the data-cleaning phase for the same periodic dataset.</p>
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
