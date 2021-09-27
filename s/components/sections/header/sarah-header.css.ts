import {css} from "lit"
export default css`
	.header-background {
		background-image: url("/x/assets/images-large/backgrounds/header.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100vh;
	}

	.header-background div {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background-color: #00000066;
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
		position: relative;
		top: 0;
		width: 100%;
		position: fixed;
		background-color: #000000;
		padding: 1em;
		z-index: 4;
	}
	ol {
		display: flex;
		justify-content: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
		align-items: center;
	}

	span {
		position: relative;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 9em;
	}

	a:hover, .subnav span:hover {
		color: #f2e172;
	}

	.subnav>div {
		position: absolute;
	}

	.subnav a {
		font-size: 1em;
		width: 100%;
	}

	.subnav>div {
		display: none;
		margin-top: .5em;
		padding-left: .3em;
	}

	li:hover {
		cursor: pointer;
		color: #009bff;
	}

	.subnav:hover div{
		display: flex;
		flex-wrap: wrap;
	}

	.subnav span {
		margin: 0;
		background: none;
		border: none;
	}
	
	a, .subnav span {
		text-decoration: none;
		font-size: 1.4em;
		color: #ffffff;
		width: 100%;
		padding: .5em;
	}
`
