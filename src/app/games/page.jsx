import { games } from "@component/lib/games";
import { formatDate } from "@component/utils/formatDate";
import Link from "next/link"

function Page() {
  return (
    <div>
      <h1>Games</h1>

      <ul className="grid space-y-5">
        {games.map((game) => {
          return (
            <li key={game.id}>
              <p>{formatDate(new Date(game.date))}</p>
              <p>{game.winner.pseudo}</p>
              <div>Players:
                <ul>
                  {game.players.map((player) => (
                    <li key={player.id}>{player.pseudo}</li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>

      <Link href="/games/new">Add game</Link>

    </div>
  )
}

export default Page
