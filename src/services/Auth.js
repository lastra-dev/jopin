import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

class Auth {
  static async signIn(email, password) {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  }

  static async monitorAuthState(onSignIn, onSignOut) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        onSignIn();
      } else {
        console.log("Not signed in.");
        onSignOut();
      }
    });
  }

  static async logout() {
    await signOut(auth);
  }

  static getUserId() {
    return auth.currentUser.uid;
  }
}

export default Auth;
