import { db } from "../services/firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

const schedulesCollection = collection(db, "schedules");

class Database {
  static getSchedules = async () => {
    const data = await getDocs(schedulesCollection);
    return data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }));
  }

  static createSchedule = async (entry) => {
    delete entry.id;
    const doc = await addDoc(schedulesCollection, { ...entry });
    return doc.id;
  }

  static updateSchedule = async (entry) => {
    const scheduleDoc = doc(db, "schedules", entry.id);
    const editedEntry = { ...entry };
    delete editedEntry.id;
    await updateDoc(scheduleDoc, editedEntry);
  }

  static deleteSchedule = async (id) => {
    const scheduleDoc = doc(db, "schedules", id);
    await deleteDoc(scheduleDoc);
  }
}

export default Database;
