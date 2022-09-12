// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

let API_KEY = import.meta.env.VITE_apiKey;
let AUTH_DOMAIN = import.meta.env.VITE_authDomain;
let PROJECT_ID = import.meta.env.VITE_projectID;
let STORAGE_BUCKET = import.meta.env.VITE_storageBucket;
let MESSAGE_SENDER_ID = import.meta.env.VITE_messagingSenderID;
let APP_ID = import.meta.env.VITE_appID;
let MEASUREMENT_ID = import.meta.env.VITE_measurementId;
let databaseURL = import.meta.env.VITE_databaseURL;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: databaseURL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGE_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
};




const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);