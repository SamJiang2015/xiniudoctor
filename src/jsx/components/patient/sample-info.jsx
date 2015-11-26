var React = require('react');
var NameValue = require('../common/name-value');
var DataHelper = require('../../utils/data-helper');
var Modal = require('react-bootstrap/lib/modal');

module.exports = React.createClass({

    getInitialState: function() {
        return {
          showEditModal: false
        };
    },

    showEditModal: function() {
      this.setState({showEditModal: true});
    },

    hideEditModal: function() {
      this.setState({showEditModal: false});
    },

    // popup to edit patient's basic info
    renderModalBody: function() {
      var patient = this.props.patient;

      return (
        <form className="form-horizontal">

          <div className="form-group">
              <label for="patientName" className="col-md-2 col-md-offset-2 control-label">采集时间</label>
              <div className="col-md-4">
                  <input
                    className="form-control"
                    type="date"/>
              </div>
          </div>

          <div className="form-group">
              <label for="patientName" className="col-md-2 col-md-offset-2 control-label">储藏柜号码</label>
              <div className="col-md-4">
                  <input
                    className="form-control"/>
              </div>
          </div>
          <div className="form-group">
              <label for="patientName" className="col-md-2 col-md-offset-2 control-label">坐标</label>
              <div className="col-md-4">
                  <input
                    className="form-control"/>
              </div>
          </div>

          <div className="form-group">
              <label className="col-md-2 col-md-offset-2 control-label">已使用?</label>
              <div className="col-md-4">
                  <label className="radio-inline">
                    <input type="radio"
                      value="1"
                      checked={patient.sex ==='m'?'checked':null}/> 是
                    </label>
                  <label className="radio-inline">
                    <input type="radio"
                      id="sex-femaile"
                      value="0"
                      checked={patient.sex ==='f'?'checked':null}/> 否
                  </label>
              </div>
          </div>

            <div className="form-group">
                <label for="patientName" className="col-md-2 col-md-offset-2 control-label">使用时间</label>
                <div className="col-md-4">
                    <input
                      className="form-control"
                      type="date"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-md-2 col-md-offset-3">
                        <button
                          className="btn btn-block btn-sm btn-success">
                          放弃编辑
                        </button>
                </div>
                    <div className="col-md-2">
                        <button className="btn btn-block btn-sm btn-warning">保存</button>
                </div>
            </div>
        </form>
      );
    },

    render: function() {
      return (
        <div className="panel panel-warning" id={this.props.id}>
          <div className="panel-heading">
            标本信息
          </div>
            <div className="panel-body">
              <div className="row">
                <NameValue
                  name="采集时间"
                  name_length="col-md-2"
                  value='2015年10月10日'
                  value_length="col-md-4"/>
                <NameValue
                  name="储藏柜号码"
                  name_length="col-md-2"
                  value='2'
                  value_length="col-md-4"/>
              </div>
                  <div className="row">

                <NameValue
                  name="坐标"
                  name_length="col-md-2"
                  value='2, 5, 10'
                  value_length="col-md-4"/>
              </div>
              <div className="row">
                  <NameValue
                    name="使用时间"
                    name_length="col-md-2"
                    value='2015年10月30日'
                    value_length="col-md-4"/>
                </div>
            </div>
            <div className="panel-footer">
              <button className="btn btn-sm btn-warning" onClick={this.showEditModal}>编辑</button>
            </div>

            <Modal
              {...this.props}
              show={this.state.showEditModal}
              onHide={this.hideEditModal}
              bsSize="large"
            >
              <Modal.Header closeButton>
                <Modal.Title>标本信息编辑</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.renderModalBody()}
              </Modal.Body>
              <Modal.Footer>
                <button onClick={this.hideEditModal}>Close</button>
              </Modal.Footer>
            </Modal>

          </div>
      );
    }
  })
