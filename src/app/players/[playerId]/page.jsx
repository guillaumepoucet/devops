import { players } from "@component/lib/players";
import PlayerForm from "./_component/PlayerForm";

function Page({ params }) {
  const { playerId } = params;

  const player = players.find((player) => player.id === playerId);

  return (
    <div>
      <h1>{player.pseudo}</h1>

      <p>Score: {player.score}</p>
      <p>Wins: {player.wins}</p>
      <p>Total games played: {player.totalGames}</p>


      <PlayerForm player={player} />
      

    </div>
  )
}

export default Page
