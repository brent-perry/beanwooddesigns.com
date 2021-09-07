import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahGalleryCss from "./sarah-gallery.css.js"
export class SarahGallery extends LitElement {
	static styles = sarahGalleryCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<div id="images-wrapper">
				<div>
					<div id="furniture" class="gallery-images">
						<a href="/pages/furniture">Furniture</a>
						<img src="/img/s.w.w.a_desk.jpeg" />
					</div>
				</div>
				<div>
					<div id="wood-art" class="gallery-images">
						<a href="/pages/wood-art">Wood Art</a>
						<img src="/img/s.w.w.a_frame.jpeg" />
					</div>
					<div id="restoration" class="gallery-images">
						<a href="/pages/restoration">Restoration</a>
						<img src="/img/s.w.w.a_tray.jpeg" />
					</div>
				</div>
			</div>
		`
	}
}
