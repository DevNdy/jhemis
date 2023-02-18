<script lang="ts">
	import SendMessage from '$lib/profile/user/SendMessage.svelte';
	import { addDoc, collection } from 'firebase/firestore';
	import { usersList, postsList, authStore, dateOfDay, userName } from '../../../stores/dataUsers';
	import { db } from '../../fb';

	export let data;
	const { product } = data;
	let openChatMessage = false;
	let message = '';

	const onSubmitMessage = async (id: string) => {
		try {
			await addDoc(collection(db, 'Messages'), {
				idSend: $authStore.uid,
				idReceive: id,
				time: Date.now(),
				date: dateOfDay,
				message: message,
				userName: $userName.name,
				avatarSend: $userName.avatar
			});
			message = '';
		} catch (err) {
			console.log(err);
		}
	};
</script>

<main>
	<section>
		{#each $usersList as item}
			{#if item.idProfile + item.firstName === product.profileUser}
				<h2>{item.firstName + ' ' + item.lastName}</h2>
				<div class="infos">
					<img src={item.avatar} alt="avatar" />
					<div class="infosRight">
						<h3>Membre depuis le {item.date}</h3>
						<p><span>Description :</span> {item.description}</p>
						{#if $authStore.uid !== item.id}
							<button on:click={() => (openChatMessage = true)}
								><i class="fa-solid fa-paper-plane" />message</button
							>
						{/if}
						{#if openChatMessage === true}
							<SendMessage
								userNameProfile={item.firstName}
								onClickClose={() => (openChatMessage = false)}
								onSubmitMessage={() => onSubmitMessage(item.id)}
								bind:message
								idUserReceive={item.id}
							/>
						{/if}
					</div>
				</div>
				<h4>Les posts de {item.firstName} :</h4>
				<div class="post">
					{#each $postsList as itemPost}
						{#if itemPost.idUser === item.id}
							<a href={`/home/profile/${itemPost.idPost}`}
								><img src={itemPost.img} alt="imgPosts" /></a
							>
						{/if}
					{/each}
				</div>
			{/if}
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		height: 100vh;
		width: 1100px;
		margin-left: 200px;
		display: flex;
		flex-direction: column;
	}

	h2 {
		margin-top: 35px;
		text-transform: capitalize;
		color: #bf9b58;
	}

	.infos {
		margin-top: 100px;
		display: flex;
		flex-direction: row;

		img {
			height: 300px;
			width: 300px;
			border-radius: 50%;
		}

		.infosRight {
			margin: 30px 0 0 50px;
			h3 {
				color: #5e5c5d;
				font-size: 14px;
				font-weight: 400;
				font-style: italic;
			}
			p {
				width: 500px;
				margin-top: 40px;
				color: #5e5c5d;
				display: flex;
				flex-direction: column;
				span {
					margin-bottom: 5px;
					text-decoration: underline;
					color: black;
				}
			}

			button {
				height: 35px;
				margin-top: 40px;
				padding: 3px 15px 3px 15px;
				font-size: 16px;
				background-color: #373435;
				color: white;
				border: none;
				border-radius: 5px;
				cursor: pointer;

				&:hover {
					opacity: 0.8;
				}

				i {
					margin-right: 15px;
					color: #bf9b58;
				}
			}
		}
	}

	h4 {
		margin-top: 50px;
		text-decoration: underline;
	}

	.post {
		margin-top: 10px;
		width: 900px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		img {
			height: 80px;
			border-radius: 5px;
		}
	}
</style>
