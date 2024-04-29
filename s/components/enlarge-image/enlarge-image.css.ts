import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}
	
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div:hover img {
		opacity: .4;
		cursor: pointer;
	}

	img {
		transition: all .4s ease-out;
		width: 200px;
		height: 200px;
		cursor: pointer;
		border: 2px solid #000000;
		object-fit: cover;
	}
	
	@media screen and (max-width: 768px) {
	
	img {
		height: 250px;
		width: 250px;
	}
	
}

	@media screen and (max-width: 645px) {
	
	img {
		height: 200px;
		width: 200px;
	}
}

	@media screen and (max-width: 499px) {
	
	img {
		height: 250px;
		width: 250px;
	}
}
	`
