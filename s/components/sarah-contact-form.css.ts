import {css} from "lit"
export default css`

form {
	display: flex;
	flex-wrap: wrap;
}

input[type=text], select, textarea {
	width: 100%;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-top: 6px;
	margin-bottom: 16px;
	resize: vertical;
	outline: 0;
	border-width: 0 0 2px;
	border-color: blue
}

input[type=submit] {
	background-color: #1f1e1e;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type=submit]:hover {
	background-color: #45a049;
}

input:focus {
	border-color: green
}

div {
	margin-left: auto;
	margin-right: auto;
}

form>input, form>div:last-child {
	width: 100%;
}

`
