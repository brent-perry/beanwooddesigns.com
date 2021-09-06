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
		outline: solid #ffffff 8px;
		
	}

	a {
		position: absolute;
		background-color: #ffffff;
		padding: .5em;
		bottom: 0px;
		text-decoration: none;
		color: #000000;
		font-size: 1.5em;
	}

	a:hover {
		color: #ff69b4;
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
