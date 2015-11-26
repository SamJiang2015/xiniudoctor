var React = require('react');
var NameValue = require('../common/name-value');
var DataHelper = require('../../utils/data-helper');
var Modal = require('react-bootstrap/lib/modal');
var Operation = require('../operation/operation-detail');
var TestData = require('../../test-data');
var OperationMenuItems = require('../operation/operation-menu-items');

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
            <Operation {...this.props}></Operation>
          );
    },

    render: function() {
      // todo: need to dynamically load in operation info
      var operation = TestData.test_operation_data;

      return (
        <div className="panel panel-success" id={this.props.id}>
          <div className="panel-heading">
            手术信息
          </div>
            <div className="panel-body">
              <div className="row">
                <NameValue
                  name="手术日期"
                  name_length="col-md-2"
                  value={DataHelper.getHTMLDate(operation.date)}
                  value_length="col-md-4"/>
                <NameValue
                  name="主刀医生"
                  name_length="col-md-2"
                  value={operation.doc_performing}
                  value_length="col-md-4"/>
              </div>
              <div className="row">
                <NameValue
                  name="一助"
                  name_length="col-md-2"
                  value={operation.doc_first_aid}
                  value_length="col-md-4"/>
                <NameValue
                  name="二助"
                  name_length="col-md-2"
                  value={operation.doc_second_aid}
                  value_length="col-md-4"/>
              </div>
              <hr/>
              <div className="row">
                <NameValue
                  name="手术类型"
                  name_length="col-md-2"
                  value={OperationMenuItems.Type.getDisplay(operation.type)}
                  value_length="col-md-4"/>
                <NameValue
                  name="手术名称"
                  name_length="col-md-2"
                  value={OperationMenuItems.Name.getDisplay(operation.name)}
                  value_length="col-md-4"/>
              </div>
              <div className="row">
                <NameValue
                  name="手术入路/切口"
                  name_length="col-md-2"
                  value={OperationMenuItems.EntryMain.getDisplay(operation.entry.main)}
                  value_length="col-md-4"/>
                <NameValue
                  name="二级入路/切口"
                  name_length="col-md-2"
                  value={OperationMenuItems.EntrySub.getDisplay(operation.entry.sub)}
                  value_length="col-md-4"/>
              </div>
              <div className="row">
                <NameValue
                  name="手术部位"
                  name_length="col-md-2"
                  value={OperationMenuItems.LocaleMain.getDisplay(operation.locale.main)}
                  value_length="col-md-4"/>
                <NameValue
                  name="二级"
                  name_length="col-md-2"
                  value={OperationMenuItems.LocaleSub1.getDisplay(operation.locale.sub1)}
                  value_length="col-md-4"/>
              </div>
              <div className="row">
                  <NameValue
                    name="三级"
                    name_length="col-md-2"
                    value={OperationMenuItems.LocaleSub2.getDisplay(operation.locale.sub2)}
                    value_length="col-md-4"/>
              </div>
              <div className="row">
                <NameValue
                  name="手术笔记"
                  name_length="col-md-2"
                  value={operation.notes}
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
