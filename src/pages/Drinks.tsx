import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useLocalStorage } from "../utils/useLocalState";
import { drinkType, duplicateDrinkType } from "../types";
import { DrinkCards } from "../components/DrinkCards";
import { NewDrink } from "../components/NewDrink";
import { graphDataCalculator } from "../utils/graphDataCalculator";
import { drinkSorter } from "../utils/drinkSorter";
import { userParameters } from "../utils/userParameters";

interface DrinksProps extends RouteComponentProps<{ id: string }> {}

export const Drinks: React.FC<DrinksProps> = ({ match, history }) => {
  const [drinks, setDrinks] = useLocalStorage("drinks", []);
  const [duplicateDrink, setDuplicateDrink] =
    useState<duplicateDrinkType | null>(null);
  const [addingNewDrink, setAddingNewDrink] = useState(false);

  const { widmarkFactor, absorptionRate, eliminationRate, weight } =
    userParameters(match.params.id);

  const calculateBAC = () => {
    const { graphBacData, currentBac, curBacIdx } = graphDataCalculator({
      widmarkFactor,
      absorptionRate,
      eliminationRate,
      weight,
      drinks,
    });
    history.push({
      pathname: `/user/bacinfo/${match.params.id}`,
      state: { currentBac, graphBacData, curBacIdx },
    });
  };

  const addDuplicateDrink = (drink: drinkType) => {
    setDuplicateDrink({
      type: drink.type,
      volume: drink.volume,
      unit: drink.unit,
      abv: drink.abv,
    });
    setAddingNewDrink(true);
  };

  const closeForm = (
    type: string,
    volume: string,
    unit: string,
    abv: string,
    timePassed: string
  ) => {
    setAddingNewDrink(false);
    setDuplicateDrink(null);
    const temp = [{ type, volume, unit, abv, timePassed }, ...drinks];
    const sortedDrinks = drinkSorter(temp, true);
    setDrinks(sortedDrinks);
  };

  const cancelAdding = () => {
    setAddingNewDrink(false);
    setDuplicateDrink(null);
  };

  const deleteDrink = (i: number) => {
    const temp = [...drinks];
    temp.splice(i, 1);
    setDrinks(temp);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="container drinks__container">
      <div className="Logo drinks__logo" onClick={goHome}>
        <h1 style={{ textAlign: "center" }}>Alkoholový analyzátor</h1>
      </div>
      <h2
        onClick={() => history.push("/user")}
        className="drinks__edit-user-btn"
      >
        Zmena používateľa
      </h2>
      <div
        className="drinks__main-btns"
        style={{ display: "grid", justifyItems: "center" }}
      >
        {/* <p
          style={{
            fontFamily: "b612, sans-serif",
            width: 500,
            textAlign: "center",
          }}
        >
          Pri výbere položky "Pridanie nápoja" uveďte druh nápoja, ktorý ste
          vypili, objem, silu v % a ako dávno ste ho pili.
        </p> */}
        {/* <p
          style={{
            fontFamily: "b612, sans-serif",
            width: 500,
            textAlign: "center",
          }}
        >
          Ak vyberiete "Uložiť ", vybrané nápoje sa uložia a budete presmerovaní
          na stránku výpočtu hladiny alkoholu v krvi.
        </p> */}
        <div style={{ display: "flex" }}>
          <button
            onClick={() => setAddingNewDrink(true)}
            className="drinks__main-btn drinks__add-btn"
          >
            Pridanie nápoja
          </button>
          <button
            disabled={drinks.length === 0 ? true : false}
            onClick={() => {
              calculateBAC();
            }}
            className="drinks__main-btn drinks__submit-btn"
          >
            Uložiť
          </button>
        </div>
      </div>

      <div className="drinks__drink-card-container">
        <NewDrink
          closeForm={closeForm}
          duplicateDrinkData={duplicateDrink}
          addingNewDrink={addingNewDrink}
          cancelAdding={cancelAdding}
        />
        <DrinkCards
          drinks={drinks}
          deleteDrink={deleteDrink}
          addDuplicateDrink={addDuplicateDrink}
        />{" "}
      </div>
    </div>
  );
};
