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
    console.log("LOL", n);
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
        label: "alkohol v krvi",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(220,56,6,100)",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
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
    tooltips: { enabled: true },
    scales: {
      xAxes: [
        {
          display: true,
        },
      ],
    },
  };

  return (
    <div className="container bac__container">
      <div className="Logo bac__logo" onClick={goHome}>
        <h1>Alkoholový analyzátor</h1>
      </div>
      <div className="bac__buttons">
        <h2 onClick={editUser} className="bac__edit-user-button">
          Upraviť používateľa
        </h2>
        <h2 onClick={editDrinks} className="bac__edit-drinks-button">
          Upraviť nápoje
        </h2>
      </div>
      <div className="bac__info-container">
        <div className="bac__main-text">
          <h2>
            Obsah alkoholu v krvi je{" "}
            <b>{Number(currentBac).toFixed(2)} promile</b>
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
              Budete triezvy o{" "}
              <b>
                {soberingTime(graphBacData, soberingIdx, eliminationRate)}{" "}
                hodiny po skončení pitia.
              </b>
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
          />
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};
