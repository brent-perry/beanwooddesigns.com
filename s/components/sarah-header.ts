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
				<nav>
					<a target="_blank" href="/pages/wood-art">Wood Art</a>
					<a target="_blank" href="/pages/furniture">Furniture</a>
					<a target="_blank" href="/pages/restoration">Restoration</a>
					<a href="#about">About</a>
					<a href="#contact">Contact</a>
				</nav>
				<span>
					<h1>Sarah Perry Woodworking</h1>
					<p>Cheesy line</p>
					<p>More Cheese</p>
				</span>
			</div>
		`
	}
}
