import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import linkButtonCss from "./link-button.css.js"

export interface Button {
	src: string
	href: string
}

export class LinkButton extends LitElement {
	static styles = linkButtonCss

	@property({type: Boolean, reflect: true})
	initiallyHidden = true

	@property({type: String, reflect: true})
	href = ""
	
	@property({type: String, reflect: true})
	src = ""

	@property({type: String, reflect: true})
	alt = ""
	
	firstUpdated() {
		this.initiallyHidden = false
	}
	
	render() {
		return html`
			<figure>
				<a href="${this.href}">
					<img src="${this.src}" alt="${this.alt}" />
					<span>
						<slot name="title"></slot>
					</span>
				</a>
			</figure>
		`
	}
}
