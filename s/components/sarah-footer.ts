import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahFooterCss from "./sarah-footer.css.js"
export class SarahFooter extends LitElement {
	static styles = sarahFooterCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<p>Copyright sarahperry</p>
		`
	}
}
