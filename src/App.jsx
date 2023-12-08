import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data, index) => data.month),

    datasets: [
      {
        label: "2022",
        data: UserData.map((data) => data.lastYear),
        borderColor: "#C8A200",
        backgroundColor: "#C8A200",
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        // fill: true,
      },
      {
        label: "2023",
        data: UserData.map((data) => data.thisYear),
        borderColor: "#0092CF",
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        pointRadius: 5,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
      },
    ],
  });
  return (
    <>
      <LineChart chartData={userData} />
    </>
  );
}

export default App;
