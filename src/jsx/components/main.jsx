var React = require('react');
var Modal = require('react-bootstrap/lib/modal');

var Header = require('./header');
var Footer = require('./footer');
var PatientList = require('./patient/patient-list');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      authenticated: false,
      showLoginModal: false,
      showSignupModal: false
    }
  },

  showLoginModal: function() {
      this.setState({
        showLoginModal: true
      })
  },

  hideLoginModal: function() {
      this.setState({
          showLoginModal: false
        })
  },

  showSignupModal: function() {
      this.setState({
        showSignupModal: true
      })
  },

  hideSignupModal: function() {
      this.setState({
          showSignupModal: false
        })
  },

  handleLogin: function(e) {
    e.preventDefault();

    this.setState({
      authenticated: true
    });
  },

  renderContent: function() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <PatientList />
    }
  },

  renderLoginPage: function() {
    return (
      <div className="login">
        <nav className="navbar navbar-inverse navbar-fixed-top" id="my-navbar">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target="#mainNavbarCollapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="#">
                        <span className="logo-text"><img src="images/logo-text-2.png" width="140"/></span>
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="mainNavbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#home">首页</a></li>
                        <li><a href="#about">关于我们</a></li>
                        <li><a href="#download">下载移动端</a></li>
                    </ul>

                    <form className="navbar-form navbar-right">
                        <div className="form-group has-feedback">
                            <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                            <input type="tel" placeholder="手机" className="form-control" />
                        </div>
                        <div className="form-group has-feedback">
                            <span className="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                            <input type="password" placeholder="密码" className="form-control" />
                        </div>
                         <div className="form-group">
                            <input type="submit" value="登录" onClick={this.handleLogin} className="btn btn-success loginButton" />
                        </div>
                         <div className="form-group">
                            <a href="#" onClick={this.showSignupModal}>尚未注册？</a>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <div className="container contentContainer" id="topContainer">
            <div className="row" id="topRow">
                <div className="col-md-6 col-md-offset-3">
                    <h1> 如犀牛般强大又可靠，<br/><strong>犀牛医生</strong>致力于为医生提供专业的临床科研数据管理工具</h1>
                </div>
            </div>

            <div className="row" id="buttonRow">
                <div className="col-md-3 col-md-offset-3">
                    <button className="btn btn-success btn-block btn-lg" onClick={this.showLoginModal}>登录</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary btn-block btn-lg" onClick={this.showSignupModal}>注册</button>
                </div>
            </div>
        </div>

        <Modal
          show={this.state.showLoginModal}
          onHide={this.hideLoginModal}
          bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>欢迎您登录</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
                <div className="form-group has-feedback">
                    <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                    <input type="tel" placeholder="手机" className="form-control" />
                </div>
                <div className="form-group has-feedback">
                    <span className="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                    <input type="password" placeholder="密码" className="form-control" />
                </div>
                 <div className="form-group">
                    <input type="submit" value="登录" className="loginButton btn btn-success btn-block" />
                </div>
                 <div className="form-group">
                    <a href="#">尚未注册？</a>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.hideLoginModal}>Close</button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showSignupModal}
          onHide={this.hideSignupModal}
          bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>欢迎您加入犀牛医生</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form >
                <div className="form-group has-feedback">
                    <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                    <input type="tel" placeholder="手机" className="form-control" />
                </div>
                <div className="form-group has-feedback">
                    <span className="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                    <input type="password" placeholder="设定密码" className="form-control" />
                </div>
                <div className="form-group has-feedback">
                    <span className="glyphicon glyphicon-lock form-control-feedback" aria-hidden="true"></span>
                    <input type="password" placeholder="请重输密码" className="form-control" />
                </div>
                 <div className="form-group">
                    <input type="submit" value="加入" className="btn btn-primary btn-block" />
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.hideSignupModal}>Close</button>
          </Modal.Footer>
        </Modal>

        <div id="footer">
        <Footer />
        </div>
      </div>
    );
  },

  render: function() {
    var content = null;

    if (!this.state.authenticated) {
      content = this.renderLoginPage();
    } else {
      content = (
      <div id="wrapper">
          <Header docName='秦二爷'/>
          {this.renderContent()}
        <Footer />
      </div>);
    }

    return content;
  }

});
