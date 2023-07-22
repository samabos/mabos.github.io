import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDWeek4 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 4: Data Cleaning and Transformation</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Clean and transform data using the data pipeline as a guide.</li>
                <li>Examine and understand factors that affect data cleaning.</li>
                <li>Understand requirements for design automation.</li>
            </ul>
        
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <h4>Data Cleaning Exercise</h4>
            <p>Following the instructions in Data Wrangling with Python textbook, chapters 6 and 7 also with the data files mn.csv and mn_headers.csv available from the GitHub repository.</p>
            <p>The following exercise was completed this week. The tasks or activities cover the learning objective above.</p>
            
            <a href='/UNDataCleanup.ipynb' download>Download Exercise Notebook</a>    
            <p>GitHub Repository: <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/UNDataCleanup.ipynb' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/UNDataCleanup.ipynb</a></p>
            
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

BDWeek4.propTypes = {};

BDWeek4.defaultProps = {};

export default BDWeek4;
