import { Fragment } from "react";
//import ExemploUseState from "./Components/ExemploUseState/ExemploUseState";
import "./App.css";
//import ExercicioUseState from "./Components/ExercicioUseState/ExercicioUseState";
import ExemploUseEffect from "./Components/ExemploUseEffect/ExemploUseEffect";

function App() {
  return (
    <Fragment>
      {/*<ExemploUseState />
      <ExercicioUseState /> */}

      <ExemploUseEffect userId="5" />
    </Fragment>
  );
}

export default App;