"use client";

const Input = ({ type, label, name, id, defaultValue }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={id}>{label}</label>
      <input defaultValue={defaultValue} type={type} name={name} id={id} className="px-3 py-2 border border-gray-400" />
    </div>
  )
}

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