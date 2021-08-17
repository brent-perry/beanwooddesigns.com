import {css} from "lit"
export default css`
	h1, p {
		color: #000000;
	}

	div {
		background-color: #c5b807;
		padding: 1rem;
		margin-right: -3rem;
		z-index: 999;
		height: 10rem
	}

	nav {
		width: 20%;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}

	img {
		height: 80vh;
		width: 60%;
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
