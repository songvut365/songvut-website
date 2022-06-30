import React from 'react'
import ReactDOM from 'react-dom/client'

import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import App from './App'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'preline/dist/hs-ui.bundle';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
