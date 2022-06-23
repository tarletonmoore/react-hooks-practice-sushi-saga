import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [onlyFourSushis, setOnlyFourSushis] = useState(0)
  const [wallet, setWallet] = useState(100)


  return (
    <div className="app">
      <SushiContainer sushis={sushis} setSushis={setSushis} onlyFourSushis={onlyFourSushis} setOnlyFourSushis={setOnlyFourSushis} wallet={wallet} setWallet={setWallet} />
      <Table sushis={sushis}
        wallet={wallet} setWallet={setWallet}
      />
    </div>
  );
}

export default App;
