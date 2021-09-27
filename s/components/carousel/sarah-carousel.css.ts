import {css} from "lit"
export default css`
	p {
		font-size: 40px;
	}

	::slotted(*), img {
		width: 700px;
		height: 700px;
	}

	div {
		margin-top: 6em;
		display: flex;
		justify-content: center;
	}
`
