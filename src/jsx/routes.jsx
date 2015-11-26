var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;
var CreateBrowserHistory = require('history/lib/createBrowserHistory');

var Main = require('./components/main');
var PatientList = require('./components/patient/patient-list');
var PatientReport = require('./components/patient/patient-report');
var PatientTimeline = require('./components/timeline/patient-timeline');
var PatientAdd = require('./components/patient/patient-add');

var DepartmentChart = require('./components/data/department-chart');
var GroupsChart = require('./components/data/groups-chart');
var GroupChart = require('./components/data/group-chart');
var DoctorChart = require('./components/data/doctor-chart');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="patients" component={PatientList} />
      <Route path="patients/add" component={PatientAdd} />
      <Route path="patient/:id" component={PatientReport} />
      <Route path="patientTimeLine/:id" component={PatientTimeline} />
      <Route path="data" component={DepartmentChart} />
      <Route path="data/department" component={DepartmentChart}/>
      <Route path="data/groups" component={GroupsChart}/>
      <Route path="data/group" component={GroupChart}/>
      <Route path="data/doctor" component={DoctorChart}/>
    </Route>
  </Router>
)
