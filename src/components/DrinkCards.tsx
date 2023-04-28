import React from "react";
import { drinkType } from "../types";
import { DrinkTitle } from "./DrinkTitle";
import { Tooltip } from "@mui/material";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface DrinkCardsProps {
  deleteDrink: (i: number) => void;
  addDuplicateDrink: (drink: drinkType) => void;
  drinks: drinkType[] | null;
}

export const DrinkCards: React.FC<DrinkCardsProps> = ({
  deleteDrink,
  addDuplicateDrink,
  drinks,
}) => {
  if (!drinks) {
    return null;
  }
  const drinksJSX = drinks.map((drink: drinkType, i: number) => {
    return (
      <div className="drinkcard__container" key={i}>
        <DrinkTitle drink={drink} />
        <div className="drinkcard__parameter-container">
          <h4>Koľko?</h4>
          <h3>
            <b>{drink.volume}</b>
            {drink.unit}{" "}
          </h3>
        </div>
        <hr className="drinkcard__line" />
        <div className="drinkcard__parameter-container">
          <h4>Aké tvrdé?</h4>
          <h3>
            <b>{drink.abv}</b>%
          </h3>
        </div>
        <div className="drinkcard__parameter-container">
          <h4>Koľko hodín dozadu?</h4>
          <h3>
            <b>{drink.timePassed}</b>{" "}
            {drink.timePassed === "1" ? "Hodina" : "Hodin"}
            {window.screen.width < 680 ? " " : null}
          </h3>
        </div>
        <Tooltip title="Vymazať">
          <BackspaceOutlinedIcon
            className="drinkcard__plus-icon drinkcard__action-icon"
            style={{
              color: "#C6685D",
            }}
            onClick={() => deleteDrink(i)}
            fontSize="medium"
          />
        </Tooltip>
        <Tooltip title="Kopírovať">
          <ContentCopyIcon
            className="drinkcard__del-mui-icon drinkcard__action-icon"
            style={{
              color: "#7CA982",
            }}
            onClick={() => addDuplicateDrink(drink)}
            fontSize="medium"
          />
        </Tooltip>
      </div>
    );
  });

  return <div className="drinkcard__drinkcards">{drinksJSX}</div>;
};
