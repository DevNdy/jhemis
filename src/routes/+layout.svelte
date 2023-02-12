<script>
	import Loader from '$lib/ui-reusable/Loader.svelte';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth } from './fb';

	let loading = false;

	onMount(() => {
		loading = true;
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('welcome to SV-Socials');
			} else {
				goto('/');
			}
		});
	});
</script>

{#if !loading}
	<div class="loaderPage">
		<Loader />
	</div>
{/if}
<slot />

<style>
	.loaderPage {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
