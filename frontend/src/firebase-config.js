import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyCSqGyPiLDrgYw_Grwp8WVr4zXVWbAaeN4',
  authDomain: 'cmpt300-gamification.firebaseapp.com',
  projectId: 'cmpt300-gamification',
  storageBucket: 'cmpt300-gamification.appspot.com',
  messagingSenderId: '336701587899',
  appId: '1:336701587899:web:637137c36f1e223964049e',
  measurementId: 'G-D4M7ZPZRY6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
