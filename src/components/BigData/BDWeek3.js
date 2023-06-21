import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDWeek3 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Data Collection and Storage</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Apply data collection methods in a problem scenario.</li>
                <li>Conduct fact finding and fact checking.</li>
                <li>Understand the applicability of web services.</li>
            </ul>
        </div>
    </section>
    <section id="four">
        <div class="inner">
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <h4>Web Scraping</h4>
            <p>The web scraping script in the notebook below extracts data relating to &quot;Data Scientist&quot; from a webpage. The BeautifulSoup4 and Requests modules were utilized to simplify HTML content parsing. By identifying the webpage URL, issuing a GET request, parsing the HTML, retrieving the important data, and storing it in a JSON file, the script follows the general stages of web scraping.</p>
            <p>A user agent header can be added to the requests module to help simulate a browser request and prevent potential blocking or limits imposed by the website. This is significant, as I discovered after attempting to scrape data from sites such as Indeed.com.</p>
            <p>Note: It&apos;s also a good idea to go over the terms of service and policies of the website to ensure that your scraping activities are allowed and that you are not violating any rules.</p>
             
            <a href='/assets/webscrappingexercise.ipynb' download>Download Notebook</a>
            <p></p>
            <p>Results:</p>
             <img width='100%' src='/assets/images/Screenshot2023-06-21043056.png'></img>      

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
                    <p>During the process of creating the web scraping script, I realized the importance of properly identifying the target webpage and understanding its structure. This involved examining the HTML source code and identifying the specific elements that contained the desired data.
                    </p>
                    <p>While implementing the script, I became aware of the ethical considerations and legal implications surrounding web scraping. It&apos;s crucial to review and respect the terms of service of the targeted website, ensuring that the scraping activities comply with their guidelines. 
                    Additionally, being mindful of the frequency and volume of requests is important to avoid overloading the server and causing disruption.</p>
                    <p>Overall, this exercise provided me with valuable hands-on experience in web scraping and reinforced the importance of understanding the target website, using appropriate tools, and considering ethical and legal aspects in the process.</p>
                </div>
            </div>
        </section>
    </section>
    </div>
	</BigData>
);

BDWeek3.propTypes = {};

BDWeek3.defaultProps = {};

export default BDWeek3;
