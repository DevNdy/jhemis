<script lang="ts">
	import { authStore, messagesList } from '../../../stores/dataUsers';

	export let userNameProfile: string;
	export let onClickClose: () => void;
	export let onSubmitMessage: () => void;
	export let message: string;
	export let idUserReceive: string;
</script>

<form on:submit|preventDefault={onSubmitMessage}>
	<div class="top">
		<h3>{userNameProfile}</h3>
		<i on:click={onClickClose} on:keypress class="fa-solid fa-xmark" />
	</div>
	<div class="center">
		{#each $messagesList as item}
			{#if item.date !== item.date}
				<h4>{item.date}</h4>
			{/if}
			{#if item.idSend === $authStore.uid && item.idReceive === idUserReceive}
				<div class="send">
					<p>{item.message}</p>
				</div>
			{/if}
			{#if item.idReceive === $authStore.uid && item.idSend === idUserReceive}
				<div class="receive">
					<p>{item.message}</p>
				</div>
			{/if}
		{/each}
	</div>
	<div class="bottom">
		<input type="text" placeholder="envoyer un message..." bind:value={message} />
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
		height: 50px;
		background-color: white;
		width: 380px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		z-index: 100;

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
		margin: 5px 3px 3px 3px;
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		transform: rotate(180deg);

		.send {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			transform: rotate(180deg);
			p {
				max-width: 200px;
				padding: 5px 10px 5px 10px;
				border-radius: 12px;
				margin: 5px;
				background-color: #373435;
				color: white;
			}
		}

		.receive {
			transform: rotate(180deg);
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			p {
				max-width: 200px;
				padding: 5px 10px 5px 10px;
				border-radius: 12px;
				margin: 5px;
				background-color: #aa7f2e;
				color: white;
			}
		}
	}

	.bottom {
		display: flex;
		flex-direction: row;

		input {
			height: 40px;
			width: 332px;
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
