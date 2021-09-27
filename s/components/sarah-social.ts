import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahSocialCss from "./sarah-social.css.js"
export class SarahSocial extends LitElement {
	static styles = sarahSocialCss

	render() {

		return html`
			<div>
				<a href=""><img src="/icons/facebook.jpg" /></a>
				<a href=""><img src="/icons/instagram.jpg" /></a>
				<a href=""><img src="/icons/youtube.jpg" /></a>
				<a href=""><img src="/icons/pinterest.jpeg" /></a>
			</div>
		`
	}
}
