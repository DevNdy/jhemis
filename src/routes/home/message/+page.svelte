<script>
	import { authStore, dateOfDay, messagesList, usersMessagesList } from '../../../stores/dataUsers';
</script>

<main>
	<section>
		<h2>Messages</h2>
		<div class="listMess">
			{#each $usersMessagesList as item, index}
				{#if item.idSend !== $authStore.uid && item.idReceive === $authStore.uid}
					<div class="divElements">
						<i class="fa-solid fa-trash" />
						<img src={item.avatarSend} alt="avatar" />
						<div class="mess">
							<h3><span>de:</span> {item.userName} <span>le </span>{item.date}</h3>
							<p>{item.lastMessage.substr(0, 50)}...</p>
						</div>
					</div>
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
