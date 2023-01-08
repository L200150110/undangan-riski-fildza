import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const Firebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDWKR_ZVHhdCv_EC_AsEHV4Fo4_64x2-4I",
    authDomain: "undangan-3aaee.firebaseapp.com",
    projectId: "undangan-3aaee",
    storageBucket: "undangan-3aaee.appspot.com",
    messagingSenderId: "1070120230736",
    appId: "1:1070120230736:web:309b2f84909f175dbe1655",
    measurementId: "G-31NQCHVC76",
    databaseURL:
      "https://undangan-3aaee-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return getDatabase(app);
};

export default Firebase;
