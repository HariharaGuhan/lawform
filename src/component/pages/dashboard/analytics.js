import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaGreaterThan,FaLessThan  } from "react-icons/fa6";
const ChartComponent = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    const data1 = [20, 30, 15, 25, 10];
    const backgroundColors1 = [
      "#603900",
      "#ae6900",
      "#ff9900",
      "#ffbe5b",
      "#2a1900",
      "",
    ];
    const labels1 = [
      "Criminal cases",
      "Civil cases",
      "Family cases",
      "Corporate cases",
      "Labour cases",
    ];
    const config1 = {
      type: "doughnut",
      data: {
        labels: labels1,
        datasets: [
          {
            label: "Values",
            data: data1,
            backgroundColor: backgroundColors1,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const data2 = [100, 125, 200, 150, 130];
    const backgroundColors2 = [
      "#603900",
      "#ae6900",
      "#ff9900",
      "#ffbe5b",
      "#2a1900",
      "",
    ];
    const labels2 = ["Chennai", "Madurai", "coimbatore", "Tirchy", "Tiruppur"];
    const config2 = {
      type: "doughnut",
      data: {
        labels: labels2,
        datasets: [
          {
            label: "Values",
            data: data2,
            backgroundColor: backgroundColors2,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Destroy previous instances if they exist
    if (chartInstance1.current !== null) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current !== null) {
      chartInstance2.current.destroy();
    }

    // Create new chart instances
    const ctx1 = chartRef1.current.getContext("2d");
    chartInstance1.current = new Chart(ctx1, config1);

    const ctx2 = chartRef2.current.getContext("2d");
    chartInstance2.current = new Chart(ctx2, config2);

    // Cleanup function
    return () => {
      if (chartInstance1.current !== null) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current !== null) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 mt-3">
            <h5 className="text-center">Lastweek <span><FaLessThan /></span> <span><FaGreaterThan/></span></h5>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4" style={{ width: "30%", height: "30%" }}>
            <canvas ref={chartRef1}></canvas>
          </div>
          <div className="col-lg-2"></div>

          <div className="col-lg-4" style={{ width: "30%", height: "30%" }}>
            <canvas ref={chartRef2}></canvas>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col " style={{color:"#ffd97a"}}>SNo</th>
                  <th scope="col">Case number</th>
                  <th scope="col">Lawyer name</th>
                  <th scope="col">Type of case</th>
                  <th scope="col">Hearing date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{color:"#ffd97a"}}>1</th>
                  <td>83739280</td>
                  <td>kumaresan</td>
                  <td>crime</td>
                  <td>Hearing date</td>
                </tr>
                <tr>
                  <th scope="row" style={{color:"#ffd97a"}}>2</th>
                  <td>83739280</td>
                  <td>Suresh</td>
                  <td>civil</td>
                  <td>Hearing date</td>
                </tr>
                <tr>
                  <th scope="row" style={{color:"#ffd97a"}}>3</th>
                  <td>83739280</td>
                  <td>Basker</td>
                  <td>Crime</td>
                  <td>Hearing date</td>
                </tr>
                <tr>
                  <th scope="row" style={{color:"#ffd97a"}}>4</th>
                  <td>83739280</td>
                  <td>Santha</td>
                  <td>Crime</td>
                  <td>Hearing date</td>
                </tr>
                <tr>
                  <th scope="row" style={{color:"#ffd97a"}}>5</th>
                  <td>83739280</td>
                  <td>Dhilip</td>
                  <td>Crime</td>
                  <td>Hearing date</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
