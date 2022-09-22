import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = () => (
		<section id="contact" className="Contact">
			<div class="inner">
				<section>
					<form method="post" action="#">
						<div class="fields">
							<div class="field half">
								<label for="name">Name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div class="field half">
								<label for="email">Email</label>
								<input type="text" name="email" id="email" />
							</div>
							<div class="field">
								<label for="message">Message</label>
								<textarea name="message" id="message" rows="6"></textarea>
							</div>
						</div>
						<ul class="actions">
							<li><input type="submit" value="Send Message" class="primary" /></li>
							<li><input type="reset" value="Clear" /></li>
						</ul>
					</form>
				</section>
				<section class="split">
					<section>
						<div class="contact-method">
							<span class="icon solid alt fa-envelope"></span>
							<h3>Email</h3>
							<a href="#">samaborukoje@gmail.com</a>
						</div>
					</section>
					<section>
						<div class="contact-method">
							<span class="icon solid alt fa-phone"></span>
							<h3>Phone</h3>
							<span>(+234) 8131963441</span>
						</div>
					</section>
					<section>
						<div class="contact-method">
							<span class="icon solid alt fa-home"></span>
							<h3>Address</h3>
							<span>Abuja<br />
								FCT<br />
								Nigeria</span>
						</div>
					</section>
				</section>
			</div>
		</section>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
