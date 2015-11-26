var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <li>
        <div className="timeline-date">
          {this.props.badge}
        </div>
      </li>
    )
  }
});
