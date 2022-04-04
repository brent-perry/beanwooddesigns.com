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
		box-shadow: 10px 10px 5px #cccccc;
		border: solid #ffffff 2px;
		height: 190px;
		width: 300px;
		background-repeat: no-repeat;
	}

	a {
		text-decoration: none;
	}

	slot {
		display: flex;
		justify-content: center;
	}
`
