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
				<p>Copyright@ Sarah Perry</p>
				<p>Phone: 444-444-4444</p>
				<p>Email: sarah@email.com</p>
				<p>Location: Langford B.C.</p>
			</div>
		`
	}
}
