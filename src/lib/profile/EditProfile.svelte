<script lang="ts">
	export let onSubmit: () => void;
	export let onClickClose: () => void;
	export let urlImg: string;
	export let firstNameEdit: string;
	export let lastNameEdit: string;
	export let descriptionEdit: string;
</script>

<div>
	<form on:submit|preventDefault={onSubmit}>
		<h3>
			Editer mon profile : <i on:click={onClickClose} on:keypress class="fa-solid fa-xmark" />
		</h3>
		<input type="text" placeholder="Url nouveau avatar" bind:value={urlImg} />
		<input type="text" placeholder="Prénom" bind:value={firstNameEdit} />
		<input type="text" placeholder="Nom" bind:value={lastNameEdit} />
		<textarea
			cols="20"
			rows="5"
			placeholder="Ajouter - Editer ma description"
			bind:value={descriptionEdit}
		/>
		<span>
			<button>sauvegarder</button>
		</span>
	</form>
</div>

<style lang="scss">
	div {
		background-color: white;
		border-radius: 8px;
		position: absolute;
		top: 200px;
		left: 45%;
		z-index: 100;
	}
	form {
		margin: 20px 20px 10px 20px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	h3 {
		margin-bottom: 10px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		i {
			height: 18px;
			width: 18px;
			background-color: #373435;
			color: white;
			padding: 3px;
			border-radius: 50%;
			font-size: 14px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	input {
		height: 35px;
		width: 300px;
		margin: 5px;
		border-radius: 5px;
		border: 0.5px solid #373435;
		padding-left: 5px;

		&:focus {
			outline-color: #bf9b58;
		}
	}

	textarea {
		margin: 5px 0 0 5px;
		border: none;
		width: 300px;
		font-size: 14px;
		border: 0.5px solid #373435;
		border-radius: 5px;
		padding-left: 5px;

		&:focus {
			outline-color: #bf9b58;
		}
	}

	span {
		width: 100%;
		text-align: end;
		button {
			margin: 10px 5px 0 0;
			background-color: #373435;
			color: white;
			border: #373435 1px solid;
			border-radius: 5px;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
