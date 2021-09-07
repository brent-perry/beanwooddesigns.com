import {css} from "lit"
export default css`
	.images-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 4em;
	}

	.gallery-images {
		position: relative;
		outline: solid #000000 8px;
		
	}

	a {
		position: absolute;
		background-color: #000000;
		padding: .5em;
		bottom: 0px;
		text-decoration: none;
		color: #ffffff;
		font-size: 1.5em;
	}

	a:hover {
		color: #ff69b4;
		cursor: pointer;
	}

	.games>img, .games, .wood-art>img, .wood-art {
		height: 350px;
		width: 350px;
	}

	.furniture>img, .furniture {
		height: 700px;
		width: 700px;
	}

`
