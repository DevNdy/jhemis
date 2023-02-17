<script lang="ts">
	export let userName: string;
</script>

<form>
	<div class="top">
		<h3>{userName}</h3>
		<i class="fa-solid fa-xmark" />
	</div>
	<div class="center">hello</div>
	<div class="bottom">
		<input type="text" placeholder="envoyer un message..." />
		<button><i class="fa-solid fa-paper-plane" /></button>
	</div>
</form>

<style lang="scss">
	form {
		height: 400px;
		width: 380px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
		right: 50px;
		border: 1px solid gray;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	.top {
		height: 40px;
		background-color: white;
		width: 380px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		h3 {
			margin-left: 10px;
			color: #aa7f2e;
		}

		i {
			margin-right: 5px;
			height: 20px;
			width: 20px;
			padding: 3px;
			background-color: #373435;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.center {
		background-color: white;
		margin: 3px;
		height: 100%;
	}

	.bottom {
		display: flex;
		flex-direction: row;

		input {
			height: 40px;
			width: 340px;
			border: 0.5px solid gray;
			padding-left: 5px;

			&:focus {
				outline-color: #bf9b58;
			}

			&::placeholder {
				font-style: italic;
			}
		}
		button {
			width: 40px;
			background-color: #373435;
			border: none;
			cursor: pointer;

			i {
				color: #aa7f2e;
			}

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
