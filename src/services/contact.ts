import { collection, addDoc } from "firebase/firestore";
import { store } from "./firebase";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  capability: string;
  inquiry: string;
  details: string;
}

export const Contact = {
  addContactData: async (data: ContactFormData) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const docRef = await addDoc(collection(store, "contact"), data);
    } catch(err) {
      const error = err as Error;
      console.log(error);
    }
  }
}
