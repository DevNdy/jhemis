<script lang="ts">
	import { authStore, usersList } from '../../stores/dataUsers';

	export let date: string;
	export let description: string;
	export let img: string;
	export let idUser: string;
	export let nbrLike: number;
	export let onClickLike: () => void;
	export let like: any;
	export let onClickDelete: () => void;
</script>

<div class="post">
	<div class="top">
		<div>
			{#each $usersList as item}
				{#if item.id === idUser}
					<img src={item.avatar} alt="avatar" />
					<div class="userName">
						<a href={`/home/${item.idProfile + item.firstName}`}
							>{item.firstName + ' ' + item.lastName}
						</a>
						<p>{date}</p>
					</div>
				{/if}
			{/each}
		</div>
		{#if $authStore.uid === idUser}
			<button on:click={onClickDelete} class="btnDelete"><i class="fa-solid fa-trash" /></button>
		{/if}
	</div>
	<p class="description">{description}</p>
	{#if img !== ''}
		<img class="imgPost" src={img} alt="post" />
	{/if}
	<div class="icons">
		<i
			on:click={onClickLike}
			on:keypress
			class={like ? 'fa-solid fa-heart iRed' : 'fa-regular fa-heart'}
		/>
		<p>{nbrLike}</p>
	</div>
</div>

<style lang="scss">
	.post {
		margin: 15px 0 15px 0;
		width: 700px;
		background-color: white;
		padding: 15px;
		border: 0.5px solid #d6d6d6;
		border-radius: 8px;
	}

	.top {
		display: flex;
		justify-content: space-between;

		div {
			display: flex;

			img {
				height: 40px;
				border-radius: 50%;
			}

			.userName {
				margin-left: 10px;
				display: flex;
				flex-direction: column;

				a {
					text-decoration: none;
					display: flex;
					flex-direction: column;
					text-transform: capitalize;
					font-weight: 700;
				}
				p {
					font-style: italic;
					color: rgb(163, 163, 163);
					font-size: 13px;
				}
			}
		}
		.btnDelete {
			height: 15px;
			width: 25px;
			border: none;
			background-color: white;
			font-size: 15px;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			i {
				color: #bf9b58;
				&:hover {
					color: red;
				}
			}
		}
	}

	.description {
		margin: 30px 0 10px 0;
	}

	.imgPost {
		width: 700px;
		border-radius: 8px;
	}

	.icons {
		margin-top: 5px;
		display: flex;
		align-items: center;

		.iRed {
			color: rgb(189, 8, 8);
		}

		i {
			margin-right: 10px;
			color: gray;
			font-size: 20px;
			cursor: pointer;
		}

		p {
			margin-top: 5px;
		}
	}

	@media (max-width: 1300px) {
		.post {
			width: 500px;
		}

		.imgPost {
			width: 500px;
		}
	}
</style>
