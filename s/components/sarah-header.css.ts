import {css} from "lit"
export default css`
	div {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		background-image: url("/img/header.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		flex-wrap: wrap;
	}

	h1, p {
		color: #ffffff;
	}

	p {
		font-size: 1.5em;
	}

	nav {
		width: 100%;
		text-align: center;
		margin-top: 2em;
	}

	span {
		text-align: center;
		font-size: 1.5em;
		margin-left: auto;
		margin-right: auto;
	}

	a:hover {
		color: #f2e172;
	}

	a {
		text-decoration: none;
		font-size: 2em;
		color: #ffffff;
		width: 100%;
		padding: .5em;
	}

`
