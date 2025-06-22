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

  const handleDelete = (lenom) => {
    console.log(lenom);

    //1. copie du state
    const listCopy = [...list];

    //2. manipulation du state
    const listCopyUpdated = listCopy.filter((personne) => {
      return personne.nom !== lenom;
    });

    //3. modifier le state en passant par le setter
    setList(listCopyUpdated);
    //const handleDelete = (lenom) => {
    //setList(list.filter((personne) => personne.nom !== lenom));
    //};
  };

  return (
    <>
      <h1>Personnes inscrites</h1>
      <ul>
        {list.map((personnes) => (
          <li key={personnes.prenom}>
            {`${personnes.sexe === "H" ? "Monsieur" : "Madame"} ${
              personnes.nom
            } ${personnes.age}`}{" "}
            <button
              onClick={() => {
                handleDelete(personnes.nom);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
