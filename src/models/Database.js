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
      const data = doc.data();
      return new Schedule({
        name: data.name,
        url: data.url,
        time: data.time,
        days: data.days,
        daysEnabled: data.daysEnabled,
        ownerId: data.ownerId,
        id: doc.id,
      });
    });
  };

  static createSchedule = async (schedule) => {
    // Delete ID property because we will get it from Firebase
    delete schedule.id;
    const doc = await addDoc(schedulesCollection, { ...schedule });
    return doc.id;
  };

  static updateSchedule = async (schedule) => {
    const scheduleDoc = doc(db, "schedules", schedule.id);
    const editedSchedule = { ...schedule };
    delete editedSchedule.id;
    await updateDoc(scheduleDoc, editedSchedule);
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
    data.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  };
}

export default Database;
