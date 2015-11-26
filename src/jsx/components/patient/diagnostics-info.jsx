var React = require('react');
var NameValue = require('../common/name-value');
var DataHelper = require('../../utils/data-helper');
var Modal = require('react-bootstrap/lib/modal');
var Diagnostics = require('../diagnostics/diagnostics-detail');
var TestData = require('../../test-data');
var DiagnosticsMenuItems = require('../diagnostics/diagnostics-menu-items');

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
    return (
          <Diagnostics {...this.props}></Diagnostics>
        );
  },

  render: function() {
    // todo: need to dynamically load in diagnostics info
    var diagnostics = TestData.test_diagnostics_data;

    return (
      <div className="panel panel-info" id={this.props.id}>
        <div className="panel-heading">
          诊断信息
        </div>
          <div className="panel-body">
            <div className="row">
              <NameValue
                name="诊断日期"
                name_length="col-md-2"
                value={DataHelper.getChineseDate(diagnostics.date)}
                value_length="col-md-4"/>
              <NameValue
                name="医生"
                name_length="col-md-2"
                value={diagnostics.doc}
                value_length="col-md-4"/>
            </div>
            <hr/>
            <div className="row">
              <NameValue
                name="病变名称"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.TumorName.getDisplay(diagnostics.name)}
                value_length="col-md-4"/>
              <NameValue
                name="病变类型"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.Type.getDisplay(diagnostics.type)}
                value_length="col-md-4"/>
            </div>
            <div className="row">
              <NameValue
                name="病变部位"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.LocaleMain.getDisplay(diagnostics.locale.main)}
                value_length="col-md-4"/>
              <NameValue
                name="细分部位"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.LocaleSub.getDisplay(diagnostics.locale.sub)}
                value_length="col-md-4"/>
            </div>
            <div className="row">
              <NameValue
                name="病变组织来源"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.TissueOrigin.getDisplay(diagnostics.tumorData.tissue.origin)}
                value_length="col-md-4"/>
              <NameValue
                name="良恶性"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.TumorMB.getDisplay(diagnostics.tumorData.mb)}
                value_length="col-md-4"/>
            </div>
            <div className="row">
              <NameValue
                name="组织学类型"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.TissueTypeMain.getDisplay(diagnostics.tumorData.tissue.type.main)}
                value_length="col-md-4"/>
              <NameValue
                name="亚型"
                name_length="col-md-2"
                value={DiagnosticsMenuItems.TissueTypeSub1.getDisplay(diagnostics.tumorData.tissue.type.sub1)}
                value_length="col-md-4"/>
            </div>
            <div className="row">
                <NameValue
                  name="次亚型"
                  name_length="col-md-2"
                  value={DiagnosticsMenuItems.TissueTypeSub2.getDisplay(diagnostics.tumorData.tissue.type.sub2)}
                  value_length="col-md-4"/>
            </div>
            <div className="row">
              <NameValue
                name="补充说明"
                name_length="col-md-2"
                value={diagnostics.notes}
                value_length="col-md-9"/>
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
              <Modal.Title>诊断信息编辑</Modal.Title>
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
