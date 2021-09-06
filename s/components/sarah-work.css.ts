import {css} from "lit"
export default css`
	#work-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 2em;
		text-align: center;
	}

	#work-wrapper div {
		display: flex;
		flex-wrap: wrap;
		width: 25%;
		margin: 2em;
	}

	div a, div p {
		width: 100%;
	}

	img {
		height: 100px;
		width: 100px;
		border-radius: 50%;
		border: solid 2px red;
	}

	a {
		font-weight: 900;
		margin: 1em;
	}

	p {
		margin: 1em;
	}

`
