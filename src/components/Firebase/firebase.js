import app from 'firebase/app';

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
		app.initializeApp(config);
	}
}

export default Firebase;
