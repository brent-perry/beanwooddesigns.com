import {SarahCarousel} from "./components/carousel/sarah-carousel.js"
import {SarahHeader} from "./components/sections/header/sarah-header.js"
import {SarahFooter} from "./components/sections/footer/sarah-footer.js"
import {SarahContactForm} from "./components/sarah-contact-form.js"
import {SarahSocial} from "./components/sarah-social.js"
import {SarahWork} from "./components/sarah-work.js"
import {SarahGallery} from "./components/sarah-gallery.js"
import {LinkButton} from "./components/button/link-button.js"
import {EnlargeImage} from "./components/enlarge-image.js"
import {ImageModal} from "./components/modal/image-modal.js"

customElements.define("sarah-carousel", SarahCarousel)
customElements.define("sarah-header", SarahHeader)
customElements.define("sarah-footer", SarahFooter)
customElements.define("sarah-contact-form", SarahContactForm)
customElements.define("sarah-social", SarahSocial)
customElements.define("sarah-work", SarahWork)
customElements.define("sarah-gallery", SarahGallery)
customElements.define("image-modal", ImageModal)
customElements.define("link-button", LinkButton)
customElements.define("enlarge-image", EnlargeImage)


const modal: ImageModal = document.querySelector('image-modal')
const header: SarahHeader = document.querySelector('sarah-header')
const enlargeImages = document.querySelectorAll<EnlargeImage>('enlarge-image')

for (const image of Array.from(enlargeImages))
	image.openModal = modal.open

modal.onUpdate = opened => {
	if (opened)
		header.setAttribute("hidden", "")
	else
		header.removeAttribute("hidden")
}
