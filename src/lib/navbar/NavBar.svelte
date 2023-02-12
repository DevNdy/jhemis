<script>
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from '../../routes/fb';

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((err) => console.log(err));
	};
</script>

<header>
	<div>
		<img src="./logoSimple.png" alt="logo" />
		<h2><span>J</span>hémis</h2>
	</div>

	<ul>
		<li><i class="fa-solid fa-house" />Accueil</li>
		<li><i class="fa-solid fa-globe" />News</li>
		<li><i class="fa-solid fa-message" />Messages</li>
		<li><i class="fa-solid fa-circle-user" />Mon compte</li>
	</ul>

	<button on:click={signOutUser}>se déconnecter</button>
</header>

<style>
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
		justify-content: space-between;
	}

	div {
		display: flex;
		align-items: center;
	}

	h2 {
		margin-top: 8px;
	}

	img {
		margin-left: 12px;
		height: 50px;
	}

	span {
		color: #bf9b58;
		font-size: 30px;
	}

	ul {
		width: 230px;
	}

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

	button {
		color: #373435;
		background-color: white;
		border: none;
		font-size: 15px;
		cursor: pointer;
	}
</style>
