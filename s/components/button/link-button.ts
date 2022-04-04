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
	
	firstUpdated() {
		this.initiallyHidden = false
	}
	
	render() {
		return html`
			<figure>
				<a href="${this.href}">
					<img src="${this.src}" />
					<span>
						<slot name="title"></slot>
					</span>
				</a>
			</figure>
		`
	}
}
