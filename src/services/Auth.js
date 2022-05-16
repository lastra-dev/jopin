import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase-config";
import Database from "../models/Database";
import Alarms from "../controllers/Alarms";
import ScheduleStorage from "../controllers/ScheduleStorage";

class Auth {
  static async signIn(email, password) {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const entries = await Database.getSchedules();
      ScheduleStorage.addAll(entries);
      Alarms.createAll(entries);
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
      case "auth/missing-email":
        return "Please enter an email."
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
    Alarms.deleteAll();
    ScheduleStorage.clear();
  }

  static getUserId() {
    return auth.currentUser.uid;
  }
}

export default Auth;
