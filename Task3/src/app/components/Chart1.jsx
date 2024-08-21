import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Chart1 = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
  
      const prices = data.sparkline_in_7d.price;
      const highestValue = data.price_change_percentage_24h;
      const lineColor = highestValue > 0 ? '#00FF00' : '#FF0000';

      const ctx = chartRef.current.getContext("2d");
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: prices.length }, (_, i) => i),
          datasets: [
            {
              label: "Price",
              data: prices,
              fill: false,
              borderColor: lineColor,
              tension: 0.001
            },
          ],
        },
      });

      return () => {
        chart.destroy();
      };

  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default Chart1;
