var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {
    return (
        <ul className="nav nav-sidebar">
            <li><Link to={'/patient/'+this.props.id}>信息一览</Link></li>
            <li><Link to={'/patientTimeLine/'+this.props.id}>时间轴</Link></li>
        </ul>
    )
  }
})
