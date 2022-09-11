import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie.js";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";
import PieChart from "highcharts-react-official";

highcharts3d(Highcharts);
cylinder(Highcharts);
variablePie(Highcharts);

const options = {
  title: {
    text: "Sales/Marketing",
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Sales",
      data: [1, 5, 6, 8, 1, 6, 8],
    },
    {
      name: "Marketing",
      data: [1.5, 3, 5, 2.5, 2, 1.8, 10],
      color: "rgb(247, 163, 92",
    },
    {
      name: "Digital Marketing",
      data: [5, 8, 2, 10, 6, 4, 15],
      color: "rgb(144, 237, 125)",
    },
  ],
};

const options1 = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Products",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Pie 1",
      color: "#006600",
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
            lineWidth: 1,
          },
        },
      },
      data: [
        {
          name: "Vegitables",
          y: 15,
          sliced: false,
        },
        {
          name: "Fruits",
          y: 20,
          sliced: false,
        },
        {
          name: "Home Appliance",
          y: 10,
          sliced: false,
        },
        {
          name: "Electronics",
          y: 18,
          sliced: false,
        },
        {
          name: "Mobiles",
          y: 23,
          sliced: false,
        },
      ],
    },
  ],
};

const options2 = {
  credits: {
    enabled: false,
  },
  chart: {
    // renderTo: 'container',
    type: "variablepie",
    margin: [0, 0, 0, 0],

    // marginLeft: -100,
    events: {
      load: function () {
        this.renderer
          .circle(
            this.chartWidth / 2,
            this.plotHeight / 2 + this.plotTop,
            this.plotHeight / 4
          )
          .attr({
            fill: "rgba(0,0,0,0)",
            stroke: "#2ec277",
            left: -100,
            "stroke-width": 1,
          })
          .add();
      },
    },
  },
  colors: ["#2ec277", "#2db799", "#b7e886", "#6d5494", "#0077b4"],

  title: {
    text: null,
  },

  legend: {
    align: "right",
    verticalAlign: "top",
    layout: "vertical",
    x: 20,
    y: 100,
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemStyle: {
      font: "17pt Trebuchet MS, Verdana, sans-serif",
      color: "#333333",
    },
  },
  plotOptions: {
    series: {
      stacking: "normal",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
      size: 185,
    },
  },

  series: [
    {
      minPointSize: 10,
      innerSize: "5%",
      zMin: 0,
      name: "Overview",
      data: [
        {
          name: "Loss",
          y: 30,
          z: 35,
          data: [100],
        },
        {
          name: "Profit",
          y: 50,
          z: 55,
        },
        {
          name: "Balanced",
          y: 75,
          z: 100,
        },
      ],
    },
  ],
};

const AdminHome = () => {
  return (
    <div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <hr />

      <div className="row">
        <div
          className="col-md-6"
          style={{
            minWidth: 310,
            maxWidth: 800,
            height: 400,
            margin: "0 auto",
          }}
        >
          <PieChart highcharts={Highcharts} options={options1} />
        </div>
        <div
          className="col-md-6"
          style={{
            minWidth: 310,
            maxWidth: 800,
            height: 400,
            margin: "0 auto",
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={options2} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AdminHome;
