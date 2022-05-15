import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase-config";
import Database from "../models/Database";
import Schedule from "../controllers/Schedule";
import EntryStorage from "../controllers/EntryStorage";

class Auth {
  static async signIn(email, password) {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const entries = await Database.getSchedules();
      EntryStorage.addAll(entries);
      Schedule.createAll(entries);
    } catch (e) {
      console.log(e);
    }
  }

  static async createAccount(email, password, passwordConfirm) {
    if (password === passwordConfirm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Passwords not matching.")
    }
  }

  static async monitorAuthState(onSignIn, onSignOut) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSignIn();
      } else {
        onSignOut();
      }
    });
  }

  static async logout() {
    await signOut(auth);
    Schedule.deleteAll();
    EntryStorage.clear();
  }

  static getUserId() {
    return auth.currentUser.uid;
  }
}

export default Auth;
