<script lang="ts">
	import Signin from '$lib/login/Signin.svelte';
	import Signup from '$lib/login/Signup.svelte';

	let signInOrSignUp: boolean = false;
</script>

<main>
	<div>
		<h1>Bienvenue sur Jhémis <span>le réseau social de la justice</span></h1>
		{#if signInOrSignUp}
			<Signin on:click={() => (signInOrSignUp = false)} />
		{:else}
			<Signup on:click={() => (signInOrSignUp = true)} />
		{/if}
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
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 45px;
		font-weight: 600;
	}

	span {
		font-weight: 200;
		font-size: 24px;
		color: rgb(98, 98, 98);
	}

	img {
		height: 100vh;
		filter: grayscale(60%);
	}
</style>
