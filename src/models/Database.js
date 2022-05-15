import { db } from "../services/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const schedulesCollection = collection(db, "schedules");

class Database {
  static getSchedules = async () => {
    const data = await getDocs(schedulesCollection);
    return data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }));
  }

  static createSchedule = async (entry) => {
    await addDoc(schedulesCollection, { ...entry });
  }
}

export default Database;
