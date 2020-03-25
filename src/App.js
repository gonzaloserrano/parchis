import { Client } from "boardgame.io/react";

const NUM_CHECKERS = 4;

const Parchis = {
  setup: () => ({
    board: {
      cells: Array(63).fill(null),
      homeCells: {
        red: Array(8).fill(null),
        green: Array(8).fill(null),
        blue: Array(8).fill(null),
        yellow: Array(8).fill(null)
      },
      homeCheckers: {
        red: NUM_CHECKERS,
        green: NUM_CHECKERS,
        blue: NUM_CHECKERS,
        yellow: NUM_CHECKERS
      }
    }
  }),

  moves: {
    dice: (G, ctx, id) => {
      G.board.cells[id] = ctx.currentPlayer;
    }
  }
};

const App = Client({ game: Parchis });

export default App;
