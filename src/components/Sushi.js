import React, { useState } from "react";

function Sushi({ sushi, wallet, setWallet }) {

  const [onEatSushi, setOnEatSushi] = useState(false)

  function handleSushiClick() {

    if (wallet >= sushi.price && onEatSushi === false) {
      setWallet(wallet - sushi.price)
      setOnEatSushi(() => true)
    }
    else if (wallet < sushi.price) {
      alert("Not Enough Money")
    }
    else if (onEatSushi === true) {
      alert("Already Eaten")
    }

  }






  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}

        {onEatSushi ? null : (
          <img
            src={sushi.img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
