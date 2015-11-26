var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
        <br/>
        <IndexLink to="/">Home</IndexLink>
      </div>
    )
  }
})
