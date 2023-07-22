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

            <h4>Summary Post:</h4>
            <p>I appreciate your insightful comments on this subject. Both legislation clearly underlines the significance of putting in place suitable security measures to protect personal data, with an emphasis on confidentiality, integrity, and availability.</p>
            <p>Simon, Thank you for elaborating on the GDPR's pseudonymisation and encryption of personal data. Article 4(5) GDPR, refers to the process of replacing any details that could identify an individual with a pseudonym or a code (Mourby et al., 2018), ensuring that the individual cannot be directly identified by an unauthorised entity, whereas 'Encryption' is a method of converting data into a coded format using cryptographic algorithms to ensure that the original data becomes unreadable and can only be decrypted and accessed with a specific key or password. These techniques are crucial in enhancing data security by rendering data unintelligible to unauthorized individuals and safeguarding it from potential breaches.</p>
            <p>Hamid, your addition regarding the scope and applicability of both regulations sheds light on the significant differences. The GDPR's extraterritorial reach extends to organizations outside the EU, impacting entities worldwide that process the personal data of EU residents. On the other hand, the NDPA is primarily focused on data processing activities within Nigeria or by Nigerian entities.</p>
            <p>Both statutes have different legal bases for data processing, with the GDPR offering specific legal grounds such as contractual necessity and legitimate interests, whilst the NDPA accepts a variety of valid grounds for processing. The GDPR imposes hefty fines depending on a percentage of global annual revenue, which is notable given the various penalties and consequences for noncompliance. At the same time, depending on the gravity of the offence, the NDPA prescribes fines, punishments, or even imprisonment. Understanding the similarities and differences between the GDPR and the NDPA is critical for firms that operate across borders. Compliance with both sets of legislation assures personal data protection and indicates a commitment to privacy and data security.</p>
            
            <h4>Reference:</h4>
            <p>Art. 32 GDPR &ndash; Security of processing - general data protection regulation (GDPR)&nbsp;(no date)&nbsp;General Data Protection Regulation (GDPR). Available at: https://gdpr-info.eu/art-32-gdpr/ (Accessed 10th July 2023).</p>
            <p>NDPC. Nigeria Data Protection Act, 2023. Available at: <a href="https://www.ndpb.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf">https://www.ndpb.gov.ng/Files/Nigeria_Data_Protection_Act_2023.pdf</a> (Accessed 10th July 2023).</p>
            <p>Mourby, M. et al. (2018) &ldquo;Are &lsquo;pseudonymised&rsquo; data always personal data? Implications of the GDPR for administrative data research in the UK,&rdquo; Computer law and security report, 34(2), pp. 222&ndash;233. doi: 10.1016/j.clsr.2018.01.002.</p>
            <p>Bolognini, L. and Bistolfi, C. (2017) Pseudonymisation and impacts of Big (personal/anonymous) Data processing in the transition from the Directive 95/46/EC to the new EU General Data Protection Regulation. Computer law &amp; security review, 33(2), pp.171-181.</p>
            <p>One Trust Guidance (2021) Comparing Privacy Laws: GDPR vs Nigeria Data Protection Regulation. Available at: https://www.dataguidance.com/resource/comparing-privacy-laws-gdpr-v-nigerian-data, (Accessed 20th July 2023).</p>



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
                    <p>During the task of Comparing Compliance Laws relating to personal data security<br />One of the main challenges was the complexity of legal language and terminology used in the regulations. Understanding the specific requirements for securing personal data in these legislations demanded careful attention to detail. In terms of security issues and risks, the task highlighted the importance of data protection. Both the GDPR and the NDPA underscored the necessity for robust security measures to safeguard personal data from unauthorized access, breaches, or damage. This reinforced the significance of encryption and pseudonymisation techniques, which play a crucial role in ensuring data confidentiality and integrity.</p>
                    <p>On the positive side, the task provided opportunities to explore the key principles and best practices in data protection. Learning about the GDPR and the NDPA helped me gain a deeper understanding of the importance of data privacy laws and how they impact organisations worldwide. Also, it allowed me to recognise the value of adopting a proactive approach to data wrangling by implementing robust security measures and staying up-to-date with evolving regulations. The task served as a valuable learning experience, enabling me to identify and manage challenges, security issues, and risks in data wrangling.</p>
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
