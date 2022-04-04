import {EnlargeImage} from "./components/enlarge-image/enlarge-image.js"
import {LinkButton} from "./components/button/link-button.js"
import {ImageModal} from "./components/modal/image-modal.js"

customElements.define("image-modal", ImageModal)
customElements.define("enlarge-image", EnlargeImage)
customElements.define("link-button", LinkButton)

const modal: ImageModal = document.querySelector('image-modal')
const header = document.querySelector('header')
const enlargeImages = document.querySelectorAll<EnlargeImage>('enlarge-image')

for (const image of Array.from(enlargeImages))
	image.openModal = modal.open

modal.onUpdate = opened => {
	if (opened)
		header.setAttribute("hidden", "")
	else
		header.removeAttribute("hidden")
}
