import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahCarouselCss from "./sarah-carousel.css.js"
export class SarahCarousel extends LitElement {
	static styles = sarahCarouselCss

	@property({type: Boolean})
	isEmpty = true
	@property({type: Boolean})
	dots = true
	@property({type: Boolean})
	arrows = true
	@property({type: Number})
	count = 0
	@property({type: Boolean, reflect: true})
	initiallyHidden = true
	@property({type: Boolean})
	endOfSlide = true
	
	firstUpdated() {
		this.initiallyHidden = false
	}

	createRenderRoot() {
		super.createRenderRoot()
		this.shadowRoot.addEventListener("slotchange", (event:any) => {
			let imageCount = 0
			for(const node of event.target.assignedNodes())
				if(node.nodeName.toLowerCase() === "img")
					imageCount += 1
			this.isEmpty = imageCount === 0
			// this.isEmpty = imageCount === 0 ? true : false  **Ternary**
			this.updateSlides()
		})
		return this.shadowRoot
	}

	moveNext = () => {
			this.count += 1
			this.updateSlides()
	}

	movePrev = () => {
			this.count -= 1
			this.updateSlides()
	}

	moveDotsNav() {
		
	}

	updateSlides() {
		//stop from hiting end loop to other end
		const slot = this.shadowRoot.querySelector("slot")
		slot.assignedNodes()
			.filter(node => node.nodeName.toLowerCase() === "img")
			.forEach((node:HTMLElement, index) => {
				node.hidden = index !== this.count
			})
	}

	render() {

		return html`
				<div>
					<button @click=${this.movePrev}>&#8592;</button>
					<slot></slot>
					<button @click=${this.moveNext}>&#8594;</button>
				</div>
				<button @click=${this.moveDotsNav}>dots</button>
		`
	}
}
