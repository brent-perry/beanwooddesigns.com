import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import {EnlargeDetails} from "../modal/image-modal"
import enlargeImageCss from "./enlarge-image.css.js"


export class EnlargeImage extends LitElement {
	static styles = enlargeImageCss

	@property({type: Boolean, reflect: true})
	initiallyHidden = true
	
	@property({type: String, reflect: true})
	src = ""

	@property({type: String, reflect: true})
	large = ""

	firstUpdated() {
		this.initiallyHidden = false
	}

	enlargeImage() {
		this.openModal({src: this.large})
	}

	openModal(details: EnlargeDetails) {
		throw new Error("Open Modal Not Implemented")
	}

	render() {

		return html`
			<div>
				<img
					@click=${this.enlargeImage}
					src="${this.src}"
					large="${this.large}"
				/>
			</div>
		`
	}
}
