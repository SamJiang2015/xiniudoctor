var React = require('react');
// React-Bootstrap components
var Input = require('react-bootstrap/lib/input'); 

module.exports = React.createClass({

  // call the parent function to handle change
  handleChange(e) {
      this.props.handleChange(e.target.value);
  },

  // selectItems is an array of objects with two properties:
  //  1- value  2-display
  renderSelectItems: function() {
    return this.props.selectItems.map(function(item){
      return (
      <option
        value={item.value}>
        {item.display}
      </option>
      )
    }.bind(this));
  },

  render: function() {
    var results = (
      <Input
        type='select'
        value={this.props.value}
        onChange={this.handleChange}
        disabled={this.props.disabled || this.props.selectItems.length==0}>
        {this.renderSelectItems()}
      </Input>
    );
    return results;
  }
})
