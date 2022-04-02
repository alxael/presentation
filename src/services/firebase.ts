import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import config from "../config.json";

export const base = initializeApp(config.firebase as FirebaseOptions);
export const store = getFirestore(base);