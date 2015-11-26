var React = require('react');

// React-Bootstrap components
var Input = require('react-bootstrap/lib/input');

// other components
var DynamicSelect = require('../common/dynamic-select');
var OperationMenuItems = require('./operation-menu-items');
var DataHelper = require('../../utils/data-helper');

// test data
var TestData = require('../../test-data');

module.exports = React.createClass(
  {
    getInitialState: function() {
      return {
        canUpdate: false,
        operation: null
      };
    },

    componentWillMount: function() {

      // todo: retrieve operation details from the data store
      var savedOperation = TestData.test_operation_data;

      this.setState({
        canUpdate: false,
        operation: savedOperation
      });
    },

    handleUpdateButtonClick: function(e) {
      e.preventDefault();
      // when clicked, allow each property to be updated
      if (!this.state.canUpdate) {
        this.setState({
          canUpdate: true
        });
      };
    },

    handleDateChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.date = new Date(e.target.value);
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleDocNameChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.doc_performing = e.target.value;
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleDocFirstAidChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        console.log(e.target.value);
        this.state.operation.doc_first_aid = e.target.value;
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleDocSecondAidChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.doc_second_aid = e.target.value;
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleEntryMainChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.entry.main = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleEntrySubChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.entry.sub = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleLocaleMainChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.locale.main = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleLocaleSub1Change: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.locale.sub1 = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleLocaleSub2Change: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.locale.sub2 = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleTypeChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.type = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleNameChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.name = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    handleNotesChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑手术信息"');
      } else {
        this.state.operation.notes = e.target.value;
        // update the menu items based on the selected main locale value
        this.setState({
          operation: this.state.operation
        });
      }
    },

    render: function() {

      var operation = this.state.operation;

      return (
        <form className="form-horizontal operation">

          <div className="form-group">

              <label for="operation-date" className="col-md-2 control-label">手术日期</label>
              <div className="col-md-8">
                  <Input id="operation-date"
                    type="date"
                    className="form-control"
                    defaultValue={DataHelper.getHTMLDate(operation.date)}
                    onChange={this.handleDateChange}
                    disabled={!this.state.canUpdate}/>
              </div>
          </div>

            <div className="form-group">
                <label for="doc-name" className="col-md-2 control-label">主刀医生</label>
                <div className="col-md-2">
                  <Input
                    type="text"
                    id="doc-name"
                    className="form-control"
                    value={operation.doc_performing}
                    onChange={this.handleDocNameChange}
                    disabled={!this.state.canUpdate}/>
                </div>
                <label for="doc-name" className="col-md-1 control-label">一助</label>
                    <div className="col-md-2">
                      <Input
                        type="text"
                        id="doc-first-aid"
                        className="form-control"
                        value={operation.doc_first_aid}
                        onChange={this.handleDocFirstAidChange}
                        disabled={!this.state.canUpdate}/>
                  </div>
                  <label for="doc-name" className="col-md-1 control-label">二助</label>
                    <div className="col-md-2">
                      <Input
                        type="text"
                        id="doc-second-aid"
                        className="form-control"
                        value={operation.doc_second_aid}
                        onChange={this.handleDocSecondAidChange}
                        disabled={!this.state.canUpdate}/>
                    </div>
              </div>
              <div className="form-group">
                  <label for="operation-type" className="col-md-2 control-label">手术类型</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={OperationMenuItems.Type.getMenuItems(
                                    operation.locale.main)}
                      value={operation.type}
                      handleChange={this.handleTypeChange}
                      disabled={!this.state.canUpdate} />
                  </div>

                  <label for="operation-name" className="col-md-2 control-label">手术名称</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={OperationMenuItems.Name.getMenuItems(
                                    operation.locale.main,
                                    operation.locale.sub1,
                                    operation.type)}
                      value={operation.name}
                      handleChange={this.handleNameChange}
                      disabled={!this.state.canUpdate}
                      />
                  </div>
              </div>

              <div className="form-group">
                  <label for="operation-entry" className="col-md-2 control-label">手术入路/切口</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={OperationMenuItems.EntryMain.getMenuItems()}
                      value={operation.entry.main}
                      handleChange={this.handleEntryMainChange}
                      disabled={!this.state.canUpdate} />
                  </div>
                    <label for="operation-entry-sub" className="col-md-2 control-label">二级入路/切口</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={OperationMenuItems.EntrySub.getMenuItems(
                                    operation.entry.main)}
                      value={operation.entry.sub}
                      handleChange={this.handleEntrySubChange}
                      disabled={!this.state.canUpdate} />
                  </div>
              </div>

            <div className="form-group">
                <label for="operation-locale" className="col-md-2 control-label">手术部位</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={OperationMenuItems.LocaleMain.getMenuItems()}
                    value={operation.locale.main}
                    handleChange={this.handleLocaleMainChange}
                    disabled={!this.state.canUpdate}/>
                </div>
                <label for="operation-locale-sub1" className="col-md-1 control-label">二级</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={OperationMenuItems.LocaleSub1.getMenuItems(operation.locale.main)}
                    value={operation.locale.sub1}
                    handleChange={this.handleLocaleSub1Change}
                    disabled={!this.state.canUpdate} />
                </div>
                <label for="operation-locale-sub2" className="col-md-1 control-label">三级</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={OperationMenuItems.LocaleSub2.getMenuItems(
                                  operation.locale.main,
                                  operation.locale.sub1)}
                    value={operation.locale.sub2}
                    handleChange={this.handleLocaleSub2Change}
                    disabled={!this.state.canUpdate} />
                </div>
            </div>

            <div className="form-group">
                <label for="operation-notes" className="col-md-2 control-label">手术笔记</label>
                <div className="col-md-8">
                      <Input type="textarea" rows="4"
                        value={operation.notes}
                        onChange={this.handleNotesChange}
                        disabled={!this.state.canUpdate}
                        />
                </div>
            </div>

            <div className="form-group">
                <div className="col-md-4 col-md-offset-2">
                        <button
                          className="btn btn-block btn-sm btn-success"
                          onClick={this.handleUpdateButtonClick}>
                          编辑
                        </button>
                </div>
                  <div className="col-md-4">
                        <button className="btn btn-block btn-sm btn-warning">保存</button>
                </div>
            </div>
        </form>
      );
    }
  }
)
