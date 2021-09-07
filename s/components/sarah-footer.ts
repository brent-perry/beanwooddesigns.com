import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahFooterCss from "./sarah-footer.css.js"
export class SarahFooter extends LitElement {
	static styles = sarahFooterCss

	@property({type: Boolean})
	isEmpty = true

	render() {

		return html`
			<section>
				<div>
					<h2>Social Media</h2>
					<a>Facebook: Placeholder</a>
					<a>Instagram: Placeholder</a>
					<a>Youtube: Placeholder</a>
					<a>Pinterest: Placeholder</a>
				</div>
				<div>
					<h2>Contact</h2>
					<a href="/index#contact-link">Contact</a>
					<a href="/index#about-link">About</a>
					<a>Phone: 444-444-4444</a>
					<a>Email: sarah@email.com</a>
				</div>
				<div>
					<h2>Location</h2>
					<p>Victoria</p>
					<p>B.C.</p>
					<p>Canada</p>
				</div>
				<div>
					<h2>Work</h2>
					<a href="/pages/furniture">Furniture</a>
					<a href="/pages/games">Games</a>
					<a href="/pages/wood-art">Wood Art</a>
				</div>
			</section>
			<div class="copyright">
				<p>Copyright@ Sarah Perry</p>
			</div>
		`
	}
}
