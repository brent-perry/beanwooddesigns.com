import {SarahCarousel} from "./components/carousel/sarah-carousel.js"
import {SarahHeader} from "./components/sections/header/sarah-header.js"
import {SarahFooter} from "./components/sections/footer/sarah-footer.js"
import {SarahContactForm} from "./components/contact/sarah-contact-form.js"
import {LinkButton} from "./components/button/link-button.js"

customElements.define("sarah-carousel", SarahCarousel)
customElements.define("sarah-header", SarahHeader)
customElements.define("sarah-footer", SarahFooter)
customElements.define("sarah-contact-form", SarahContactForm)
customElements.define("link-button", LinkButton)
