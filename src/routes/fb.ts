// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBzppI5VczCGbVSpeOA-ktMxuf2aAoeeos',
	authDomain: 'jhemis-562b6.firebaseapp.com',
	projectId: 'jhemis-562b6',
	storageBucket: 'jhemis-562b6.appspot.com',
	messagingSenderId: '84951540679',
	appId: '1:84951540679:web:e6e9de8dd277d7be2a6fe2',
	measurementId: 'G-930T9ZZRVB'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
