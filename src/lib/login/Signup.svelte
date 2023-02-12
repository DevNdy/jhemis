<script lang="ts">
</script>

<form>
	<label for="email">Email :</label>
	<input type="email" placeholder="Entrer votre email" id="email" />
	<label for="firstname">Prénom :</label>
	<input type="text" placeholder="Entrer votre prénom" id="firstname" />
	<label for="lastname">Nom :</label>
	<input type="text" placeholder="Entrer votre nom" id="lastname" />
	<label for="password">Mot de passe :</label>
	<input type="password" placeholder="Nouveau mot de passe" id="password" />
	<label for="password">Confirmation mot de passe :</label>
	<input type="password" placeholder="Confirmer mot de passe" id="password" />
	<div>
		<input type="checkbox" class="check" id="conditions" />
		<label for="conditions" class="condi"
			>En cochant j'accepte <span class="cvg">les condtions générales</span></label
		>
	</div>
	<button>S'inscrire</button>
	<p>Déjà inscrit? <span on:click on:keypress>Se connecter</span></p>
</form>

<style>
	form {
		margin-top: 60px;
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

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.check {
		width: 15px;
		height: 15px;
		margin-right: 10px;
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
		background-color: black;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.7;
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
