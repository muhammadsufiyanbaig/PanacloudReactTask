import React, { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Summary = () => {
  const data = [
    {
      th1: "Market Cap:",
      td1: "$564,665,102,923",
      th2: "Staking Market Cap:",
      td2: "N/A",
    },
    {
      th1: "Circulating Supply:",
      td1: "19,351,006",
      th2: "Staking Yield:",
      td2: "N/A",
    },
    {
      th1: "Total Supply: ",
      td1: "21,000,000",
      th2: "Lending Market Cap:",
      td2: "$23,665,102,923",
    },
    {
      th1: "Max Supply:",
      td1: "21,000,000",
      th2: "Lending Yield:",
      td2: "2.45%",
    },
    {
      th1: "FDV:",
      td1: "$612,782,982,000",
      th2: "TVL:",
      td2: "$564,665,102,923",
    },
    {
      th1: "24 hr Vol:",
      td1: "$22,756,555,955",
      th2: "Inflation:",
      td2: "2.05%",
    },
    {
      th1: "24 hr Avg Vol:",
      td1: "$35,548,249,002",
      th2: "Staking Market Cap:",
      td2: "$564,665,102,923",
    },
  ];

  const webstie = ["www.bitcoin.com"];
  const explorers = ["Blockchair", "Tokenview"];
  const wallets = ["Ledger", "Trezor", "Ledger"];
  const community = [
    "Reddit",
    "Twitter",
    "Facebook",
    "Telegram",
    "YouTube",
    "Discord",
  ];
  const buttons = ["1 Yr", "90 D", "30 D", "7 D", "24 H"];
  const [totalAmount, setTotalAmount] = useState(0);
  const data1 = [
    26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000,
  ];

  const chartRef = useRef(null);

  const updateChart = () => {
    const ctx = chartRef.current.getContext("2d");
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["6/24", "6/25", "6/26", "6/27", "6/28", "6/29", "6/30"],
        datasets: [
          {
            data: data1,
            borderColor: "#006400",
            borderWidth: 3,
            pointRadius: 5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  };

  useEffect(() => {
    updateChart();
  }, [totalAmount]);

  return (
    <div className="h-full mt-14 px-4">
      <div className="flex justify-center md:justify-end space-x-3 mb-4">
        {buttons.map((item, index) => (
          <button
            key={index}
            className="py-1 px-2 text-lg bg-white rounded-md shadow-sm"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row md:justify-center justify-between md:items-start items-center">
        <div className="">
          <div className="relative pb-14 hidden md:block">
            {data.map((item, index) => {
              return (
               <>
               <table key={index} className=" text-left text-gray-500">
                  <tbody className="w-auto">
                    <tr className="bg-white border border-b-2">
                      <th
                        scope="row"
                        className="text-sm md:text-lg w-1/2 md:w-[210px] font-bold text-gray-900 "
                      >
                        {item.th1}
                      </th>
                      <td className="text-sm md:text-lg w-1/2  md:w-[190px]">
                        {item.td1}
                      </td>
                      <th
                        scope="row"
                        className="text-sm md:text-lg w-1/2 md:w-[210px]  font-bold text-gray-900 "
                      >
                        {item.th2}
                      </th>
                      <td className="text-sm md:text-lg w-1/2 md:w-[190px]">
                        {item.td2}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </>
              );
            })}
          </div>
          <div className="relative pb-14 block md:hidden">
  {data.map((item, index) => {
    return (
      <table key={index} className="text-left text-gray-500 md:hidden">
        {/* Add md:hidden to hide the table on screens larger than mobile */}
        <tbody className="w-auto">
          <tr className="bg-white border border-b-2">
            <th
              scope="row"
              className="px-2 py-1 text-sm  w-[185px]  font-bold text-gray-900"
            >
              {item.th1}
            </th>
            <td className="px-2 py-1 text-sm w-[135px] ">
              {item.td1}
            </td>
          </tr>
          <tr className="bg-white border border-b-2">
            <th
              scope="row"
              className="px-2 py-1 text-sm w-[185px] font-bold text-gray-900"
            >
              {item.th2}
            </th>
            <td className="px-2 py-1 text-sm  w-[135px] ">
              {item.td2}
            </td>
          </tr>
        </tbody>
      </table>
    );
  })}
</div>

          <div class="space-y-3">
  <div class="flex flex-col md:flex-row md:space-x-5">
    <p class="font-bold py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      Website:
    </p>
    <p class="py-1 px-2 bg-white text-sm md:text-lg rounded-sm shadow-sm">
      {webstie[0]}
    </p>
  </div>
  <div class="flex flex-col md:flex-row md:space-x-5">
    <p class="font-bold py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      Explorers:
    </p>
    <p class="py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      {explorers[0]}
    </p>
    <p class="py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      {explorers[1]}
    </p>
  </div>
  <div class="flex flex-col md:flex-row md:space-x-5">
    <p class="font-bold py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      Wallets:
    </p>
    <div class="flex flex-col md:flex-row md:space-x-2">
      {wallets.map((item, index) => (
      <div key={index}>
        <p class="py-1 px-2 bg-white text-sm md:text-lg rounded-sm shadow-sm">
          {item}
        </p>
      </div>
      ))}
    </div>
  </div>
  <div class="flex flex-col md:flex-row md:space-x-5">
    <p class="font-bold py-1 px-2 text-sm md:text-lg bg-white rounded-sm shadow-sm">
      Community:
    </p>
    <div class="flex flex-col md:flex-row md:space-x-2">
      {community.map((item, index) => (
      <div key={index}>
        <p class="py-1 px-2 bg-white text-sm md:text-lg rounded-sm shadow-sm">
          {item}
        </p>
      </div>
      ))}
    </div>
  </div>
</div>

        </div>
        <div className="md:ml-10 mt-6 md:mt-0 bg-white w-[100%] md:w-2/4 ">
          <canvas ref={chartRef} width={500} height={360}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Summary;
