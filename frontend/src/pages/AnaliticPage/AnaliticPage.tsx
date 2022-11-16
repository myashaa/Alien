import React from "react";
import styles from "./AnaliticPage.module.css";
import baseStyles from "../../index.module.css";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'; // ADD THIS

import { Footer } from "../../components/Footer/Footer";
import { LoginationFormWithRegistrationButton } from '../../components/LoginationFormWithRegistrationButton/LoginationFormWithRegistrationButton';

export const AnaliticPage = () => {
  const lineChartData = {
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5
      },
      {
        data: [1216410, 1371390, 1477380],
        label: "Deaths",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };

  return (
    <Line
      width={160}
      height={60}
      data={lineChartData}
    />
  );
};