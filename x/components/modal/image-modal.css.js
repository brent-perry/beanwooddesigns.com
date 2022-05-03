import { css } from "lit";
export default css `
	:host([hidden]) {
		display: none;
	}

	img {
		position: absolute;
		height: 90%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	div {
		position: fixed;
		background-color: #000000d8;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 515px) {
		img {
			height: 35%;
		}
}
`;
//# sourceMappingURL=image-modal.css.js.map