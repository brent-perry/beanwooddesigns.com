var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import linkButtonCss from "./link-button.css.js";
export class LinkButton extends LitElement {
    constructor() {
        super(...arguments);
        this.initiallyHidden = true;
        this.href = "";
        this.src = "";
        this.alt = "";
    }
    firstUpdated() {
        this.initiallyHidden = false;
    }
    render() {
        return html `
			<figure>
				<a href="${this.href}">
					<img src="${this.src}" alt="${this.alt}" />
					<span>
						<slot name="title"></slot>
					</span>
				</a>
			</figure>
		`;
    }
}
LinkButton.styles = linkButtonCss;
__decorate([
    property({ type: Boolean, reflect: true })
], LinkButton.prototype, "initiallyHidden", void 0);
__decorate([
    property({ type: String, reflect: true })
], LinkButton.prototype, "href", void 0);
__decorate([
    property({ type: String, reflect: true })
], LinkButton.prototype, "src", void 0);
__decorate([
    property({ type: String, reflect: true })
], LinkButton.prototype, "alt", void 0);
//# sourceMappingURL=link-button.js.map