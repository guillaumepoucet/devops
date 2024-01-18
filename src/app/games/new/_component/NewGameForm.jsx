"use client"

function NewGameForm() {
 
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const players = [];

    for (let i = 1; i <= 4; i++) {
      const player = formData.get(`player${i}`);

      if (player) {
        players.push(player);
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="player1">
        <span>Player 1</span>
        <input type="text" className="border border-gray-400" name="player1" id="player1" />
      </label>

      <label htmlFor="player2">
        <span>Player 2</span>
        <input type="text" name="player2" id="player2" />
      </label>

      <label htmlFor="player3">
        <span>Player 3</span>
        <input type="text" name="player3" id="player3" />
      </label>

      <label htmlFor="player4">
        <span>Player 4</span>
        <input type="text" name="player4" id="player4" />
      </label>

      <button type="submit">Start game</button>
    </form>
  )
}

export default NewGameForm
