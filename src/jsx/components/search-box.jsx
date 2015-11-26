var React = require('react');

// all the React Bootstrap components we are going to use
// for the header component
var Nav = require('react-bootstrap').Nav;

module.exports = React.createClass({

  render: function() {

    return  <form className={this.props.className}>
                <div className="form-group has-feedback">
                  <span className="glyphicon glyphicon-search form-control-feedback"></span>
                  <input type="text" className="form-control" placeholder="快速搜索" />
                </div>
              </form>

  }
});
