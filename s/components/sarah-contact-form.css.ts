import {css} from "lit"
export default css`

#contact-wrapper {
	width: 70%;
}

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
}

input[type=submit] {
	background-color: #d4cc9a;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type=submit]:hover {
	background-color: #f2e172;
}

input:focus {
	border-color: none;
}

div {
	padding: 5em;
	margin-left: auto;
	margin-right: auto;
}

form div {
	padding: 1em;
	flex-grow: 1;
}

form div:nth-child(7) {
	width: 100%;
}

`
