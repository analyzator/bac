import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Line } from "react-chartjs-2";
import { bacStatus } from "../utils/bacStatus";
import { userParameters } from "../utils/userParameters";
import "chartjs-plugin-annotation";
import { ChartOptions } from "chart.js";
import { soberingTime } from "../utils/soberingTime";
import { useLocalStorage } from "../utils/useLocalState";
import { Modal } from "../components/Modal";
import { Button } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LiquorIcon from "@mui/icons-material/Liquor";
import HomeIcon from "@mui/icons-material/Home";

interface Props
  extends RouteComponentProps<
    { id: string },
    {},
    {
      currentBac: number | any;
      graphBacData: number[] | any;
      curBacIdx: number | any;
      soberingIdx: number | any;
    }
  > {}

export const BacInfo: React.FC<Props> = ({ location, history, match }) => {
  const { eliminationRate } = userParameters(match.params.id);
  const [currentBac, setcurrentBac] = useLocalStorage("currentBac", []);
  const [graphBacData, setgraphBacData] = useLocalStorage("graphBacData", []);
  const [curBacIdx, setcurBacIdx] = useLocalStorage("curBacIdx", []);
  const [soberingIdx, setSoberingIdx] = useLocalStorage("soberingIdx", []);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (location.state !== undefined) {
      setcurrentBac(location.state.currentBac);
      setgraphBacData(location.state.graphBacData);
      setcurBacIdx(location.state.curBacIdx);
      setSoberingIdx(location.state.soberingIdx);
    } // eslint-disable-next-line
  }, [location.state]);

  let labels = [];
  for (let n in graphBacData) {
    labels.push((parseFloat(n) * 0.01).toFixed(2));
    // console.log("LOL", n);
  }

  const editDrinks = () => {
    history.push(`/user/drinks/${match.params.id}`);
  };

  const editUser = () => {
    history.push("/user");
  };

  const goHome = () => {
    history.push("/");
  };

  const description = bacStatus(currentBac / 10);

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "Promile",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(220,56,6,100)",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 2,
        data: graphBacData,
      },
    ],
  };
  const options = {
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: (curBacIdx * 0.01).toFixed(2),
          borderColor: "black",
          borderWidth: 1,
          borderDash: [9, 9],
          label: {
            backgroundColor: "rgba(220,56,6,100)",
            content: "Aktuálna úroveň ‰",
            enabled: true,
          },
        },
      ],
    },
    // tooltips: { enabled: true },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Čas v hodinách",
          },

          // ticks: {
          //   callback: function (value: string, index: any, values: any) {
          //     // Округляем значение до целого числа
          //     const hour = Math.round(parseFloat(value));
          //     // Получаем значение времени в нужном формате
          //     return moment({ hour }).format("HH:mm");
          //   },
          //   // Настраиваем значения для оси x от 0 до 24
          //   // min: 0,
          //   // max: 50,
          //   // stepSize: 1,
          // },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Úroveň v ‰",
          },
        },
      ],
    },
  };

  const bacText = (
    <div style={{ textAlign: "justify" }}>
      <p>
        Opitosť alkoholom má výrazný vplyv na vašu schopnosť viesť vozidlo,
        takže výpočet, ktorý tento faktor nezohľadňuje, nemôže byť presný.
      </p>
      <p>
        Výsledky výpočtu môžu byť nedostatočné na posúdenie schopnosti a
        oprávnenia viesť vozidlo, ak je prítomná opitosť.
      </p>
      <p>
        Vodič musí vždy niesť zodpovednosť za svoje konanie a nesmie sa
        spoliehať len na výsledky výpočtu, najmä ak je prítomná intoxikácia
        alkoholom.
      </p>
      <p>
        Právne predpisy stanovujú určité limity intoxikácie alkoholom, ktoré sa
        nesmú prekročiť pri riadení vozidla.
      </p>
    </div>
  );

  return (
    <div className="container bac__container">
      <div className="Logo bac__logo" onClick={goHome}>
        <h1>Alkoholový Analyzátor</h1>
      </div>
      {/* <div className="bac__buttons">
        <h2 onClick={editUser} className="bac__edit-user-button">
          Upraviť používateľa
        </h2>
        <h2 onClick={editDrinks} className="bac__edit-drinks-button">
          Upraviť nápoje
        </h2>
      </div> */}
      <div className="result-buttons">
        <div className="homepage-button-bac">
          <Button
            onClick={goHome}
            sx={{ borderRadius: 10 }}
            variant="outlined"
            startIcon={<HomeIcon />}
            style={{
              color: "#7CA982",
              marginRight: "10rem",
              borderColor: "#7CA982",
              borderWidth: "2px",
              fontWeight: "bold",
            }}
          >
            Domovská stránka
          </Button>
        </div>

        <Button
          onClick={editUser}
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
        <Button
          onClick={editDrinks}
          sx={{ borderRadius: 10 }}
          variant="outlined"
          startIcon={<LiquorIcon />}
          style={{
            color: "#7CA982",
            borderColor: "#7CA982",
            borderWidth: "2px",
            fontWeight: "bold",
          }}
        >
          Upraviť nápoje
        </Button>
      </div>

      <div className="home-btn-bac">
        <Button
          onClick={goHome}
          startIcon={<HomeIcon />}
          sx={{ borderRadius: 5 }}
          variant="outlined"
          style={{
            marginBottom: "4rem",
            color: "#7CA982",
            borderColor: "#7CA982",
            borderWidth: "2px",
            fontWeight: "bold",
          }}
        >
          Domovská stránka
        </Button>
      </div>

      <div className="bac__info-container">
        <div className="bac__main-text">
          <h2>
            Obsah alkoholu v krvi je <b>{Number(currentBac).toFixed(2)} ‰</b>
          </h2>
          <h5>
            To znamená, že v 1000 mililitroch krvi, ktorá cirkuluje vo vašom
            tele je {Number(currentBac).toFixed(2)} gram čistého alkoholu.
          </h5>
        </div>
        <hr className="bac__line" />
        <h3 className="bac__description">{description}</h3>
        <hr className="bac__line" />
        <div className="bac__main-text">
          {currentBac === 0 ? (
            <h2>Pravdepodobne ste už triezvy</h2>
          ) : (
            <h2>
              Približne po{" "}
              <b>
                {soberingTime(graphBacData, soberingIdx, eliminationRate)} hod.
              </b>
              od zápisu údajov bude hladina alkoholu v krvi nulová.
            </h2>
          )}
          <h5>
            Je to hypotéza! Tento čas by sa nemal využívať na vypočet kedy
            môžete sadnúť za volant!
          </h5>
        </div>
        <div className="bac__graph-container">
          <Line
            data={graphData as any}
            legend={{ display: false }}
            options={options as ChartOptions}
          >
            <canvas className="chartjs-render-monitor" />
          </Line>
        </div>
      </div>
      {modal && (
        <Modal
          customHeader="bac__modal-content-customHeader"
          customClass="bac__modal-content-custom"
          title="Pozor!"
          content={bacText}
          btnText="Rozumiem"
          setModal={setModal}
        />
      )}
    </div>
  );
};
