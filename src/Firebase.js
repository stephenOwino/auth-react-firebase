import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBMJR_CGMvj2JzP-mWZMUuGmjpwwvgVNC8",
	authDomain: "auth-firebase-withreact.firebaseapp.com",
	projectId: "auth-firebase-withreact",
	storageBucket: "auth-firebase-withreact.appspot.com",
	messagingSenderId: "328574177233",
	appId: "1:328574177233:web:fe2a1913201d024b565af0",
	measurementId: "G-6HRYM4PCE8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
