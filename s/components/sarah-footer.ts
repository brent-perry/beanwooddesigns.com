import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahFooterCss from "./sarah-footer.css.js"
export class SarahFooter extends LitElement {
	static styles = sarahFooterCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div>
				<h2>Social Media</h2>
				<p>Facebook: Placeholder</p>
				<p>Instagram: Placeholder</p>
				<p>Youtube: Placeholder</p>
				<p>Pinterest: Placeholder</p>
			</div>
			<div>
				<h2>Contact</h2>
				<p>Phone: 444-444-4444</p>
				<p>Email: sarah@email.com</p>
			</div>
			<div>
				<h2>Location</h2>
				<p>Victoria</p>
				<p>B.C.</p>
				<p>Canada</p>
			</div>
			<div>
				<p>Copyright@ Sarah Perry</p>
			</div>
			<div>
				<h2>Work</h2>
				<p>Furniture</p>
				<p>Restoration</p>
				<p>Wood Art</p>
			</div>
		`
	}
}
