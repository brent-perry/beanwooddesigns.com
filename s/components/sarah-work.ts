import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahWorkCss from "./sarah-work.css.js"
export class SarahWork extends LitElement {
	static styles = sarahWorkCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div class="work-wrapper">
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a href="/pages/wood-art">Wood Art</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a href="/pages/furniture">Furniture</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
				<div>
					<a><img src="/img/placeholder.jpg" /></a>
					<a href="/pages/games">Games</a>
					<p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
				</div>
			</div>
		`
	}
}
