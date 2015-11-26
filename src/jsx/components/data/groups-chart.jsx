var React = require('react');
var DoughnutChart = require('react-chartjs').Doughnut;
var TestData = require('../../test-data');
var SideMenu = require('./side-menu');

module.exports = React.createClass({
  render: function() {

    ///////////////////////////////////////////////////////////////////////////////////
    // calculate the total number of patients for each group for the 6-month period
    var patientGroupTotalData = [0,0,0,0];
    for (var i=0; i<4; i++) {
        for (var j=0; j<12; j++) {
            patientGroupTotalData[i] += TestData.test_patient_group_data[i][j];
        }
    }

    var chartData = [
      {
          label: "第一组",
          value: patientGroupTotalData[0],
          color:"#878BB6"
      },
      {
          label: "第二组",
          value : patientGroupTotalData[1],
          color : "#4ACAB4"
      },
      {
          label: "第三组",
          value : patientGroupTotalData[2],
          color : "#FF8153"
      },
      {
          label: "第四组",
          value : patientGroupTotalData[3],
          color : "#FFEA88"
      }
    ];

    var chartOptions = {
         segmentShowStroke : true,
         animateScale : true
    };

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 sidebar">
            <SideMenu id={this.props.params.id}/>
          </div>
          <div className="col-md-10 col-md-offset-1">
            <h3>各专家组病人总数</h3>
            <DoughnutChart data={chartData} options={chartOptions} width="700" height="400"/>
          </div>
        </div>
      </div>
    );
  }
});
