import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import ComponentePrueba from "./components/ComponentePrueba/ComponentePrueba";
import Form from "./components/Form/Form";
//----------------------
const usertafa = { nombre: "moustapha" };
const usermarta = { nombre: "marta" };
const userbea = { nombre: "bea" };
const userlina = { nombre: "lina" };
const userryan = { nombre: "ryan" };
function App() {
  return (
    <div className="App">
      -------------------
      <br />
      Router <br />
      <Form />
      <BrowserRouter>
        <Link to="/marta"> Marta</Link>
        <br />
        <Link to="/"> tafa</Link>

        <Switch>
          <Route exact path="/">
            <ComponentePrueba edad={44} user={usertafa} />
            <ComponentePrueba edad={30} user={userbea} />
            <ComponentePrueba edad={27} user={userryan} />
          </Route>
          <Route path="/marta">
            <ComponentePrueba edad={40} user={usermarta} />
            <ComponentePrueba edad={24} user={userlina} />
          </Route>
        </Switch>
      </BrowserRouter>
      Estos son los mejores --------------------
    </div>
  );
}

export default App;
