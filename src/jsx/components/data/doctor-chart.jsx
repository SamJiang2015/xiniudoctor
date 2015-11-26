var React = require('react');
var BarChart = require('react-chartjs').Bar;
var TestData = require('../../test-data');
var SideMenu = require('./side-menu');

module.exports = React.createClass({
  render: function() {

    var chartData = {
          labels : ["一月","二月","三月","四月","五月","六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
          datasets : [
              {
                  label: "主刀",
                  fillColor : "#48A497",
                  strokeColor : "#48A4D1",
                  data : TestData.test_patient_doctor_data[0]
              },
              {
                  label: "一助",
                  fillColor : "rgba(73,188,170,0.4)",
                  strokeColor : "rgba(72,174,209,0.4)",
                  data : TestData.test_patient_doctor_data[1]
              },
              {
                  label: "二助",
                  fillColor : "rgba(73,188,170,0.4)",
                  strokeColor : "rgba(72,174,209,0.4)",
                  data : TestData.test_patient_doctor_data[2]
              }
          ]
      };

    var chartOptions = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 sidebar">
            <SideMenu id={this.props.params.id}/>
          </div>
          <div className="col-md-10 col-md-offset-1">
            <h3>本医生病人统计（主刀、一助、二助）</h3>
            <BarChart data={chartData} options={chartOptions} width="700" height="400"/>
          </div>
        </div>
      </div>
    );
  }
});
