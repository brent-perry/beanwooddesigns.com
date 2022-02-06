import {css} from "lit"
export default css`
	:host([hidden]) {
		display: none;
	}

	figure {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	span {
		cursor: pointer;
		transition: opacity 400ms;
	}

	a:hover img{
		box-shadow: none;
	}

	a:hover span{
		opacity: 1;
	}

	a:hover img{
		opacity: .6;
	}

	img {
		box-shadow: 0px 0px 8px 8px #888888;
		border: solid #000000 8px;
		height: 250px;
		width: 250px;
		border-radius: 25%;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		opacity: 0;
		position: absolute;
		text-decoration: none;
		font-size: 1.4em;
		z-index: 1;
	}

`
