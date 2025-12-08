import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Options from "./components/Options.jsx";
import Document from "./components/Document.jsx";

function App() {
  return (
    <>
    <Options />
    <Document />
    </>
  );
}

export default App;
