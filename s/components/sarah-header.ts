import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahHeaderCss from "./sarah-header.css.js"
export class SarahHeader extends LitElement {
	static styles = sarahHeaderCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div class="header-background">
				<div>
					<nav>
						<a href="/index">Home</a>
						<a href="/pages/wood-art">Wood Art</a>
						<a href="/pages/furniture">Furniture</a>
						<a href="/pages/games">Games</a>
						<a href="/index#about-link">About</a>
						<a href="/index#contact-link">Contact</a>
					</nav>
					<span>
						<h1>
							<a href="/index">Beanwood Design</a>
						</h1>
						<p>Cheesy line</p>
						<p>More Cheese</p>
					</span>
					<h2>&dArr;</h2>
				</div>
			</div>
		`
	}
}
