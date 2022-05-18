import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase-config";
import Alarms from "../controllers/Alarms";
import ScheduleStorage from "../controllers/ScheduleStorage";

class Auth {
  static async login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return this.handleError(error.code);
    }
  }

  static async createAccount(email, password, passwordConfirm) {
    if (password !== passwordConfirm) {
      return "Passwords do not match.";
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMsg = this.handleError(error.code);
      return errorMsg;
    }
  }

  static async monitorAuthState(onSignIn, onSignOut) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSignIn();
      } else {
        localStorage.removeItem("loggedIn");
        onSignOut();
      }
    });
  }

  static async logout() {
    await signOut(auth);
    Alarms.deleteAll();
    ScheduleStorage.clear();
  }

  static getUserId() {
    return auth.currentUser.uid;
  }

  static handleError(errorCode) {
    switch (errorCode) {
      case "auth/invalid-email":
      case "auth/wrong-password":
        return "Invalid Email / Password.";
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/operation-not-allowed":
        return "Server error, please try again.";
      case "auth/email-already-in-use":
        return "Email already used.";
      case "auth/weak-password":
        return "Weak password, 6 characters minimum.";
      case "auth/user-disabled":
        return "User disabled.";
      case "auth/missing-email":
        return "Please enter an email.";
      default:
        console.log(errorCode);
        return "Unknown error, please try again.";
    }
  }
}

export default Auth;
