<script lang="ts">
	import { deleteDoc, doc } from 'firebase/firestore';
	import { postsList } from '../../../../stores/dataUsers';
	import { db } from '../../../fb';
	export let data;
	const { product } = data;

	let editPost: boolean = false;

	const onClickDeletePost = async (id: string) => {
		await deleteDoc(doc(db, 'Posts', id));
	};
</script>

<main>
	<section>
		{#each $postsList as item}
			{#if item.idPost === product.postId}
				<div>
					<h3>
						Posté le : {item.date}
						<span
							><i
								on:click={() => (editPost = !editPost)}
								on:keypress
								class="fa-solid fa-pen iEdit "
							/>
							<i
								on:click={() => onClickDeletePost(item.idPost)}
								on:keypress
								class="fa-solid fa-trash iDelete"
							/></span
						>
					</h3>
					<img src={item.img} alt="post" />
					<p><span>Description:</span>{item.description}</p>
				</div>
				{#if editPost === true}
					<form>
						<h4>Edition du post:</h4>
						<input type="text" placeholder="Url image" />
						<textarea cols="30" rows="5" placeholder="Description du post" />
						<div>
							<button>valider</button>
						</div>
					</form>
				{/if}
			{/if}
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 1000;
		display: flex;
		flex-direction: column;
	}

	section {
		margin: 100px 0 0 300px;
		display: flex;
		flex-direction: row;
	}

	h3 {
		font-weight: 300;
		font-size: 15px;
		max-width: 400px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		i {
			margin: 0 5px 0 5px;
			background-color: #373435;
			color: white;
			padding: 8px;
			border-radius: 50%;
			cursor: pointer;
		}
		.iDelete:hover {
			background-color: red;
		}

		.iEdit:hover {
			background-color: #bf9b58;
		}
	}

	img {
		max-width: 600px;
		border-radius: 8px;
		margin: 15px 0 0 5px;
	}

	p {
		display: flex;
		flex-direction: column;
		color: rgb(104, 104, 104);
		span {
			text-decoration: underline;
			font-weight: 500;
		}
	}

	form {
		height: 230px;
		width: 410px;
		margin: 47px 0 0 30px;
		padding: 15px;
		border: 0.5px solid rgb(119, 117, 118);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h4 {
			font-weight: 500;
		}

		input {
			margin-top: 10px;
			padding-left: 5px;
			height: 35px;
			width: 403px;
			border-radius: 5px;
			border: #373435 0.5px solid;
		}

		textarea {
			margin-top: 5px;
			width: 400px;
			border-radius: 5px;
			border: #373435 0.5px solid;
			padding: 5px;
		}

		div {
			width: 100%;
			text-align: end;
			button {
				margin-top: 10px;
				background-color: #373435;
				color: white;
				border: none;
				font-size: 15px;
				padding: 3px 10px 3px 10px;
				border-radius: 5px;
				cursor: pointer;

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
</style>
