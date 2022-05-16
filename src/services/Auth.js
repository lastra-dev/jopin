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
      return this.handleError(e.code);
    }
  }

  static handleError(errorCode) {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid Email / Password."
      case "auth/wrong-password":
        return "Invalid Email / Password."
      case "auth/user-not-found":
        return "No user found with this email."
      case "auth/operation-not-allowed":
        return "Server error, please try again.";
      case "auth/email-already-in-use":
        return "Email already used.";
      case "auth/weak-password":
        return "Weak password.";
      case "auth/user-disabled":
        return "User disabled.";
      default:
        console.log(errorCode);
        return "Unkown error, please try again."
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
        return this.handleError(e.code);
      }
    } else {
      return "Passwords do not match.";
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
