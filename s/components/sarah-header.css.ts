import {css} from "lit"
export default css`
	h1, p {
		color: #000000;
	}

	.logo {
		width: 20%;
		background-color: #f5d8ac;
		padding: 1em;
		margin-left: 1em;
		z-index: 999;
		height: 10em
	}

	.header_photo {
		text-align: center;
		width: 50%;
	}

	img {
		height: 80vh;
	}

	nav {
		width: 20%;
		display: flex;
		flex-wrap: wrap;
		margin-right: 1em;
	}

	a {
		text-decoration: none;
		font-size: 2em;
		color: #ffffff;
		width: 100%;
		padding: .5em;
	}
	
	a:nth-child(odd) {
		text-align: end;
	}
`
