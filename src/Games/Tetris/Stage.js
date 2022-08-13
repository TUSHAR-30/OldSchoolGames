import Cell from "./Cell";

const Stage = ({ stage }) => {
  const stageWidth = stage[0].length;
  const stageHeight = stage.length;
  const stageStyles = {
    display: "grid",
    gridTemplateRows: `repeat(
        ${stageHeight},
        calc(25vw / ${stageWidth})
    )`,
    gridTemplateColumns: `repeat(${stageWidth}, 1fr)`,
    gridGap: "1px",
    border: "2px solid #333",
    width: "100%",
    maxWidth: "25vw",
    background: "#111",
  };

  return (
    <div style={stageStyles}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </div>
  );
};

export default Stage;
