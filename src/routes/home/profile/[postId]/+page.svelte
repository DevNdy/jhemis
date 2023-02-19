<script lang="ts">
	import FormEditPost from '$lib/postPage/FormEditPost.svelte';
	import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
	import { postsList, authStore } from '../../../../stores/dataUsers';
	import { db } from '../../../fb';
	export let data;
	const { product } = data;

	let editPost: boolean = false;
	let urlImg: string = '';
	let description: string = '';

	const onClickDeletePost = async (id: string) => {
		await deleteDoc(doc(db, 'Posts', id));
	};

	const onSubmitEditPost = async (id: string, img: string, descriptionPost: string) => {
		try {
			await updateDoc(doc(db, 'Posts', id), {
				img: urlImg === '' ? img : urlImg,
				description: description === '' ? descriptionPost : description
			});
			urlImg = '';
			description = '';
		} catch (err) {
			console.log(err);
		}
	};
</script>

<main>
	<section>
		{#each $postsList as item}
			{#if item.idPost === product.postId}
				<div>
					<h3>
						Posté le {item.date}
						{#if item.idUser === $authStore.uid}
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
						{/if}
					</h3>
					<img src={item.img} alt="post" />
					<h5><span><i class="fa-solid fa-heart" />Like:</span> {item.like.length}</h5>
					<p><span>Description:</span>{item.description}</p>
				</div>
				{#if editPost === true}
					<FormEditPost
						onSubmit={() => onSubmitEditPost(item.idPost, item.img, item.description)}
						bind:urlImg
						bind:description
					/>
				{/if}
			{/if}
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
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
		font-style: italic;
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

	h5 {
		font-weight: 300;
		font-size: 15px;
		margin: 10px 0 10px 0;

		span {
			font-weight: 600;

			i {
				margin-right: 5px;
				color: #bf9b58;
			}
		}
	}

	p {
		width: 500px;
		display: flex;
		flex-direction: column;
		color: rgb(104, 104, 104);
		span {
			text-decoration: underline;
			font-weight: 500;
		}
	}

	@media (max-width: 1400px) {
		section {
			background-color: red;
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 1300px) {
	}

	@media (max-width: 1080px) {
		section {
			background-color: blue;
		}

		img {
			max-width: 400px;
		}

		p {
			width: 400px;
		}
	}

	@media (max-width: 930px) {
		section {
			margin-left: 0px;
			background-color: white;
		}
	}

	@media (max-width: 550px) {
		img {
			max-width: 320px;
		}

		p {
			width: 320px;
		}
	}
</style>
