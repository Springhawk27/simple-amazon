// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);

}

export default initializeAuthentication;


/*
steps for authentication
-------------------------
Initial Setup
1. firebase: create project
2. create web app
3. get configaration
4. initialize firebase
5. enable auth method


step:2 - setup  component

1. create login component
2. create register component
3. create route for login and register component


step 3: set auth system

1. set up sign in method
2. setup sign out method
3. user state
4. special observer
return necessary methods and states from useFirebase


step 4: create auth context hook (useAuth)

1. create a auth context
2. create context provider
3. set context rovider context value
4. use auth provider
5. create useAuth hook


step 5: create private route

1. create private route
2. set private route


step 6: redirect after login

1. after  login redirect user to their desired destination
2.
 */
