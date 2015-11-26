var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var Actions = require('../../actions');
var PatientsStore = require('../../stores/patients-store');
var DataHelper=require('../../utils/data-helper');

var Table = require('react-bootstrap/lib/table');
var SideMenu = require('./side-menu');

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(PatientsStore, 'onChange'),
    Router.History
  ],

  getInitialState: function() {
    return {
      patients: []
    }
  },

  componentWillMount: function() {
    Actions.getPatients();
  },

  render: function() {
    return <div className="container patient-list">
      <div className="row">
        <div className="col-md-1 sidebar">
          <ul className="nav nav-sidebar">
              <li><Link to='/patients'>已有病人</Link></li>
              <li><Link to='/patients/add'>新病人</Link></li>
          </ul>
        </div>
        <div className="col-md-10 col-md-offset-1">
          <h2>我的病人</h2>
          {this.renderFilters()}
          <Table responsive bordered condensed hover>
            <caption>点击任一病人编号以获得该病人详细信息</caption>
            <thead>
                <tr>
                  <th>编号</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>诊断</th>
                  <th>入院日期</th>
                  <th>手术日期</th>
                  <th>出院日期</th>
                </tr>
            </thead>
            <tbody>
              {this.renderPatients()}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  },

  renderFilters: function() {
      return null;
  },


  handleClick: function(id, e) {
    e.preventDefault();
    this.history.pushState(null, 'patient/'+id);
  },

/*
  renderPatients: function() {
    return this.state.patients.map(function(patient){
      return <tr className={DataHelper.getPatientStatus(patient)}
        key={patient.id}
        onClick={this.handleClick.bind(this, patient.id)}>
          <td>{patient.id}></td>
          <td>{patient.name}</td>
          <td>{DataHelper.getChineseSex(patient.sex)}</td>
          <td>{DataHelper.getAge(patient.birthdate)}</td>
          <td>{patient.diagnosis}</td>
          <td>{DataHelper.getChineseDate(patient.date_hospitalization)}</td>
          <td>{DataHelper.getChineseDate(patient.date_operation)}</td>
          <td>{DataHelper.getChineseDate(patient.date_discharge)}</td>
        </tr>;
      }.bind(this)
    );
  },
*/
  renderPatients: function() {
    return this.state.patients.map(function(patient){
      return <tr className={DataHelper.getPatientStatus(patient)}
        key={patient.id}>
          <td><Link to={'/patient/'+patient.id}>{patient.id}</Link></td>
          <td>{patient.name}</td>
          <td>{DataHelper.getChineseSex(patient.sex)}</td>
          <td>{DataHelper.getAge(patient.birthdate)}</td>
          <td>{patient.diagnosis}</td>
          <td>{DataHelper.getChineseDate(patient.date_hospitalization)}</td>
          <td>{DataHelper.getChineseDate(patient.date_operation)}</td>
          <td>{DataHelper.getChineseDate(patient.date_discharge)}</td>
        </tr>;
      }.bind(this)
    );
  },

  onChange: function(event, patients) {
    this.setState({patients: patients});
  }

});
