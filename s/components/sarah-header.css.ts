import {css} from "lit"
export default css`
	h1, p {
		color: #000000;
	}

	div {
		width: 15%;
		background-color: #c5b807;
		padding: 1em;
		margin-right: -3em;
		z-index: 999;
		height: 10em
	}

	nav {
		width: 15%;
		display: flex;
		flex-wrap: wrap;
	}

	img {
		height: 90vh;
		width: 70%;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		width: 100%;
		padding: 2em;
	}
	
	a:nth-child(odd) {
		text-align: end;
	}
`
