<script lang="ts">
	import { authStore, usersList } from '../../stores/dataUsers';

	export let onClickCloseWindow: () => void;
</script>

<div class="window">
	<div class="top">
		<h3>Créer un post</h3>
		<button on:click={onClickCloseWindow}>X</button>
	</div>
	<div class="user">
		{#each $usersList as items}
			{#if items.id === $authStore.uid}
				<img src={items.avatar} alt="avatar" />
				<h5>{items.firstName + ' ' + items.lastName}</h5>
			{/if}
		{/each}
	</div>
	<textarea placeholder="Que voulez vous partager ?" id="" cols="30" rows="6" />
	<input type="text" placeholder="Url de votre image..." />
</div>

<style lang="scss">
	.window {
		height: 400px;
		width: 600px;
		background-color: white;
		border: 1px solid #373435;
		border-radius: 8px;
		position: absolute;
		top: 100px;
		left: 37%;
		z-index: 100;
		display: flex;
		flex-direction: column;
	}

	.top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 0.5px solid #bf9b58;

		h3 {
			margin: 10px;
			font-size: 25px;
			font-weight: 400;
		}

		button {
			margin: 10px;
			width: 28px;
			height: 28px;
			border-radius: 5px;
			border: none;
			background-color: #373435;
			color: white;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.user {
		display: flex;
		align-items: center;
		margin: 20px;

		h5 {
			font-size: 16px;
			margin-left: 10px;
			font-weight: 400;
			text-transform: capitalize;
		}

		img {
			height: 50px;
		}
	}

	textarea {
		border: none;
		margin: 20px;
		font-size: 16px;

		&:focus {
			outline-color: white;
		}
	}

	input {
		height: 40px;
		margin: 10px;
		padding-left: 5px;
		border-radius: 8px;
		border: 0.5px solid gray;
	}
</style>
