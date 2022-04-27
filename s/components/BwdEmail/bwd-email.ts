import {html, LitElement} from "lit"
import {property} from "lit/decorators.js"
import BwdEmailCss from "./bwd-email.css.js"

export class BwdEmail extends LitElement {
	static styles = BwdEmailCss

	@property({type: String})
	user: string

	@property({type: String})
	domain: string

	

	render() {
		const email = `${this.user}@${this.domain}`
		return html
			`
			<a  part=link 
				target=_blank 
				href="mailto:${email}" 
				title="Send email to ${email}">
				${email}
			</a>
			`
	}
}

