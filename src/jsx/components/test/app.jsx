var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
{this.props.children}
      </div>
    )
  }
})
