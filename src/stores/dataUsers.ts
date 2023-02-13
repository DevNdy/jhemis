import { collection, getDocs, query } from 'firebase/firestore';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { db } from '../routes/fb';

export let usersList = writable([]);
export let authStore = writable({
	email: null,
	uid: null
});
