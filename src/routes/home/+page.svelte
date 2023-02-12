<script>
	import NavBar from '$lib/navbar/NavBar.svelte';
</script>

<main>
	<NavBar />
	<div>
		<h2>Accueil</h2>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div {
		margin: 50px 0 0 250px;
		min-height: 100vh;
		width: 1100px;
	}
</style>
