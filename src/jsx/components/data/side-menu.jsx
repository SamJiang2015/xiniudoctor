var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {
    return (
        <ul className="nav nav-sidebar">
            <li><Link to={'/data/department'}>全科室</Link></li>
            <li><Link to={'/data/groups'}>各专家组</Link></li>
            <li><Link to={'/data/group'}>本专家组</Link></li>
            <li><Link to={'/data/doctor'}>本医生</Link></li>
        </ul>
    )
  }
})
