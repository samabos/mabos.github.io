import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';

const BDReflection = () => (
	<BigData>
    <div id="main">
                <section id="two">
			<div class="inner">
				<header class="major">
					<h2>Module Reflection</h2>
				</header>
				<h4>INTRODUCTION</h4>
				<p>Throughout this module, I had the opportunity to engage in various tasks that enriched my learning experience and professional growth. In this reflection, I will delve into the key highlights of my journey during the module, focusing on three main aspects. Firstly, I will discuss the enlightening collaborative discussions. Secondly, I will share my contributions and learnings from the team projects. Lastly, I will reflect on various technical tasks done.</p>

				<h4>COLLABORATIVE DISCUSSION</h4>
				<p>Working on the collaborative discussion about the Data Collection Process and its implications in the context of big data analytics and the Internet of Things (IoT) was an enlightening experience. The discussion highlighted the critical issues of privacy and security in the context of IoT. Addressing privacy concerns, obtaining user consent, and establishing clear regulations are essential to building trust in IoT technologies. The discussion provided me with a comprehensive understanding of the opportunities and challenges in data wrangling, specifically related to big data and IoT. It emphasized the significance of data security, privacy, and ethical considerations when dealing with large datasets. I was able to critically analyse the limitations of IoT and the importance of finding solutions to address them.</p>
				<p>During the second collaborative discussion on Comparing Compliance Laws for personal data security, I faced challenges with complex legal language in the regulations. Understanding specific data security requirements demanded attention to detail. The General Data Protection Regulation (GDPR) and National Data Protection Act (NDPA) emphasized the need for robust security measures to protect personal data. Encryption and pseudonymisation techniques were crucial for data confidentiality and integrity. Exploring key principles in data protection was beneficial, deepening my understanding of data privacy laws' significance worldwide. It highlighted the importance of proactive security measures and staying updated with regulations.</p>

				<h4>TEAM PROJECTS</h4>
				<p>During the module, I had the opportunity to contribute to two significant projects, which were submitted in Units 6 and 11. In both projects, I played the role of a database engineer/developer and made substantial individual contributions to the team's work. In Unit 6, our team proposed a database design for the Hotel Management System (HMS) of Dreamland Manor. My contributions in this initial proposal primarily focused on conducting a comprehensive literature review to gather relevant information and best practices for designing an efficient and secure HMS. I also actively participated in brainstorming sessions, providing valuable ideas and insights that guided our decisions and ultimately a database proposal report. Additionally, I created the logical database model using the ER Model.</p>
				<p>As we progressed to Unit 11, our team's focus shifted towards implementing the proposed database design and writing the executive summary. In this final project, I took on the responsibility of populating the database with the dataset, which proved to be an immensely valuable experience. This task required applying various data extraction, exploration, cleaning, and modelling techniques that I had learned throughout the module. By doing so in a real-world context, I gained a deeper understanding of the practical significance and challenges of these techniques.</p>
				<p>Leveraging my technical expertise and extensive experience, I proposed and implemented appropriate solutions effectively. Ensuring accurate data insertion and creating a realistic testing environment demanded meticulous attention to detail. Reflecting on this experience, I can confidently say that the hands-on application of data extraction, exploration, cleaning, and modelling techniques has not only strengthened my technical skills but also enhanced my ability to tackle complex database engineering tasks. This project provided a bridge between theoretical knowledge and practical implementation, allowing me to become a more competent and confident data professional.</p>
				<p>Working on API Security for ReviewPro was a valuable experience, aligning with unit outcomes. We critically analysed data-wrangling problems, identified security issues, and proposed solutions like secure authentication, data encryption, and a web application firewall.</p>

				<h4>OTHER TECHNICAL WORK</h4>
				<p>During the process of creating the web scraping script, I realized the importance of properly identifying the target webpage and understanding its structure. This involved examining the HTML source code and identifying the specific elements that contained the desired data. While implementing the script, I became aware of the ethical considerations and legal implications surrounding web scraping. It's crucial to review and respect the terms of service of the targeted website, ensuring that the scraping activities comply with their guidelines. Additionally, being mindful of the frequency and volume of requests is important to avoid overloading the server and causing disruption. Overall, this exercise provided me with valuable hands-on experience in web scraping and reinforced the importance of understanding the target website, using appropriate tools, and considering ethical and legal aspects in the process.</p>
				<p>Throughout Unit 7, I found the task of constructing normalized tables and building a database to be highly relevant and valuable to my learning objectives. As someone aspiring to become a data professional, understanding how to transform a flat-file database model into a normalized one was crucial. In the first step, achieving the 1st Normal Form (1NF) by ensuring atomic values and removing repeating groups helped enhance data organization. The subsequent steps, particularly reaching the 3rd Normal Form (3NF) by addressing transitive dependencies, significantly improved data integrity and reduced redundancy. This hands-on experience allowed me to critically analyse data-wrangling problems and determine appropriate methodologies, tools, and techniques. The data build task further solidified my understanding of building a relational database model and its usability. By downloading and successfully executing the SQL script, I gained practical skills in database creation and evaluation. The entire unit helped me identify and manage challenges, security issues, risks, and limitations in data wrangling.</p>

				<h4>COMMUNICATION AND COLLABORATION</h4>
				<p>As a member of the development team, I recognized the importance of collaboration and open communication. I actively listened to my team members' ideas, respecting and considering their input valuable. This collaborative environment allowed us to leverage our collective strengths and achieve more than we could as individuals. I also demonstrated initiative in suggesting and implementing performance and penetration tests, which significantly contributed to the project's success. As the project progressed, I took on leadership roles in organising meetings, coordinating tasks, and moderating the review process. This experience enhanced my leadership and communication skills.</p>

				<h4>CONCLUSION</h4>
				<p>Professionally and personally, this module's impact has been substantial. It provided me with practical hands-on experience in database design and development, which aligns perfectly with my career aspirations. The real-world application of knowledge in the team project has boosted my confidence in handling similar projects in the future. Additionally, the teamwork experience has reinforced the value of collaboration, effective communication, and openness to feedback.</p>

				<h4>REFERENCE</h4>
				<p>Art. 32 GDPR – Security of processing - general data protection regulation (GDPR) (no date) General Data Protection Regulation (GDPR). Available at: <a href="https://gdpr-info.eu/art-32-gdpr/" target="_blank">https://gdpr-info.eu/art-32-gdpr/</a> (Accessed 10th July 2023).</p>
				<p>NDPC. Nigeria Data Protection Act, 2023. Available at: <a href="https://www.ndpb.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf" target="_blank">https://www.ndpb.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf</a> (Accessed 10th July 2023).</p>

				<h4>APPENDIX</h4>
				<p>GitHub Repository: <a href="https://github.com/samabos/UoE-BigData-Module" target="_blank">https://github.com/samabos/UoE-BigData-Module</a></p>
				<p>E-Portfolio Address: <a href="https://samabos.github.io/#/bigdata" target="_blank">https://samabos.github.io/#/bigdata</a></p>

			</div>
		</section>
    </div>
	</BigData>
);

BDReflection.propTypes = {};

BDReflection.defaultProps = {};

export default BDReflection;
