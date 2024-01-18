import { players } from "@component/lib/players";
import Link from "next/link"

function Page() {
  return (
    <div>
      <h1>Players</h1>

      <ul className="grid space-y-5">
        {players.map((player) => {
          return (
            <li key={player.id}>
              <p className="font-medium">{player.pseudo}</p>
              <p>Score: {player.score}</p>
              <p>Wins: {player.wins}</p>
              <p>Total games played: {player.totalGames}</p>

              <Link href={`/players/${player.id}`}>Voir le profil</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Page
