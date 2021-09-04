import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahHeaderCss from "./sarah-header.css.js"
export class SarahHeader extends LitElement {
	static styles = sarahHeaderCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div class="logo">
				<h1>SP</h1>
				<p>Woodworking | Design</p>
			</div>
			<div class="header_photo">
				<img src="/img/s.w.w.a_sarah_header.jpeg"/>
			</div>
			<nav>
				<a target="_blank" href="/pages/wood-art">Wood Art</a>
				<a target="_blank" href="/pages/furniture">Furniture</a>
				<a target="_blank" href="/pages/restoration">Restoration</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
		`
	}
}
