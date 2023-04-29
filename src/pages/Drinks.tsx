import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useLocalStorage } from "../utils/useLocalState";
import { drinkType, duplicateDrinkType } from "../types";
import { DrinkCards } from "../components/DrinkCards";
import { NewDrink } from "../components/NewDrink";
import { graphDataCalculator } from "../utils/graphDataCalculator";
import { drinkSorter } from "../utils/drinkSorter";
import { userParameters } from "../utils/userParameters";
// import { InfoModal } from "../components/InfoModal";
import { Button, IconButton, Grid } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Modal } from "../components/Modal";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

interface DrinksProps extends RouteComponentProps<{ id: string }> {}

export const Drinks: React.FC<DrinksProps> = ({ match, history }) => {
  const [drinks, setDrinks] = useLocalStorage("drinks", []);
  const [duplicateDrink, setDuplicateDrink] =
    useState<duplicateDrinkType | null>(null);
  const [addingNewDrink, setAddingNewDrink] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { widmarkFactor, absorptionRate, eliminationRate, weight } =
    userParameters(match.params.id);
  const [modal, setModal] = useState(false);

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

  // const goHome = () => {
  //   history.push("/");
  // };

  const handleOpenModal = () => {
    setModal(true);
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  const textik = (
    <div>
      Aplikácia umožňuje používateľovi vybrať nápoj z poskytnutého zoznamu a
      určiť jeho obsah alkoholu a objem. V hornej časti obrazovky môže
      používateľ vybrať typ nápoja (napr. víno, pivo, vodka, tequila atď.) a
      následne sa zobrazí vybraný nápoj. Po výbere typu nápoja sa otvorí
      rozbaľovacia ponuka so zoznamom rôznych typov nápojov. Používateľ si môže
      vybrať požadovaný typ a potom zadať počet vypitých nápojov (v mililitroch)
      alebo počet štandardných vypitých nápojov. Aplikácia umožňuje
      používateľovi vybrať nápoj z poskytnutého zoznamu a určiť jeho obsah
      alkoholu a objem. V hornej časti obrazovky môže používateľ vybrať typ
      nápoja (napr. víno, pivo, vodka, tequila atď.) a následne sa zobrazí
      vybraný nápoj. Po výbere typu nápoja sa otvorí rozbaľovacia ponuka so
      zoznamom rôznych typov nápojov. Používateľ si môže vybrať požadovaný typ a
      potom zadať počet vypitých nápojov (v mililitroch) alebo počet
      štandardných vypitých nápojov.
    </div>
  );

  return (
    <>
      <div className="container drinks__container">
        {/* <div className="Logo drinks__logo" onClick={goHome}>
          <h1 style={{ textAlign: "center" }}>Alkoholový analyzátor</h1>
        </div> */}

        <div className="drinks__main-btns" style={{ display: "grid" }}>
          <div className="drinks__USER-BTN">
            <Grid className="drinks__USER-BTN-SPACE">
              <Grid item xs={6}>
                <Button
                  onClick={() => history.push("/user")}
                  sx={{ borderRadius: 10 }}
                  variant="outlined"
                  startIcon={<ManageAccountsIcon />}
                  style={{
                    color: "#7CA982",
                    marginRight: "10px",
                    borderColor: "#7CA982",
                    borderWidth: "2px",
                    fontWeight: "bold",
                  }}
                >
                  Upraviť používateľa
                </Button>
              </Grid>
              <Grid item xs={6}>
                <IconButton onClick={handleOpenModal}>
                  <HelpOutlineIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          {/* <div
            onClick={() => history.push("/user")}
            className="drinks__edit-user-btn"
          >
            Zmena používateľa
          </div> */}

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
              Pokračovať
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

      {modal && (
        <Modal
          customClass="bac__modal-content-custom"
          title="Pomôcka"
          content={textik}
          btnText="Zavrieť"
          setModal={setModal}
        />
      )}
    </>
  );
};
