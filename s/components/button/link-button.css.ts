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
		width: 300px;
		height: 300px;
		cursor: pointer;
		border: 2px solid #000000;
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
`
