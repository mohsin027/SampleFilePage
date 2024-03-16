import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ImportBox } from "./components/ImportBox/ImportBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="alert-div">
        <p>This account was not allocated free credits — </p>
        <p>Click here for more information</p>
      </div>
      <Header />
      <div className="d-flex justify-content-center">
        <ImportBox />
      </div>
    </>
  );
}

export default App;
