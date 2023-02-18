import { writable } from 'svelte/store';

export let usersList: any = writable([]);
export let postsList: any = writable([]);
export let messagesList: any = writable([]);
export let authStore = writable({
	email: 'null',
	uid: 'null'
});
export let userName = writable({
	name: '',
	avatar: ''
});

//date
const date = new Date();
const options: {} = { weekday: 'short', year: '2-digit', month: 'short', day: '2-digit' };
const dateOfDay = date.toLocaleDateString('fr-FR', options);

//idGenerate:
const generateId = Math.floor((1 + Math.random()) * 0x100000)
	.toString(16)
	.substring(1);

export { generateId, dateOfDay };
