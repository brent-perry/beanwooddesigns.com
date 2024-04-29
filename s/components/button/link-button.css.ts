import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	figure {
		align-items: center;
		display: flex;
		justify-content: center;
		margin: 15px;
		padding: 0;
	}

	img {
		transition: all .4s ease-out;
		width: 200px;
		height: 200px;
		cursor: pointer;
		object-fit: cover;
	}

	a {
		text-decoration: none;
	}

	slot {
		font-weight: 300;
		display: flex;
		font-size: 1.4em;
		justify-content: center;
	}

	@media screen and (max-width: 886px) {
	
	img {
		height: 250px;
		width: 250px;
	}
}

	@media screen and (max-width: 670px) {
	
	img {
		height: 200px;
		width: 200px;
	}
}

@media screen and (max-width: 551px) {
	
	img {
		height: 180px;
		width: 180px;
	}
}

	@media screen and (max-width: 499px) {
	
	img {
		height: 250px;
		width: 250px;
	}
}
`
