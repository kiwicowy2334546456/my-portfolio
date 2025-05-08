// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyuoqPxbNd33__JlmRuN3qhVLyXwEi_Qc",
  authDomain: "portfoilo-85deb.firebaseapp.com",
  projectId: "portfoilo-85deb",
  storageBucket: "portfoilo-85deb.firebasestorage.app",
  messagingSenderId: "291852757588",
  appId: "1:291852757588:web:30d954c773ea50a27f1bc1",
  measurementId: "G-C12809LC4J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
