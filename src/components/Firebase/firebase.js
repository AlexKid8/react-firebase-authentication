import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	  apiKey: "AIzaSyDDZCFNElr2b5BIQX6ao7M68JdPU-naDco",
	  authDomain: "ak8-react-firebase.firebaseapp.com",
	  databaseURL: "https://ak8-react-firebase.firebaseio.com",
	  projectId: "ak8-react-firebase",
	  storageBucket: "ak8-react-firebase.appspot.com",
	  messagingSenderId: "578191569258",
	  appId: "1:578191569258:web:2fdfa0482aa60687d9b513"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		this.auth = app.auth();
	}

	// ** Auth API **
	
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) => 
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => 
		this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password => 
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;
