import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1te6RssbCBSrtpNisansqa-fGjwQBrxM",
  authDomain: "timming-fad72.firebaseapp.com",
  projectId: "timming-fad72",
  storageBucket: "timming-fad72.firebasestorage.app",
  messagingSenderId: "376144224070",
  appId: "1:376144224070:web:62c2813a34fe29f4e70f47"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export default app;