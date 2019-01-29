// Temperature realtime chart

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import axios from 'axios';

class TempLineChart extends React.PureComponent {

  state = {
    data: null,
  };

  render() {
    const bt_id = this.props.bt_id
    let ttemp = 0;

    function initialize(device) {
                 axios.get("/api/dashboard/temp/" + device + "?format=json")
                   .then(res => {
                 ttemp = res.data.temp;
                 })
                 .catch(error => {
                   ttemp = 0;
                   console.log(error.res);
                 });
    }

    initialize(bt_id);
    this.interval = setInterval(() => {
          initialize(bt_id);
    }, 3000);

    return (
      <Line height={110}
        data={{
          datasets: [{
            data: [],
            label: '온도',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
          }]
        }}
        options={{
          scales: {
            xAxes: [{
              type: 'realtime',
              realtime: {
                duration: 30000,    // data in the past 20000 ms will be displayed
                delay: 5000,        // delay of 1000 ms, so upcoming values are known before plotting a line
                pause: false,       // chart is not paused
                ttl: undefined,     // data will be automatically deleted as it disappears off the chart
                refresh: 3000,
                onRefresh: function(chart) {
                  chart.data.datasets.forEach(function(dataset) {
                    dataset.data.push({
                      x: Date.now(),
                      y: ttemp
                    });
                  });
                },
              }
            }]
          },
        tooltips: {
          mode: 'nearest',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        plugins: {
            streaming: {            // per-chart option
                frameRate: 30       // chart is drawn 30 times every second
            }
        }
        }}
      />
    );
  }
}


export default TempLineChart;
