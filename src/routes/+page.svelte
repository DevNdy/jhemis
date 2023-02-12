<script lang="ts">
	import Signin from '$lib/login/Signin.svelte';
	import Signup from '$lib/login/Signup.svelte';

	let signInOrSignUp = false;
</script>

<main>
	<div>
		<h1>Bienvenue sur <span>J</span>hémis</h1>
		<p>le réseau social de la justice</p>
		{#if signInOrSignUp}
			<Signup on:click={() => (signInOrSignUp = false)} />
		{:else}
			<Signin on:click={() => (signInOrSignUp = true)} />
		{/if}
		<p class="bottom">© 2023 Jhémis par @DevNdy</p>
		<img class="logo" src="./logoSimple.png" alt="jhémis" />
	</div>
	<img
		src="https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		alt="justice"
	/>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		margin-top: 100px;
		font-size: 45px;
		font-weight: 600;
		text-align: center;
	}

	span {
		color: #bf9b58;
		font-size: 60px;
	}

	p {
		font-weight: 200;
		font-size: 24px;
		color: #bf9b58;
	}

	.logo {
		height: 70px;
		position: absolute;
		top: 20px;
		left: 20px;
	}

	img {
		height: 100vh;
		filter: grayscale(60%);
	}

	.bottom {
		position: absolute;
		bottom: 5px;
		left: 20px;
		font-size: 14px;
		color: gray;
	}
</style>
