import {css} from "lit"
export default css`
	#header-background {
		background-image: url("/img/header.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100vh;
	}

	#header-background div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background-color: #0000007a;
		width: 100%;
		height: 100vh;
	}

	h1, p {
		color: #ffffff;
	}

	h1 a {
		font-size: 1.2em;
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
