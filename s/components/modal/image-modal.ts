import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import imageModalCss from "./image-modal.css.js"

export interface EnlargeDetails {
	src: string
}

export class ImageModal extends LitElement {
	static styles = imageModalCss

	@property({type: Object})
	enlargeDetails: EnlargeDetails

	close() {
		this.enlargeDetails = undefined
		this.onUpdate(false)
	}

	onUpdate(opened: boolean) {}

	open = (details: EnlargeDetails) => {
		this.enlargeDetails = details
		this.onUpdate(true)
	}

	render() {
		return (this.enlargeDetails)
			? html`
				<div @click=${this.close}>
					<img src="${this.enlargeDetails.src}"/>
				</div>
			`
			: null
	}
}
