import { writable } from 'svelte/store';

export let usersList: any = writable([]);
export let authStore = writable({
	email: null,
	uid: null
});
