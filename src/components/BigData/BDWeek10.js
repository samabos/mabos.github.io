import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import BigData from './BigData';




const BDWeek10 = () => (
	<BigData>
    <div id="main">
    <section id="two">
        <div class="inner">
            <header class="major">
                <h2>Unit 10: API Security Requirements</h2>
            </header>
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Identify and manage challenges, security issues and risks, limitations, and opportunities in data wrangling.</li>
                <li>Critically analyse data wrangling problems and determine appropriate methodologies, tools, and techniques (involving preparing, cleaning, exploring, creating, optimising and evaluating big data) to solve them.</li>
                <li>Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real life perspectives on team roles and organisation.</li>
            </ul>
            
            <header class="major">
                <h3>Artefacts</h3>
            </header>
            <p><strong>GitHub Repository address:</strong> <a href='https://github.com/samabos/UoE-BigData-Module/blob/main/API-Security-Requirements.md' target='blank'>https://github.com/samabos/UoE-BigData-Module/blob/main/API-Security-Requirements.md</a></p>
            <h4>Review-Pro-API Security Requirement</h4>

            
                    <p dir="auto">ReviewPro is a tool used by nearly all hotels in the hotel industry to analyse online guest reviews and other guest feedback to enhance guest satisfaction and online reputation. Their API allows developers to integrate ReviewPro's data and functionality into their own applications.</p>
                    <p dir="auto">Security Requirements Specification:</p>
                    <ul dir="auto">
                    <li>
                    <p dir="auto">Authentication: The ReviewPro API uses API keys for authenticating requests. These keys should be securely stored, never exposed publicly, and rotated periodically to prevent unauthorized access.</p>
                    </li>
                    <li>
                    <p dir="auto">Data Encryption: All communication between the client and the API should be encrypted using HTTPS to protect the data during transit and to guard against eavesdropping and man-in-the-middle attacks.</p>
                    </li>
                    <li>
                    <p dir="auto">Use a web application firewall: Implementing a WAF to help detect and block common web-based threats.</p>
                    </li>
                    <li>
                    <p dir="auto">Rate Limiting: API endpoints are among the growing list of DDoS targets. Thus, it is important to implement rate limiting to prevent abuse and potential denial-of-service (DoS) attacks. For example, setting a threshold above which subsequent requests will be rejected (for example, 10,000 requests per day per account) can prevent denial-of-service attacks.</p>
                    </li>
                    <li>
                    <p dir="auto">Input Validation: Thorough validation of all user inputs and API parameters should be enforced to prevent injection attacks and other forms of malicious input.</p>
                    </li>
                    <li>
                    <p dir="auto">Injection flaws (including SQL injection, NoSQL injection, and command injection) involve data that is sent to an interpreter from an untrusted source via a command or query. Attackers can send malicious data to trick the interpreter into executing dangerous commands or allow the attacker to access data without the necessary authorization.</p>
                    </li>
                    <li>
                    <p dir="auto">Secure Data Handling: Since the API handles data in formats like JSON and XML, secure practices for data parsing and serialization should be implemented to prevent data tampering or injection attacks.</p>
                    </li>
                    <li>
                    <p dir="auto">Logging and Monitoring: All API requests and responses should be logged and regularly audited for any suspicious activities. Implement an anomaly detection system to identify potential security threats and trigger alerts.</p>
                    </li>
                    <li>
                    <p dir="auto">Inadequate logging, monitoring, and incident response integration can be used by attackers to stay in a system longer, gain a stronger grip, and steal or destroy more data. Given that it often takes more than 200 days to identify a persistent threat and that breaches are frequently found by a third party, robust API monitoring is crucial.</p>
                    </li>
                    <li>
                    <p dir="auto">Access Control: Implement strong access control measures to ensure that users can only access and modify data that they're authorized to. A common practice is the principle of least privilege. This foundational security principle holds that subjects (users, processes, programs, systems, devices) be granted only the minimum necessary access to complete a stated function. It should be applied equally to APIs.</p>
                    </li>
                    <li>
                    <p dir="auto">Regular Security Audits and Updates: Conduct regular security audits to identify any potential vulnerabilities in the API. Patch and update any identified security risks promptly.</p>
                    </li>
                    </ul>
                    <p dir="auto">Adherence to these security requirements will help ensure that the ReviewPro API is securely handling data sharing, scraping, and connectivity between Python code and various file formats and management systems.</p>

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
                        <p>Working on the team to review the API Security Requirements for ReviewPro was a valuable learning experience, aligning with the unit's learning outcomes. We were tasked with critically analyzing data-wrangling problems related to API security and determining appropriate methodologies, tools, and techniques to address them. The artefact provided us with real-world security requirements that are essential for protecting sensitive data and ensuring the API's integrity and availability.</p>

                        <p>As a team, we identified various security issues in data wrangling. One of the key challenges was ensuring proper authentication using API keys and securely storing them to prevent unauthorized access. We also emphasized the importance of data encryption using HTTPS to protect data during transit and prevent eavesdropping and man-in-the-middle attacks. Also, proposing implementing a web application firewall was crucial to defend against common web-based threats and potential denial-of-service attacks.</p>

                        <p>Throughout the teamwork, we adopted a systematic approach, dividing tasks among team members and collaborating effectively on google docs. Everyone's contribution was valuable in analyzing the requirements, providing insights, and ensuring the accuracy and completeness of the final review. Our ability to work cohesively as a team enhanced the quality of the artefact.</p>
                     </div>
            </div>
        </section>
    </section>
    </div>
	</BigData>
);

BDWeek10.propTypes = {};

BDWeek10.defaultProps = {};

export default BDWeek10;
