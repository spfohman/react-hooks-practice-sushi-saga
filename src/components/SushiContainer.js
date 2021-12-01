import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushi, eatSushi, getSushi }) {
  const sushiList = fourSushi
    .filter((sushi) => !sushi.eaten)
    .map((s) => {
      return <Sushi key={s.id} sushi={s} eatSushi={eatSushi} />;
    });
  return (
    <div className="belt">
      {sushiList}
      <MoreButton getSushi={getSushi} />
    </div>
  );
}

export default SushiContainer;
