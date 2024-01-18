"use client";

import { Input } from "@component/components/input/Input";
import { UserContext } from "@component/context/UserContext";
import { useContext } from "react";
import { useParams } from "next/navigation";

const schema = [
  {
    type: "text",
    label: "Pseudo",
    name: "pseudo",
    id: "pseudo",
  },
  {
    type: "number",
    label: "Score",
    name: "score",
    id: "score",
  },
  {
    type: "number",
    label: "Wins",
    name: "wins",
    id: "wins",
  },
  {
    type: "number",
    label: "Total games played",
    name: "totalGames",
    id: "totalGames",
  },
]

function PlayerForm({ player }) {
  const user = useContext(UserContext);
  const { playerId } = useParams();

  if (user.id !== playerId) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newPlayer = Object.fromEntries(formData);

    console.log(newPlayer);
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>

      {schema.map(field => (
        <Input key={field.id} {...field} defaultValue={player[field.name]} />
      ))}

      <button type="submit">Submit</button>

    </form>
  )
}

export default PlayerForm