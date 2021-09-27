import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import sarahHeaderCss from "./sarah-header.css.js"
export class SarahHeader extends LitElement {
	static styles = sarahHeaderCss

	render() {

		return html`
			<div class="header-background">
				<div>
				<nav>
						<ol>
							<li>
								<a href="/index">Home</a>
							</li>
							<li>
								<a href="/index#about">About</a>
							</li>
							<li>
								<a href="/index#contact">Contact</a>
							</li>
							<li>
								<a href="/index#resume">Resume</a>
							</li>
							<li>
								<a href="/index#gallery">Gallery</a>
							</li>
							<li class="subnav">
								<span>Work</span>
								<div>
									<a href="/pages/wood-art">Wood Art</a>
									<a href="/pages/furniture">Furniture</a>
									<a href="/pages/games">Games</a>
								</div>
							</li>
						</ol>
					</nav>
					<span>
						<h1>
							<a href="/index">Beanwood Design</a>
						</h1>
						<p>Cheesy line</p>
						<p>More Cheese</p>
					</span>
				</div>
			</div>
		`
	}
}
