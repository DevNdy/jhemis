<script lang="ts">
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
	import { auth, db } from '../../routes/fb';
	import {
		authStore,
		usersList,
		userName,
		postsList,
		messagesList,
		usersMessagesList
	} from '../../stores/dataUsers';

	let users: string[] = [];
	let openHeader: boolean = false;

	const colRefUser: any = query(collection(db, 'Users'));

	const getUsers = onSnapshot(colRefUser, (querySnapshot: any) => {
		let fbTodos: any = [];
		querySnapshot.forEach((doc: any) => {
			let todo = { ...doc.data(), id: doc.id };
			fbTodos = [todo, ...fbTodos];
			usersList.set(fbTodos);
		});
		users = fbTodos;
	});

	//récup userName & avatar
	$: $usersList.filter((e: any) =>
		e.id === $authStore.uid
			? userName.set({
					name: e.firstName + ' ' + e.lastName,
					avatar: e.avatar
			  })
			: ''
	);

	const colRef: any = query(collection(db, 'Posts'), orderBy('time', 'asc'));

	const getPosts = onSnapshot(colRef, (querySnapshot: any) => {
		let fbTodos: string[] = [];
		querySnapshot.forEach((doc: any) => {
			let todo = { ...doc.data(), id: doc.id };
			fbTodos = [todo, ...fbTodos];
			postsList.set(fbTodos);
		});
	});

	const colRefMess: any = query(collection(db, 'Messages'), orderBy('time', 'asc'));

	const getMessages = onSnapshot(colRefMess, (querySnapshot: any) => {
		let fbTodos: string[] = [];
		querySnapshot.forEach((doc: any) => {
			let todo = { ...doc.data(), id: doc.id };
			fbTodos = [todo, ...fbTodos];
			messagesList.set(fbTodos);
		});
	});

	const colRefUsersMessage: any = query(collection(db, 'UsersMessage'), orderBy('time', 'asc'));

	const getUserMess = onSnapshot(colRefUsersMessage, (querySnapshot: any) => {
		let fbTodos: string[] = [];
		querySnapshot.forEach((doc: any) => {
			let todo = { ...doc.data(), id: doc.id };
			fbTodos = [todo, ...fbTodos];
			usersMessagesList.set(fbTodos);
		});
	});

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((err) => console.log(err));
	};
</script>

<header style={`${openHeader ? 'left: 0px' : 'box-shadow: none; background-color: transparent'}`}>
	<div>
		<img src="/logoSimple.png" alt="logo" />
		<h2><span>J</span>hémis</h2>
		<i
			on:click={() => (openHeader = !openHeader)}
			on:keypress
			class={`${openHeader ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right'}`}
		/>
	</div>

	{#each $usersList as item}
		{#if item.id === $authStore.uid}
			<div class="profil">
				<img class="avatar" src={item.avatar} alt="avatar" />
				<h3>{item.firstName}</h3>
			</div>
		{/if}
	{/each}

	<ul>
		<li><a href="/home"><i class="fa-solid fa-house" />Accueil</a></li>
		<li>
			<a href="/home/message"
				><i class="fa-solid fa-message" />
				Messages
			</a>
		</li>
		<li><a href="/home/profile"><i class="fa-solid fa-circle-user" />Mon compte</a></li>
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

		i {
			opacity: 0;
			z-index: -1;
			background-color: #bf9b58;
			padding: 5px;
			color: white;
			margin: 10px 0 0 60px;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
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
			border-radius: 50%;
			margin-left: 15px;
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

			a {
				height: 60px;
				width: 225px;
				text-decoration: none;
				display: flex;
				align-items: center;

				i {
					font-size: 20px;
					margin: 0 15px 4px 20px;
					color: #373435;
				}
			}
		}

		li:hover {
			background-color: #373435;
			border-right: 5px solid #bf9b58;
			color: white;
			a {
				color: white;
			}

			i {
				color: white;
			}
		}
	}

	button {
		color: #373435;
		background-color: white;
		border: none;
		font-size: 15px;
		margin-left: 15px;
		position: absolute;
		bottom: 0;
	}

	button:hover {
		text-decoration: underline;
	}

	@media (max-width: 930px) {
		header {
			position: fixed;
			left: -210px;
			transition: 1s;
			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
			border: none;
			z-index: 50;
		}

		div {
			margin-top: 0px;
			i {
				opacity: 1;
				z-index: 5;
				cursor: pointer;
				&:hover {
					opacity: 0.8;
				}
			}
		}

		button {
			margin-bottom: 55px;
		}
	}
</style>
