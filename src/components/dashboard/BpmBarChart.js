// Temperature realtime chart

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import axios from 'axios';


class BpmBarChart extends React.PureComponent {

  state = {
    data: null,
  };

  render() {
    const bt_id = this.props.bt_id
    let tbpm = 0;

    function initialize(device) {
                 axios.get("/api/dashboard/bpm/" + device + "?format=json")
                   .then(res => {
                 tbpm = res.data.bpm;
                 })
                 .catch(error => {
                   tbpm = 0;
                   console.log(error.res);
                 });
    }

    initialize(bt_id);
    this.interval = setInterval(() => {
          initialize(bt_id);
    }, 3000);

    return (
      <Bar height={110}
        data={{
          datasets: [{
            data: [],
            label: '심박수',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
                      y: tbpm
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


export default BpmBarChart;
