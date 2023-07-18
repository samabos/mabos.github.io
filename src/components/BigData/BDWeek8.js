import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';




const BDWeek8 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 8: Collaborative Discussion 2 - Comparing Compliance Laws</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Identify and manage challenges, security issues and risks, limitations, and opportunities in data wrangling</li>
            </ul>
            
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <h4>Initial Post</h4>
            <p>The Nigeria Data Protection Act (NDPA), 2023 and the General Data Protection Regulation (GDPR) share some similarities in terms of principles and requirements for the processing and protection of personal data. However, there are some differences between the two. Comparing the rules of the GDPR and NDPA, specifically focusing on the securing of personal data rule. 
               </p>
                Securing of Personal Data Rule: 
               <p>  GDPR (General Data Protection Regulation): Under the GDPR, the securing of personal data is addressed in Article 32. It states that data controllers and processors must implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. These measures should include pseudonymisation and encryption of personal data, ensuring the ongoing confidentiality, integrity, availability, and resilience of processing systems and services, and the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.</p>

<p> Nigeria Data Protection Act, 2023: In the Nigeria Data Protection Act, 2023, the securing of personal data is addressed in Part V, Section 24. It states that a data controller or data processor shall process personal data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing, access, loss, destruction, damage, or any form of data breach. They are required to use appropriate technical and organizational measures to ensure the confidentiality, integrity, and availability of personal data. Both the GDPR and the NDPA emphasize the importance of implementing appropriate security measures to protect personal data. Highlighting the need for confidentiality, integrity, availability, and protection against unauthorized access or data breaches. While the GDPR is a regulation that applies to all European Union (EU) member states and has extraterritorial reach, the NDPA is specific to Nigeria and applies to the processing of personal data within Nigeria or by Nigerian data controllers or processors. Organizations that operate in both the EU and Nigeria may need to comply with both sets of regulations if they process personal data from individuals in these jurisdictions.</p>

<p> Art. 32 GDPR &ndash; Security of processing - general data protection regulation (GDPR) (no date) General Data Protection Regulation (GDPR). Available at: https://gdpr-info.eu/art-32-gdpr/ (Accessed: July 10, 2023). NDPC. 2023. Nigeria Data Protection Act, 2023. Available at: https://www.ndpb.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf (Accessed: July 10, 2023).</p>
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

BDWeek8.propTypes = {};

BDWeek8.defaultProps = {};

export default BDWeek8;
