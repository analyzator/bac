import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import "../Style.css";
import { Modal } from "../components/Modal";

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ history }) => {
  // const clickHandler = () => {
  //   history.push("/user");
  // };

  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };

  const handleClickResetData = () => {
    localStorage.clear();
    history.push("/user");
  };

  const hasParams = localStorage.getItem("userParams") !== null;

  const clickHandler = () => {
    if (hasParams) {
      history.push("/user");
    } else {
      history.push("/user");
    }
  };

  const sure = (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "3rem" }}>
        <button className="home-new-user-button" onClick={handleClickResetData}>
          Nový používateľ
        </button>
      </div>
      <p>
        Pri výbere nového používateľa budú všetky predchádzajúce údaje vymazané.
      </p>
    </div>
  );

  // const SureButton = <div onClick={handleClickResetData}>Nový používateľ</div>;

  return (
    <div className="container home__container">
      <div className="Logo home__logo">
        <h1>Alkoholový analyzátor</h1>
      </div>
      <h2>Zistite hladinu alkoholu v krvi</h2>
      {/* <button onClick={clickHandler} className="home__button">
        Start
      </button> */}
      {hasParams ? (
        <div>
          <div>
            <button onClick={clickHandler} className="home__button">
              Pokračovať
            </button>
          </div>
          <div className="alebo-text">alebo</div>
          <div>
            <button className="home-new-user-button" onClick={handleOpenModal}>
              Vybrať nového používateľa
            </button>
          </div>
        </div>
      ) : (
        <button onClick={clickHandler} className="home__button">
          Začať
        </button>
      )}
      {modal && (
        <Modal
          customHeader="bac__modal-content-customHeader"
          customClass="bac__modal-content-custom"
          title="Pozor!"
          content={sure}
          btnText="Späť"
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Home;
