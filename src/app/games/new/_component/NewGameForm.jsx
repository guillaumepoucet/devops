"use client";

import { useEffect, useState } from "react";


function NewGameForm() {

  const [players, setPlayers] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    //   // Exemple de récupération des données du formulaire
    //   const formData = new FormData(event.target);

    event.target.querySelectorAll("input").forEach((input, index) => {
      const pseudo = input.value;

      if (!pseudo) {
        const error = { [input.name]: { message: "Le champ est vide" } }
        setErrors({ ...errors, ...error })
      }
      if (pseudo) {
        setErrors({ ...errors, [input.name]: null })
        const player = players[index];

        player.pseudo = pseudo;
        setPlayers([...players.filter(p => player !== p), player])

      }
    })
  }

  const addPlayer = () => {
    const lastAddedPlayer = players[players.length - 1];
    const player = { id: (lastAddedPlayer?.id ?? 0) + 1, pseudo: "" };
    setPlayers([...players, player])
  }

  console.log(players);

  const deletePlayer = (index) => {
    const playerToDelete = players[index];
    const newPlayers = players.filter((player) => player.id !== playerToDelete.id);
    setPlayers(newPlayers);
  }

  return (
    <form onSubmit={handleSubmit} className="grid space-y-2">
      {players.map((player, index) => {
        return (
          <label key={index} htmlFor={`player${index + 1}`} className="grid">
            <span>Player {index + 1}</span>
            <input defaultValue={player.pseudo} type="text" name={`player${index + 1}`} id={`player${index + 1}`} className="px-3 py-2 border border-gray-400" />

            {errors[`player${index + 1}`] && <p>{errors[`player${index + 1}`].message}</p>}

            <button type="button" className="text-red-500" onClick={() => deletePlayer(index)}>Supprimer</button>
          </label>
        )
      }
      )}

      <button type="button" onClick={addPlayer} className="px-4 py-2 text-white bg-indigo-600">New player</button>
      <p>{players.length}</p>
      <button className="px-4 py-2 text-black bg-orange-500" type="submit">Start game</button>
    </form>
  )
}

export default NewGameForm
