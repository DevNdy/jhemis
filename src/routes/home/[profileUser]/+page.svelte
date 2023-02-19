<script lang="ts">
	import SendMessage from '$lib/profile/user/SendMessage.svelte';
	import { usersList, postsList, authStore } from '../../../stores/dataUsers';

	export let data;
	const { product } = data;
	let openChatMessage: boolean = false;
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
		min-height: 100vh;
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
				border: none;

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

	@media (max-width: 1400px) {
		section {
			align-items: center;
			width: 920px;
		}

		h2 {
			width: 100%;
		}
	}

	@media (max-width: 1300px) {
		section {
			width: 800px;
		}

		.infos {
			img {
				height: 200px;
				width: 200px;
			}
		}

		.post {
			width: 600px;
		}
	}

	@media (max-width: 1080px) {
		section {
			width: 600px;
		}
		.infos {
			flex-direction: column;
			align-items: center;
		}

		.infosRight {
			align-items: center;
			button {
				margin-left: 160px;
			}
		}

		.post {
			width: 500px;
		}
	}

	@media (max-width: 900px) {
		section {
			margin-left: 0px;
		}

		h2 {
			text-align: end;
		}
	}

	@media (max-width: 650px) {
		section {
			margin-left: 0px;
			width: 350px;
		}

		h2 {
			margin: 15px 15px 0 0;
		}

		.infos {
			margin-top: 70px;

			img {
				height: 200px;
				width: 200px;
			}

			.infosRight {
				margin: 30px 0 0 0px;

				p {
					width: 300px;
				}

				button {
					margin-left: 90px;
				}
			}
		}

		h4 {
			margin-top: 50px;
		}

		.post {
			width: 330px;
		}
	}
</style>
