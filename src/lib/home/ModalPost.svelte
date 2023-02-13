<script lang="ts">
	import { authStore, usersList, userName } from '../../stores/dataUsers';

	export let avatar: string;
	export let nameUser: string;
	export let date: string;
	export let description: string;
	export let img: string;
	export let idUser: string;
</script>

<div class="post">
	<div class="top">
		<div>
			<img src={avatar} alt="avatar" />
			<p>{nameUser} <span>{date}</span></p>
		</div>
		{#if $authStore.uid === idUser}
			<button class="btnParams">...</button>
		{/if}
	</div>
	<p class="description">{description}</p>
	<img class="imgPost" src={img} alt="post" />
</div>

<style lang="scss">
	.post {
		margin-top: 30px;
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
			}

			p {
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				text-transform: capitalize;
				font-weight: 700;

				span {
					color: rgb(163, 163, 163);
					font-size: 13px;
				}
			}
		}
		.btnParams {
			height: 15px;
			width: 25px;
			border: none;
			background-color: white;
			color: #bf9b58;
			font-size: 22px;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.description {
		margin: 30px 0 10px 0;
	}

	.imgPost {
		width: 700px;
		border-radius: 8px;
	}
</style>
