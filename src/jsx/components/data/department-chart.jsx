var React = require('react');
var LineChart = require('react-chartjs').Line;
var TestData = require('../../test-data');
var SideMenu = require('./side-menu');

module.exports = React.createClass({
  render: function() {

    // calculate the total number of patients for the dept for each month
    var patientDeptTotalData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var patientGroupData = TestData.test_patient_group_data;

    for (var i=0; i<12; i++) {
        patientDeptTotalData[i] = patientGroupData[0][i] + patientGroupData[1][i] +
                                 patientGroupData[2][i] + patientGroupData[3][i];
    }

    var chartData = {
    labels: ["一月","二月","三月","四月","五月","六月","七月", "八月", "九月", "十月", "十一月", "十二月"],
    datasets: [
        {
            label: "全科室病人总数",
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: patientDeptTotalData
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
            <h3>全科室病人总数</h3>
            <LineChart data={chartData} options={chartOptions} width="700" height="400"/>
          </div>
        </div>
      </div>
    );
  }
});
