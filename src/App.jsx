import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { prenom: "Jean", nom: "Martin", age: 20, sexe: "H" },
    { prenom: "Katia", nom: "Turin", age: 24, sexe: "F" },
    { prenom: "Paul", nom: "Dupont", age: 58, sexe: "H" },
    { prenom: "Karim", nom: "Ben Hamid", age: 28, sexe: "H" },
  ]);

  return (
    <>
      <h1>Personnes inscrites</h1>
      <ul>
        {list.map((personnes) => (
          <li key={personnes.prenom}>{`${
            personnes.sexe === "H" ? "Monsieur" : "Madame"
          } ${personnes.nom} ${personnes.age}`}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
