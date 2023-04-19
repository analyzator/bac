import React from "react";
import { RouteComponentProps } from "react-router";
import "../Style.css";

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ history }) => {
  const clickHandler = () => {
    history.push("/user");
  };

  return (
    <div className="container home__container">
      <div className="Logo home__logo">
        <h1>Alkoholový analyzátor</h1>
      </div>
      <h2>Zistite hladinu alkoholu v krvi</h2>
      <button onClick={clickHandler} className="home__button">
        Start
      </button>
    </div>
  );
};

export default Home;
