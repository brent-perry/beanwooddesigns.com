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

const mq = window.matchMedia("(min-width: 700px)")
let menu = document.getElementById("menu")
let openMenuButton = document.getElementById("open_button")
let closeMenuButton = document.getElementById("close_button")
let openButtonWrapper = document.getElementById("open_button_wrapper")
const closeMenuLinkButtons = document.querySelectorAll(".close_menu_link_button")

closeMenuLinkButtons.forEach(el => el.addEventListener("click", () =>
{
	CloseMenu()
}))

window.addEventListener("resize", () => {
	CloseMenu()
	if(mq.matches)
	{
		menu.style.top = "0"
	}
})

function CloseMenu() {
	menu.style.top = "-100vh"
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
