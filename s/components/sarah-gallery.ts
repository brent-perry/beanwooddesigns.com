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
		<h1>Type Of Work</h1>
				<div>
					<div id="furniture" class="gallery-images">
						<h2>Furniture</h2>
						<img src="/img/s.w.w.a_desk.jpeg" />
					</div>
				</div>
				<div>
					<div id="wood-art" class="gallery-images">
						<h2>Wood Art</h2>
						<img src="/img/s.w.w.a_frame.jpeg" />
					</div>
					<div id="restoration" class="gallery-images">
						<h2>Restoration</h2>
						<img src="/img/s.w.w.a_tray.jpeg" />
					</div>
				</div>
			</div>
		`
	}
}
