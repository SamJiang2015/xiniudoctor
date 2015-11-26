var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="name-value">
        <div className={this.props.name_length}>
          <b>{this.props.name}:</b>
        </div>
        <div className={this.props.value_length}>
          {this.props.value}
        </div>
      </div>
    );
  }


})
