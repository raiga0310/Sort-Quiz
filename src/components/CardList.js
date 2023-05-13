import React from "react";
import { GridStack } from "gridstack";
import FlippingCard from "./FlippingCard";

import "gridstack/dist/gridstack.min.css";

const WIDTH = 2;

const CardList = ({ cards, setCardIndexes }) => {
  React.useEffect(() => {
    const gs = GridStack.init({ disableResize: true, row: 2 })

    gs.on("dragstop", () => {
      const indexes = gs.getGridItems().map((e) => e.gridstackNode?.x / WIDTH);
      setCardIndexes(indexes);
    })

    return () => {
      gs.destroy(false)
    }
  }, [setCardIndexes])

  return (
    <div className="grid-stack">
      {cards.map((card, index) => (
        <div key={index} index={index} class="grid-stack-item" gs-w={WIDTH}>
          <FlippingCard cardData={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
