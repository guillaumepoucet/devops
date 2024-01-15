import { players } from "@component/lib/players";
import { games } from "@component/lib/games";
import Link from "next/link"
import { formatDate } from "@component/utils/formatDate";

export default function Home() {

  const leaders = players.sort((a, b) => {
    return b.wins - a.wins
  }).slice(0, 3);

  const lastPlayedGame = games.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })[0];

  return (
    <main className="flex min-h-screen flex-col p-4">

      <h1>UNO</h1>

      <h2>Leaderboard</h2>

      {leaders.map(leader => (
        <div key={leader.id}>
          <p>{leader.pseudo}</p>
          <p>{leader.wins}</p>
        </div>
      ))}

      {lastPlayedGame ? (
        <div>
          {formatDate("oigjregi")}
          <p>
            Winner:
            <Link href={`/players/${lastPlayedGame.winner.id}`}>{lastPlayedGame.winner.pseudo}</Link>
          </p>
        </div>
      ) : (
        "Pas de jeu récent."
      )}

    </main>
  )
}
