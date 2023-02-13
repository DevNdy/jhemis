<script lang="ts">
	import ModalPost from '$lib/home/ModalPost.svelte';
	import PostWindow from '$lib/home/PostWindow.svelte';
	import NavBar from '$lib/navbar/NavBar.svelte';
	import { collection, getDocs, orderBy, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { authStore, usersList, userName, postsList } from '../../stores/dataUsers';
	import { db } from '../fb';

	let newPost = false;
	let posts: any = [];

	//récup userName & avatar
	$: $usersList.filter((e: any) =>
		e.id === $authStore.uid
			? userName.set({
					name: e.firstName + ' ' + e.lastName,
					avatar: e.avatar
			  })
			: ''
	);

	onMount(async () => {
		try {
			const q = query(collection(db, 'Posts'), orderBy('time', 'desc'));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				posts = [...posts, doc.data()];
				postsList.set(posts);
			});
		} catch (err) {
			console.log(err);
		}
	});
</script>

<main>
	<NavBar />
	<section>
		<div>
			<h2>Accueil</h2>
			<button on:click={() => (newPost = true)}
				><i class="fa-solid fa-feather" />Écrire un post</button
			>
		</div>
		{#each $postsList as item}
			<ModalPost
				avatar={item.avatar}
				nameUser={item.userName}
				date={item.date}
				description={item.description}
				img={item.img}
				idUser={item.idUser}
			/>
		{/each}
		{#if newPost === true}
			<PostWindow onClickCloseWindow={() => (newPost = false)} />
			<div class="filterPage" />
		{/if}
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
		margin: 35px 0 0 250px;
		min-height: 100vh;
		width: 1100px;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

		button {
			height: 40px;
			padding: 3px 10px 3px 10px;
			background-color: white;
			border: 1px solid #373435;
			color: #373435;
			border-radius: 5px;
			cursor: pointer;

			i {
				margin-right: 10px;
				color: #bf9b58;
			}

			&:hover {
				background-color: #373435;
				color: white;
			}
		}
	}

	.filterPage {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(55, 52, 53, 0.805);
		z-index: 10;
	}
</style>
