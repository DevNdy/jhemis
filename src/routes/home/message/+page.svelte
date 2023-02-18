<script lang="ts">
	import SendMessage from '$lib/profile/user/SendMessage.svelte';
	import { deleteDoc, doc } from 'firebase/firestore';
	import { authStore, usersMessagesList } from '../../../stores/dataUsers';
	import { db } from '../../fb';

	let openChatMessage: boolean = false;
	let userNameSelect: string = '';

	const onClickUserMessage = (userName: string) => {
		openChatMessage = true;
		userNameSelect = userName;
	};

	const deleteMessage = async (id: string) => {
		try {
			await deleteDoc(doc(db, 'UsersMessage', id));
			openChatMessage = false;
		} catch (err) {
			console.log(err);
		}
	};
</script>

<main>
	<section>
		<h2>Messages</h2>
		<div class="listMess">
			{#each $usersMessagesList as item}
				{#if item.idSend !== $authStore.uid && item.idReceive === $authStore.uid}
					<div class="divElements" on:click={() => onClickUserMessage(item.userName)} on:keypress>
						<i
							on:click={() => deleteMessage(item.idSend + item.idReceive)}
							on:keypress
							class="fa-solid fa-trash"
						/>
						<img src={item.avatarSend} alt="avatar" />
						<div class="mess">
							<h3><span>de:</span> {item.userName} <span>le </span>{item.date}</h3>
							<p>{item.lastMessage.substr(0, 50)}...</p>
						</div>
					</div>
					{#if openChatMessage === true && item.userName === userNameSelect}
						<SendMessage
							userNameProfile={item.userName}
							onClickClose={() => (openChatMessage = false)}
							idUserReceive={item.idSend}
						/>
					{/if}
				{/if}
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 1100px;
		margin: 35px 0 0 200px;
		height: 100vh;
	}

	.listMess {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
	}

	.divElements {
		width: 500px;
		margin: 20px;
		display: flex;
		align-items: center;
		cursor: pointer;
		img {
			height: 50px;
			border-radius: 50%;
		}

		.mess {
			width: 350px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 20px;

			h3 {
				color: #bf9b58;
				font-weight: 400;
				font-size: 16px;

				span {
					font-weight: 800;
				}
			}

			p {
				max-width: 350px;
				color: gray;
				font-size: 14px;
			}
		}
	}

	i {
		margin-right: 10px;
		font-size: 14px;
		color: #373435;
		cursor: pointer;
		&:hover {
			color: red;
		}
	}
</style>
