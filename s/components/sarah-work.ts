import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahWorkCss from "./sarah-work.css.js"
export class SarahWork extends LitElement {
	static styles = sarahWorkCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div id="work-wrapper">
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a>Wood Art</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a>Furniture</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a>Restoration</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
			</div>
		`
	}
}
