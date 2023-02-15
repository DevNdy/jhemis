<form>
	<h4>Edition du post:</h4>
	<input type="text" placeholder="Url image" />
	<textarea cols="30" rows="5" placeholder="Description du post" />
	<div>
		<button>valider</button>
	</div>
</form>

<style lang="scss">
	form {
		height: 230px;
		width: 410px;
		margin: 47px 0 0 30px;
		padding: 15px;
		border: 0.5px solid rgb(119, 117, 118);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h4 {
			font-weight: 500;
		}

		input {
			margin-top: 10px;
			padding-left: 5px;
			height: 35px;
			width: 403px;
			border-radius: 5px;
			border: #373435 0.5px solid;
		}

		textarea {
			margin-top: 5px;
			width: 400px;
			border-radius: 5px;
			border: #373435 0.5px solid;
			padding: 5px;
		}

		div {
			width: 100%;
			text-align: end;
			button {
				margin-top: 10px;
				background-color: #373435;
				color: white;
				border: none;
				font-size: 15px;
				padding: 3px 10px 3px 10px;
				border-radius: 5px;
				cursor: pointer;

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
</style>
