import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { useLocalStorage } from "../utils/useLocalState";
import { drinkType, duplicateDrinkType } from "../types";
import { DrinkCards } from "../components/DrinkCards";
import { NewDrink } from "../components/NewDrink";
import { graphDataCalculator } from "../utils/graphDataCalculator";
import { drinkSorter } from "../utils/drinkSorter";
import { userParameters } from "../utils/userParameters";
import { Button, IconButton, Grid, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Modal } from "../components/Modal";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveIcon from "@mui/icons-material/Save";
import BackspaceIcon from "@mui/icons-material/Backspace";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleDeleteAll = () => {
    setDrinks([]); // установите новый пустой список напитков
  };

  const textik = (
    <div style={{ textAlign: "justify" }}>
      <p>Na tejto stránke sa zobrazujú nápoje pridané používateľom. </p>
      <p>
        Na pridanie nového nápoja kliknite na tlačidlo "Pridanie nápoja", čím sa
        otvorí okno s formulárom na pridanie nového nápoja.{" "}
      </p>
      <p>
        Vo formulári vyberte typ nápoja (napr. pivo, víno, vodka atď.), uveďte
        jeho objem, obsah alkoholu a čas spotreby.{" "}
      </p>
      <p>
        Po vyplnení formulára kliknite na -{" "}
        <Button
          size="small"
          className="drinkcard__del-mui-icon newdrink__mobile-plus-button"
          sx={{ borderRadius: 10 }}
          variant="contained"
          startIcon={<SaveIcon />}
          style={{ background: "#7CA982" }}
        >
          Uložiť
        </Button>{" "}
        čím pridáte nový nápoj, alebo na -{" "}
        <Button
          size="small"
          className="drinkcard__plus-icon newdrink__mobile-del-button"
          sx={{ borderRadius: 10 }}
          variant="contained"
          startIcon={<BackspaceIcon />}
          style={{ background: "#C6685D" }}
        >
          Zrušiť
        </Button>{" "}
        čím zatvoríte formulár bez pridania nového nápoja.{" "}
      </p>
      <p>
        Ak chcete odstrániť niektorý z predtým pridaných nápojov, kliknite na
        tlačidlo -{" "}
        <BackspaceOutlinedIcon
          style={{
            color: "#C6685D",
          }}
        />{" "}
        "Vymazať" vedľa príslušného nápoja.
      </p>
      <p>
        {" "}
        Alebo na tlačidlo -{" "}
        <ContentCopyIcon
          style={{
            color: "#7CA982",
          }}
        />{" "}
        "Kopírovať", aby ste ho zduplikovali.{" "}
      </p>
      <p>Po zapísaní požadovaných údajov stlačte tlačidlo Pokračovať</p>
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
              <Grid item xs={4}>
                <Tooltip title="Presmerovanie na stránku používateľa">
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
                </Tooltip>
              </Grid>
              <Grid item xs={3} className="vymazat-drinks-none">
                <Tooltip title="Odstránenie zoznamu nápojov">
                  <Button
                    onClick={handleDeleteAll}
                    variant="outlined"
                    startIcon={<DeleteForeverIcon />}
                    style={{
                      color: "#C6685D",
                      marginRight: "10px",
                      borderColor: "#C6685D",
                      borderWidth: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    Vymazať nápoje
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Pomôcka">
                  <IconButton onClick={handleOpenModal}>
                    <HelpOutlineIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </div>
          {/* <div
            onClick={() => history.push("/user")}
            className="drinks__edit-user-btn"
          >
            Zmena používateľa
          </div> */}
          <div className="vymazat-drinks-mob vymazat-drinks-pc">
            <Button
              onClick={handleDeleteAll}
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              style={{
                color: "#C6685D",
                marginRight: "10px",
                borderColor: "#C6685D",
                borderWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Vymazať nápoje
            </Button>
          </div>
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
          customHeader=""
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
