import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import '../Component/Chart.css';

const PieChart = () => {
  useEffect(() => {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
  }, []);

  const drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    const options = {
      title: 'My Daily Activities',
      is3D: true,
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
        ]}
        options={{
          title: 'My Daily Activities',
          is3D: true,
        }}
        graph_id="piechart_3d"
        width={'900px'}
        height={'500px'}
      />
    </div>
  );
};

export default PieChart;
