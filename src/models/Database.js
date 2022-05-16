import Auth from "../services/Auth";
import Schedule from "../models/Schedule";
import { db } from "../services/firebase-config";
import {
  doc,
  where,
  query,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";

const schedulesCollection = collection(db, "schedules");

class Database {
  static getSchedules = async () => {
    const q = query(
      schedulesCollection,
      where("ownerId", "==", Auth.getUserId())
    );
    const data = await getDocs(q);
    return data.docs.map((doc) => {
      const data = doc.data()
      return new Schedule(
        data.name,
        data.url,
        data.time,
        data.days,
        data.ownerId,
        data.enabled,
        doc.id);
    });
  };

  static createSchedule = async (entry) => {
    delete entry.id;
    const doc = await addDoc(schedulesCollection, { ...entry });
    return doc.id;
  };

  static updateSchedule = async (entry) => {
    const scheduleDoc = doc(db, "schedules", entry.id);
    const editedEntry = { ...entry };
    delete editedEntry.id;
    await updateDoc(scheduleDoc, editedEntry);
  };

  static deleteSchedule = async (id) => {
    const scheduleDoc = doc(db, "schedules", id);
    await deleteDoc(scheduleDoc);
  };

  static deleteAllSchedules = async () => {
    const q = query(
      schedulesCollection,
      where("ownerId", "==", Auth.getUserId())
    );

    const data = await getDocs(q);
    data.forEach(async doc => {
      await deleteDoc(doc.ref);
    });
  }
}

export default Database;
