import { players } from "@component/lib/players";

function Page({ params }) {
  const { playerId } = params;

  const player = players.find((player) => player.id === playerId);

  return (
    <div>
      <h1>{player.pseudo}</h1>

      <p>Score: {player.score}</p>
      <p>Wins: {player.wins}</p>
      <p>Total games played: {player.totalGames}</p>

      {/* TODO formulaire  pré-rempli avec informations du joueurs */}
      {/* TODO gérer la soumission en console.log les infos du form */}
    </div>
  )
}

export default Page
