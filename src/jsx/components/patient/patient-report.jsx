var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

// React-Bootstrap components
var Nav = require('react-bootstrap/lib/nav');
var NavItem = require('react-bootstrap/lib/navitem');

// data layer components
var PatientStore = require('../../stores/patients-store');
var Actions = require('../../actions');

var BasicInfo = require('./basic-info');
var DiagnosticsInfo = require('./diagnostics-info');
var OperationInfo = require('./operation-info');
var SampleInfo = require('./sample-info');

var SideMenu = require('./side-menu');

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(PatientStore, 'onChange')
  ],

  onChange: function() {
    this.setState({
      patient: PatientStore.find(this.props.params.id)
    });
  },

  getInitialState: function(){
      return {
        patient: PatientStore.find(this.props.params.id)
      }
  },

  componentWillMount: function() {
    Actions.getPatient(this.props.params.id);
  },

  render: function() {
    return (
      <div className="container patient-report">
        <div className="row">
            <div className="col-md-1 sidebar">
              <SideMenu id={this.props.params.id}/>
            </div>
            <div className="col-md-11 col-md-offset-1">
              <h3>{this.state.patient.name}</h3>
              <BasicInfo patient={this.state.patient} id="basic-info"/>
              <DiagnosticsInfo patient={this.state.patient} id="diagnostics-info"/>
              <OperationInfo patient={this.state.patient} id="operation-info"/>
              <SampleInfo patient={this.state.patient} id="sample-info"/>
            </div>
        </div>
      </div>
    );
  }

})
