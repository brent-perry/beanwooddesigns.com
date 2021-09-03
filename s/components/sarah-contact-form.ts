import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahContactFormCss from "./sarah-contact-form.css.js"
export class SarahContactForm extends LitElement {
	static styles = sarahContactFormCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div id="contact-wrapper">
				<form action="">
					<div>
						<label for="fname">First Name</label>
						<input type="text" id="fname" name="firstname" placeholder="Your name..">
					</div>
					<div>
						<label for="lname">Last Name</label>
						<input type="text" id="lname" name="lastname" placeholder="Your last name..">
					</div>
					<div>
						<label for="phone">Phone Number</label>
						<input type="text" id="phone" name="phone" placeholder="Your phone number..">
					</div>
					<div>
						<label for="email">Email</label>
						<input type="text" id="email" name="email" placeholder="Your email..">
					</div>
					<div>
						<label for="city">City</label>
						<select id="city" name="city">
						<option value="victoria">Victoria</option>
						<option value="langford">Langford</option>
						<option value="colwood">Colwood</option>
						<option value="saanich">Saanich</option>
						<option value="esquimalt">Esquimalt</option>
						<option value="oak_bay">Oak Bay</option>
						</select>
					</div>
					<div>
						<label for="subject">How can I help you?</label>
						<textarea id="subject" name="subject" placeholder="Details..."></textarea>
					</div>
					<div>
						<input type="submit" value="Submit">
					</div>
				</form>
			</div>
		`
	}
}
