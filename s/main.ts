import {EnlargeImage} from "./components/enlarge-image/enlarge-image.js"
import {LinkButton} from "./components/button/link-button.js"
import {ImageModal} from "./components/modal/image-modal.js"
import {BwdEmail} from "./components/BwdEmail/bwd-email.js"

customElements.define("image-modal", ImageModal)
customElements.define("enlarge-image", EnlargeImage)
customElements.define("link-button", LinkButton)
customElements.define("bwd-email", BwdEmail)

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

const mq = window.matchMedia("(min-width: 700px)")
const menu = document.getElementById("menu")
const openMenuButton = document.getElementById("open_button")
const closeMenuButton = document.getElementById("close_button")
const openButtonWrapper = document.getElementById("open_button_wrapper")
const closeMenuLinkButtons = document.querySelectorAll(".close_menu_link_button")
const openSubNav = document.querySelector(".open-sub-nav")
const subNavContents = document.querySelector(".sub-nav-contents")
closeMenuLinkButtons.forEach(el => el.addEventListener("click", () => {
	CloseMenu()
}))

window.addEventListener("resize", () => {
	CloseMenu()
	if (mq.matches) {
		menu.style.top = "0"
	}
})

function CloseMenu() {
	menu.style.top = "-110vh"
	openButtonWrapper.style.zIndex = "999"
	closeMenuButton.style.display = "none"
}

function OpenMenu() {
	menu.style.top = "0"
	openButtonWrapper.style.zIndex = "0"
	closeMenuButton.style.display = "block"
}

openMenuButton.addEventListener("click", () => {
	OpenMenu()
})

closeMenuButton.addEventListener("click", () => {
	CloseMenu()
})

function OpenSubNav() {
	if(subNavContents.classList.contains("show"))
	subNavContents.classList.remove("show")
	else
	subNavContents.classList.add("show")
}

openSubNav.addEventListener("click", () => {
	OpenSubNav()
})
