import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahHeaderCss from "./sarah-header.css.js"
export class SarahHeader extends LitElement {
	static styles = sarahHeaderCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div id="header-background">
				<div>
					<nav>
						<a href="/pages/wood-art">Wood Art</a>
						<a href="/pages/furniture">Furniture</a>
						<a href="/pages/restoration">Restoration</a>
						<a href="#about">About</a>
						<a href="#contact">Contact</a>
					</nav>
					<span>
						<h1>
							<a href="/index">Sarah Perry Woodworking</a>
						</h1>
						<p>Cheesy line</p>
						<p>More Cheese</p>
					</span>
				</div>
			</div>
		`
	}
}
