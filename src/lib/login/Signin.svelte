<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '../../routes/fb';

	let email: string = '';
	let password: string = '';
	let messError: string = '';

	const submitSignIn = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
				const user = userCredential.user;
				localStorage.setItem('uid', user.uid);
				goto('/home');
			});
		} catch (err) {
			console.log(err);
			messError = 'Erreur email ou mot de passe';
		}
	};
</script>

<form on:submit|preventDefault={submitSignIn}>
	<label for="email">Email :</label>
	<input type="email" placeholder="Entrer votre email" id="email" bind:value={email} />
	<label for="password">Mot de passe :</label>
	<input
		type="password"
		placeholder="Entrer votre mot de passe"
		id="password"
		bind:value={password}
	/>
	<a href="/">mot de passe oublié?</a>
	<button>Se connecter</button>
	<h5>{messError}</h5>
	<p>Pas encore inscrit? <span on:click on:keypress>Créer un compte</span></p>
</form>

<style>
	form {
		margin-top: 140px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	label {
		margin-top: 12px;
		opacity: 0.7;
	}

	input {
		height: 35px;
		width: 300px;
		border-radius: 5px;
		border: 0.5px solid black;
		padding-left: 5px;
	}

	a {
		width: 300px;
		text-decoration: none;
		font-size: 12px;
		text-align: end;
		color: gray;
		margin-top: 3px;
	}

	button {
		height: 35px;
		width: 308px;
		margin-top: 12px;
		border: none;
		border-radius: 5px;
		background-color: black;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.7;
	}

	h5 {
		width: 300px;
		text-align: center;
		color: red;
		font-weight: 400;
		margin-top: 10px;
	}

	p {
		margin: 40px 0 0 25px;
		color: gray;
		font-size: 15px;
	}

	span {
		color: black;
		cursor: pointer;
		text-decoration: underline;
	}
</style>
