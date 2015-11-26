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
              <label for="patientName" className="col-md-1 col-md-offset-2 control-label">姓名</label>
              <div className="col-md-4">
                  <input id="patientName"
                    className="form-control"
                    value={patient.name}/>
              </div>
          </div>

          <div className="form-group">
              <label className="col-md-1 col-md-offset-2 control-label">性别</label>
              <div className="col-md-4">
                  <label className="radio-inline">
                    <input type="radio"
                      id="sex-male"
                      value="m"
                      checked={patient.sex ==='m'?'checked':null}/> 男
                    </label>
                  <label className="radio-inline">
                    <input type="radio"
                      id="sex-femaile"
                      value="f"
                      checked={patient.sex ==='f'?'checked':null}/> 女
                  </label>
              </div>
          </div>

          <div className="form-group">
              <label for="birthdate" className="col-md-1 col-md-offset-2 control-label">生日</label>
              <div className="col-md-4">
                  <input id="birthdate"
                    type="date"
                    className="form-control"
                    value={DataHelper.getHTMLDate(patient.birthdate)}/>
              </div>
          </div>

          <div className="form-group">
              <label for="date-hospitalized" className="col-md-1 col-md-offset-2 control-label">入院时间</label>
              <div className="col-md-4">
                  <input id="date-hospitalized"
                    type="date"
                    className="form-control"
                    value={DataHelper.getHTMLDate(patient.date_hospitalization)}/>
              </div>
          </div>

          <div className="form-group">
              <label for="date-discharge" className="col-md-1 col-md-offset-2 control-label">出院时间</label>
              <div className="col-md-4">
                  <input id="date-discharge"
                    type="date"
                    className="form-control"
                    value={DataHelper.getHTMLDate(patient.date_discharge)} />
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
        <div className="panel panel-default" id={this.props.id}>
          <div className="panel-heading">
            基本信息
          </div>
          <div className="panel-body">
            <div className="row">
              <NameValue
                name="生日"
                name_length="col-md-2"
                value={DataHelper.getChineseDate(this.props.patient.birthdate)}
                value_length="col-md-4"/>
              <NameValue
                name="性别"
                name_length="col-md-2"
                value={DataHelper.getChineseSex(this.props.patient.sex)}
                value_length="col-md-4"/>
            </div>
                <div className="row">

              <NameValue
                name="电话"
                name_length="col-md-2"
                value={18812345678}
                value_length="col-md-4"/>
            </div>
            <hr/>
            <div className="row">
                <NameValue
                  name="入院时间"
                  name_length="col-md-2"
                  value={DataHelper.getChineseDate(this.props.patient.date_hospitalization)}
                  value_length="col-md-4"/>
                <NameValue
                  name="出院时间"
                  name_length="col-md-2"
                  value={this.props.patient.date_discharge?
                          DataHelper.getChineseDate(this.props.patient.date_discharge):
                          '尚未出院'}
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
              <Modal.Title>基本信息编辑</Modal.Title>
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
