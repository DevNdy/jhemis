<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '../../routes/fb';
	import { authStore, usersList, userName, dateOfDay, generateId } from '../../stores/dataUsers';

	export let onClickCloseWindow: () => void;

	let description: string = '';
	let urlImg: string = '';

	const submitPost = async () => {
		try {
			await setDoc(doc(db, 'Posts', generateId), {
				date: dateOfDay,
				time: Date.now(),
				idPost: generateId,
				idUser: $authStore.uid,
				emailUserl: $authStore.email,
				description: description,
				img: urlImg,
				userName: $userName.name,
				avatar: $userName.avatar,
				like: []
			});
			description = '';
			urlImg = '';
			onClickCloseWindow();
		} catch (err) {
			console.log(err);
		}
	};
</script>

<form class="window" on:submit|preventDefault={submitPost}>
	<div class="top">
		<h3>Créer un post</h3>
		<i on:click={onClickCloseWindow} on:keypress class="fa-solid fa-xmark close" />
	</div>
	<div class="user">
		{#each $usersList as items}
			{#if items.id === $authStore.uid}
				<img src={items.avatar} alt="avatar" />
				<h5>{items.firstName + ' ' + items.lastName}</h5>
			{/if}
		{/each}
	</div>
	<textarea
		placeholder="Que voulez vous partager ?"
		id=""
		cols="30"
		rows="6"
		bind:value={description}
	/>
	<input type="text" placeholder="Url de votre image..." bind:value={urlImg} />
	<div class="btn">
		<button class="btnPost">Publier</button>
	</div>
</form>

<style lang="scss">
	.window {
		width: 600px;
		background-color: white;
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

		.close {
			margin: 10px;
			width: 20px;
			height: 20px;
			padding: 3px;
			border-radius: 50%;
			font-size: 16px;
			background-color: #373435;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
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
			border-radius: 50%;
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

	.btn {
		width: 100%;
		text-align: end;

		.btnPost {
			width: 100px;
			margin: 10px;
			padding: 3px 10px 3px 10px;
			font-size: 15px;
			border: none;
			border-radius: 5px;
		}
	}

	@media (max-width: 1080px) {
		.window {
			left: 15%;
		}
	}

	@media (max-width: 750px) {
		.window {
			left: 8%;
			width: 400px;
		}
	}

	@media (max-width: 450px) {
		.window {
			width: 350px;
			top: 100px;
			left: 5px;
		}
	}
</style>
