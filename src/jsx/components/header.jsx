//
// Header component:
//    shows logo + quick search bar + quicklinks + doctor's name
//
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
// package that provides a react-router wrapper for react-bootstrap elements
var LinkContainer = require('react-router-bootstrap').LinkContainer;

// all the React Bootstrap components we are going to use
// for the header component
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavBrand = ReactBootstrap.NavBrand;
var CollapsibleNav = ReactBootstrap.CollapsibleNav;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var SearchBox = require('./search-box');

module.exports = React.createClass({

  render: function() {
    return <div className="header">
        <Navbar inverse fixedTop toggleNavKey={0} id="mainPage-navbar">
          {this.renderLogo()}
          <CollapsibleNav eventKey={0}>
            <Nav navbar right>
              <LinkContainer to="patients"><NavItem eventKey={1}>我的病人</NavItem></LinkContainer>
              <LinkContainer to="data"><NavItem eventKey={2}>我的数据</NavItem></LinkContainer>
              {this.renderDocNameDropDown()}
            </Nav>
            <Nav right>
              <SearchBox className="navbar-form"/>
            </Nav>
          </CollapsibleNav>
        </Navbar>
    </div>
  },

  renderLogo: function() {
    return <NavBrand>
      <Link to="/">
          <span className="logo-text"><img src="images/logo-text-2.png"/></span>
      </Link>
    </NavBrand>
  },

  renderDocNameDropDown: function() {
    return  <NavDropdown title={this.props.docName + '医生'} id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1">个人信息</MenuItem>
              <MenuItem eventKey="2">账户管理</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="3">退出</MenuItem>
            </NavDropdown>
  }
});
