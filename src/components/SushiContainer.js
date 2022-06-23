import React, { useEffect } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, setSushis, onlyFourSushis, setOnlyFourSushis, wallet, setWallet }) {


  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((response) => response.json())
      .then((data) => {
        setSushis(data)
        // const items = data.slice(sushis, sushis + 4)
        // setOnlyFourSushis(items)
        // setSushis(items)
      })

  }, [])


  const sushiComponent = sushis.slice(onlyFourSushis, onlyFourSushis + 4).map((sushi) => <Sushi key={sushi.id} sushi={sushi} sushis={sushis} setSushis={setSushis} wallet={wallet} setWallet={setWallet} />)



  function handleClick() {
    setOnlyFourSushis((onlyFourSushis) => (onlyFourSushis + 4))
  }


  return (
    <div className="belt">

      {sushiComponent}
      <MoreButton onHandleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
