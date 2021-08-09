import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahHeaderCss from "./sarah-header.css.js"
export class SarahHeader extends LitElement {
	static styles = sarahHeaderCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div>
				<h1>SP</h1>
				<p>Woodworking | Design</p>
			</div>
		`
	}
}
