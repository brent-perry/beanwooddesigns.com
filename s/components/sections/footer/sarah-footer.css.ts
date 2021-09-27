import {css} from "lit"
export default css`
	section {
		margin-top: 10em;
		/* background-color: #f5d8acc0; */
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 3em;
	}

	a {
		text-decoration: none;
		color: #ffffff;
	}

	a, p {
		width: 100%;
	}

	a:hover {
		color: blue;
		cursor: pointer;
	}

	div {
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		width: 25%;
		text-align: center;
	}

	.copyright {
		/* background-color: #f5d8acc0; */
		text-align: center;
		width: 100%;
	}
`
