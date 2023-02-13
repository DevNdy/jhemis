<script lang="ts">
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { collection, getDocs, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { auth, db } from '../../routes/fb';
	import { authStore } from '../../stores/dataUsers';

	let users: any = [];

	let email;

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((err) => console.log(err));
	};

	onMount(async () => {
		try {
			const q = query(collection(db, 'Users'));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				users = [...users, doc.data()];
			});
		} catch (err) {
			console.log(err);
		}
	});
</script>

<header>
	<div>
		<img src="./logoSimple.png" alt="logo" />
		<h2><span>J</span>hémis</h2>
	</div>

	{#each users as item}
		{#if item.id === $authStore.uid}
			<div class="profil">
				<img class="avatar" src={item.avatar} alt="avatar" />
				<h3>{item.firstName}</h3>
			</div>
		{/if}
	{/each}

	<ul>
		<li><i class="fa-solid fa-house" />Accueil</li>
		<li><i class="fa-solid fa-globe" />News</li>
		<li><i class="fa-solid fa-message" />Messages</li>
		<li><i class="fa-solid fa-circle-user" />Mon compte</li>
	</ul>

	<button on:click={signOutUser}>se déconnecter</button>
</header>

<style lang="scss">
	header {
		width: 230px;
		height: 100vh;
		position: fixed;
		left: 0;
		background-color: white;
		border-right: 0.5px solid #ababab;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	div {
		margin-top: 20px;
		display: flex;
		align-items: center;

		h2 {
			margin-top: 8px;
		}
		span {
			color: #bf9b58;
			font-size: 30px;
		}

		img {
			margin-left: 12px;
			height: 50px;
		}
	}

	.profil {
		margin-top: 100px;
		width: 200px;
		display: flex;
		align-items: center;

		h3 {
			margin: 8px 0 0 10px;
			color: black;
			font-weight: 400;
			font-size: 16px;
			text-transform: capitalize;
		}

		.avatar {
			margin-left: 20px;
			height: 45px;
		}
	}

	ul {
		margin-top: 60px;
		width: 230px;

		li {
			height: 60px;
			width: 225px;
			list-style: none;
			color: #373435;
			font-size: 18px;
			font-weight: 300;
			border-right: 5px solid transparent;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			cursor: pointer;
		}

		li:hover {
			background-color: #373435;
			border-right: 5px solid #bf9b58;
			color: white;
		}

		i {
			font-size: 20px;
			margin: 0 15px 4px 20px;
			color: #373435;
		}

		li:hover i {
			color: white;
		}
	}

	button {
		color: #373435;
		background-color: white;
		border: none;
		font-size: 15px;
		margin-left: 15px;
		cursor: pointer;
		position: absolute;
		bottom: 0;
	}

	button:hover {
		text-decoration: underline;
	}
</style>
