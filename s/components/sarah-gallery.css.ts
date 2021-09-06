import {css} from "lit"
export default css`
	#images-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 2em;
		padding-bottom: 4em;
	}

	h1 {
		margin-top: 0;
		width: 100%;
		text-align: center;
	}

	.gallery-images {
		position: relative;
		outline: solid black 8px;
	}

	h2 {
		position: absolute;
		background-color: #d4cc9a;
		padding: .5em;
		bottom: -19px;
	}

	h2:hover {
		background-color: #f2e172;
		cursor: pointer;
	}

	#restoration>img, #restoration, #wood-art>img, #wood-art {
		height: 350px;
		width: 350px;
	}

	#furniture>img, #furniture {
		height: 700px;
		width: 700px;
	}

`
