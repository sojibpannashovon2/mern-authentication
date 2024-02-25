import { useState } from "react";

import "./App.css";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  text-red-400">Hello world!</h1>
      <Login />
      <div className="my-24">
        <Signin />
      </div>
    </>
  );
}

export default App;
