import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentePrueba from "./components/ComponentePrueba/ComponentePrueba";
const usertafa = { nombre: "moustapha", edad: 44 };
function App() {
  return (
    <div className="App">
      ------------------- <br />
      Estos son los mejores
      <ComponentePrueba edad={30} user={usertafa} />
      --------------------
    </div>
  );
}

export default App;
