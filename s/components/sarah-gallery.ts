import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahGalleryCss from "./sarah-gallery.css.js"
export class SarahGallery extends LitElement {
	static styles = sarahGalleryCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div class="images-wrapper">
				<div>
					<div class="furniture gallery-images">
						<a href="/pages/furniture">Furniture</a>
						<img src="/img/furniture_1.jpeg" />
					</div>
				</div>
				<div>
					<div class="wood-art gallery-images">
						<a href="/pages/wood-art">Wood Art</a>
						<img src="/img/wood-art_1.jpeg" />
					</div>
					<div class="games gallery-images">
						<a href="/pages/games">Games</a>
						<img src="/img/games_1.jpeg" />
					</div>
				</div>
			</div>
		`
	}
}
