import React from "react";

function Table({ fourSushi, budget }) {
  // renders an empty plate for every element in the array
  const emptyPlates = fourSushi
    .filter((s) => s.eaten)
    .map((s, index) => (
      <div key={index} className="empty-plate" style={{ top: -7 * index }} />
    ));

  return (
    <>
      <h1 className="remaining">You have: ${budget} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
