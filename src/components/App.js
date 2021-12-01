import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [fourSushi, setFourSushi] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const allSushi = data.map((s) => {
          return { ...s, eaten: false };
        });

        const four = allSushi.splice(0, 4);
        setSushi(allSushi);
        setFourSushi(four);
      });
  }, []);

  const getSushi = () => {
    const allSushi = sushi;
    const four = sushi.splice(0, 4);
    setSushi(allSushi);
    setFourSushi(four);
  };

  const eatSushi = (e) => {
    if (budget - parseInt(e.target.dataset.price) >= 0) {
      const newSushi = fourSushi.map((s) =>
        s.id == e.target.id ? { ...s, eaten: true } : s
      );
      setFourSushi(newSushi);
      let newBudget = budget - parseInt(e.target.dataset.price);

      setBudget(newBudget);
    }
  };

  return (
    <div className="app">
      <SushiContainer
        fourSushi={fourSushi}
        eatSushi={eatSushi}
        getSushi={getSushi}
      />
      <Table fourSushi={fourSushi} budget={budget} />
    </div>
  );
}

export default App;
