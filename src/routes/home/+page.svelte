<script>
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { auth } from '../fb';

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				goto('/');
			})
			.catch((err) => console.log(err));
	};
</script>

<main>je suis la home <button on:click={signOutUser}>deco</button></main>

<style>
	main {
		height: 100vh;
	}
</style>
