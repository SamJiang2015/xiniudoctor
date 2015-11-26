var React = require('react');
var Reflux = require('reflux');
// package that provides a react-router wrapper for react-bootstrap elements
var LinkContainer = require('react-router-bootstrap').LinkContainer;

// React-Bootstrap components
var Nav = require('react-bootstrap/lib/nav');
var NavItem = require('react-bootstrap/lib/navitem');

// data layer components
var PatientStore = require('../../stores/patients-store');
var Actions = require('../../actions');

// other components
var PatientBasicInfo = require('./basic-info');
var PatientOperations = require('./patient-operations');
var PatientDiagnostics = require('./patient-diagnostics');
var PatientTimeline = require('../timeline/patient-timeline');
var Constants = require('../../constants');

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(PatientStore, 'onChange')
  ],

  onChange: function() {
    this.setState({
      activeTabNumber: this.state.activeTabNumber,
      patient: PatientStore.find(this.props.params.id)
    });
  },

  getInitialState: function(){
      return {
        activeTabNumber: 1,
        patient: PatientStore.find(this.props.params.id)
      }
  },

  handleSelect: function(activeKey) {
      this.setState({
        activeTabNumber: activeKey
      });
  },

  componentWillMount: function() {
    Actions.getPatient(this.props.params.id);
  },

  renderPatientInfo: function() {
      var content = null;

      switch(this.state.activeTabNumber) {
        case 1:
          content=(<PatientBasicInfo patient={this.state.patient} />);
          break;
        case 2:
          content=(<PatientOperations patient={this.state.patient} />);
          break;
        case 3:
            content=(<PatientDiagnostics patient={this.state.patient} />);
            break;
        case 4:
          content=(<PatientTimeline
            patient={this.state.patient}
            filter={Constants.TimelineEventType.ALL}/>);
          break;
      }

      return content;
  },

  render: function() {

    return(
      <div className="patient-detail col-md-10 col-md-offset-1">
        <br/>
            <Nav bsStyle="pills" justified activeKey={this.state.activeTabNumber} onSelect={this.handleSelect}>
              <NavItem eventKey={1}>基本信息</NavItem>
              <NavItem eventKey={2}>手术信息</NavItem>
              <NavItem eventKey={3}>诊断信息</NavItem>
              <NavItem eventKey={4}>全部信息</NavItem>
            </Nav>
            {this.renderPatientInfo()}
          </div>
    );
  },
});
