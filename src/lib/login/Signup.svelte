<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { auth, db } from '../../routes/fb';
	import { doc, setDoc } from 'firebase/firestore';

	const date = new Date();
	const options: {} = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
	const dateOfDay = date.toLocaleDateString('fr-FR', options);

	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';
	let checkCondi: boolean = false;
	let messageError: string = '';

	const submitSignUp = async () => {
		if (password.length < 6) {
			messageError = 'Votre mot de passe doit contenir 6 caract min';
		} else if (checkCondi === false) {
			messageError = 'Veuillez accepter les conditions générales';
		} else {
			try {
				await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
					const user = userCredential.user;
					setDoc(doc(db, 'Users', user.uid), {
						date: dateOfDay,
						email: email,
						firstName: firstName,
						lastName: lastName,
						id: user.uid,
						avatar:
							'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png',
						description: ''
					});
					messageError = '';
					goto('/home');
				});
			} catch (err) {
				console.log(err);
				messageError = 'Email déjà utilisé ou problème serveur';
			}
		}
	};
</script>

<form on:submit|preventDefault={submitSignUp}>
	<label for="firstname">Prénom :</label>
	<input
		type="text"
		placeholder="Entrer votre prénom"
		id="firstname"
		required
		bind:value={firstName}
	/>
	<label for="lastname">Nom :</label>
	<input type="text" placeholder="Entrer votre nom" id="lastname" required bind:value={lastName} />
	<label for="email">Email :</label>
	<input type="email" placeholder="Entrer votre email" id="email" required bind:value={email} />
	<label for="password">Mot de passe :</label>
	<input
		type="password"
		placeholder="Nouveau mot de passe"
		id="password"
		required
		bind:value={password}
	/>
	<label for="confirmpassword">Confirmation mot de passe :</label>
	<input
		type="password"
		placeholder="Confirmer mot de passe"
		id="confirmpassword"
		required
		bind:value={confirmPassword}
	/>
	<div>
		<input
			type="checkbox"
			class="check"
			id="conditions"
			on:click={() => (checkCondi = !checkCondi)}
			bind:value={checkCondi}
		/>
		<label for="conditions" class="condi"
			>En cochant j'accepte <span class="cvg">les condtions générales</span></label
		>
	</div>
	<button>S'inscrire</button>
	<h5>{messageError}</h5>
	<p>Déjà inscrit? <span on:click on:keypress>Se connecter</span></p>
</form>

<style>
	form {
		margin-top: 30px;
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
		border: 0.5px solid #373435;
		padding-left: 5px;
	}

	input:focus {
		outline-color: #bf9b58;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.check {
		width: 15px;
		height: 15px;
		margin-right: 10px;
		accent-color: #aa7f2e;
	}

	.condi {
		font-size: 13px;
		margin-bottom: 10px;
	}

	.cvg {
		color: rgb(16, 2, 85);
	}

	button {
		height: 35px;
		width: 308px;
		margin-top: 12px;
		border: none;
		border-radius: 5px;
		background-color: #373435;
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
		margin: 40px 0 0 60px;
		color: gray;
		font-size: 15px;
	}

	span {
		color: #bf9b58;
		cursor: pointer;
		text-decoration: underline;
	}
</style>
