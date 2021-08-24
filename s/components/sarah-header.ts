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
			<img src="/img/sarah.w.w.jpeg"/>
			<nav>
				<a href="#wood-art">Wood Art</a>
				<a href="#furniture">Furniture</a>
				<a href="#restoration">Restoration</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
		`
	}
}
