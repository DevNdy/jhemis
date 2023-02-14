import { writable } from 'svelte/store';

export let usersList: any = writable([]);
export let postsList: any = writable([]);
export let authStore = writable({
	email: 'null',
	uid: 'null'
});
export let userName = writable({
	name: '',
	avatar: ''
});
