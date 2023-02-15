<script lang="ts">
	import ModalPost from '$lib/home/ModalPost.svelte';
	import PostWindow from '$lib/home/PostWindow.svelte';

	import {
		arrayRemove,
		arrayUnion,
		collection,
		deleteDoc,
		doc,
		onSnapshot,
		updateDoc
	} from 'firebase/firestore';
	import { authStore, usersList, userName, postsList } from '../../stores/dataUsers';
	import { db } from '../fb';

	let newPost = false;
	let islike: any;
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

	const colRef: any = collection(db, 'Posts');

	const getPosts = onSnapshot(colRef, (querySnapshot: any) => {
		let fbTodos: any = [];
		querySnapshot.forEach((doc: any) => {
			let todo = { ...doc.data(), id: doc.id };
			fbTodos = [todo, ...fbTodos];
			postsList.set(fbTodos);
		});
		posts = fbTodos;
	});

	const onClickLike = async (id: string, like: string[]) => {
		islike = like.includes($authStore.uid);
		try {
			await updateDoc(doc(db, 'Posts', id), {
				like: islike ? arrayRemove($authStore.uid) : arrayUnion($authStore.uid)
			});
		} catch (err) {
			console.log(err);
		}
	};

	const onClickDeletePost = async (id: string) => {
		await deleteDoc(doc(db, 'Posts', id));
	};
</script>

<main>
	<section>
		<div>
			<h2>Accueil</h2>
			<button on:click={() => (newPost = true)}
				><i class="fa-solid fa-feather" />Écrire un post</button
			>
		</div>
		{#each posts as item}
			<ModalPost
				avatar={item.avatar}
				nameUser={item.userName}
				date={item.date}
				description={item.description}
				img={item.img}
				idUser={item.idUser}
				nbrLike={item.like.length}
				onClickLike={() => onClickLike(item.idPost, item.like)}
				like={item.like.includes($authStore.uid)}
				onClickDelete={() => onClickDeletePost(item.idPost)}
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
		min-height: 90vh;
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
			background-color: #373435;
			border: 1px solid #373435;
			color: white;
			border-radius: 5px;
			cursor: pointer;

			i {
				margin-right: 10px;
				color: #bf9b58;
			}

			&:hover {
				opacity: 0.8;
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
