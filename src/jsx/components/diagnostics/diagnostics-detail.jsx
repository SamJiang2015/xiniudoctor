var React = require('react');

// React-Bootstrap components
var Input = require('react-bootstrap/lib/input');

// other components
var DynamicSelect = require('../common/dynamic-select');
var DiagnosticsMenuItems = require('./diagnostics-menu-items');
var DataHelper = require('../../utils/data-helper');

// test data
var TestData = require('../../test-data');

module.exports = React.createClass(
  {
    getInitialState: function() {
      return {
        canUpdate: false,
        diagnostics: null
      };
    },

    componentWillMount: function() {

      // todo: retrieve diagnostics details from the data store
      var savedDiagnostics = TestData.test_diagnostics_data;

      this.setState({
        canUpdate: false,
        diagnostics: savedDiagnostics
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
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.date = new Date(e.target.value);
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleDocChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.doc = e.target.value;
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleLocaleMainChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.locale.main = newValue;
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleLocaleSubChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.locale.sub = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTypeChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.type = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleNameChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.name = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTissueOriginChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.tumorData.tissue.origin = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTissueTypeMainChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.tumorData.tissue.type.main = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTissueTypeSub1Change: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.tumorData.tissue.type.sub1 = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTissueTypeSub2Change: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.tumorData.tissue.type.sub2 = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleTumorMBChange: function(newValue) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.tumorData.MB = newValue;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    handleNotesChange: function(e) {
      if (!this.state.canUpdate) {
        alert('请先点击"编辑信息"');
      } else {
        this.state.diagnostics.notes = e.target.value;
        // update the menu items based on the selected main locale value
        this.setState({
          diagnostics: this.state.diagnostics
        });
      }
    },

    render: function() {

      var diagnostics = this.state.diagnostics;

      return (
        <form className="form-horizontal diagnostics">

          <div className="form-group">

              <label for="date" className="col-md-2 control-label">诊断日期</label>
              <div className="col-md-3">
                  <Input id="date"
                    type="date"
                    className="form-control"
                    defaultValue={DataHelper.getHTMLDate(diagnostics.date)}
                    onChange={this.handleDateChange}
                    disabled={!this.state.canUpdate}/>
              </div>

                <label for="doc-name" className="col-md-1 control-label">医生</label>
                <div className="col-md-4">
                  <Input
                    type="text"
                    id="doc-name"
                    className="form-control"
                    value={diagnostics.doc}
                    onChange={this.handleDocChange}
                    disabled={!this.state.canUpdate}/>
              </div>
            </div>

              <div className="form-group">
                <label className="col-md-2 control-label">病变名称</label>
                <div className="col-md-3">
                  <DynamicSelect
                    selectItems={diagnostics.isTumor?
                        DiagnosticsMenuItems.TumorName.getMenuItems() :
                        []}
                    value={diagnostics.name}
                    handleChange={this.handleNameChange}
                    disabled={!this.state.canUpdate}
                    />
                </div>
                  <label className="col-md-2 control-label">病变类型</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={DiagnosticsMenuItems.Type.getMenuItems(
                                    diagnostics.locale.main)}
                      value={diagnostics.type}
                      handleChange={this.handleTypeChange}
                      disabled={!this.state.canUpdate} />
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-md-2 control-label">病变部位</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={DiagnosticsMenuItems.LocaleMain.getMenuItems()}
                      value={diagnostics.locale.main}
                      handleChange={this.handleLocaleMainChange}
                      disabled={!this.state.canUpdate} />
                  </div>
                    <label className="col-md-2 control-label">细分部位</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={DiagnosticsMenuItems.LocaleSub.getMenuItems(
                        diagnostics.locale.main
                      )}
                      value={diagnostics.locale.sub}
                      handleChange={this.handleLocaleSubChange}
                      disabled={!this.state.canUpdate} />
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-md-2 control-label">病变组织来源</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={DiagnosticsMenuItems.TissueOrigin.getMenuItems(
                        diagnostics.locale.main
                      )}
                      value={diagnostics.tumorData.tissue.origin}
                      handleChange={this.handleTissueOriginChange}
                      disabled={!this.state.canUpdate} />
                  </div>
                    <label className="col-md-2 control-label">良恶性</label>
                  <div className="col-md-3">
                    <DynamicSelect
                      selectItems={DiagnosticsMenuItems.TumorMB.getMenuItems()}
                      value={diagnostics.tumorData.mb}
                      handleChange={this.handleTumorMBChange}
                      disabled={!this.state.canUpdate} />
                  </div>
              </div>

            <div className="form-group">
                <label className="col-md-2 control-label">组织学类型</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={DiagnosticsMenuItems.TissueTypeMain.getMenuItems(
                      diagnostics.locale.main,
                      diagnostics.tumorData.tissue.origin
                    )}
                    value={diagnostics.tumorData.tissue.type.main}
                    handleChange={this.handleTissueTypeMainChange}
                    disabled={!this.state.canUpdate} />
                </div>
                <label className="col-md-1 control-label">亚型</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={DiagnosticsMenuItems.TissueTypeSub1.getMenuItems(
                      diagnostics.locale.main,
                      diagnostics.tumorData.tissue.origin,
                      diagnostics.tumorData.tissue.type.main
                    )}
                    value={diagnostics.tumorData.tissue.type.sub1}
                    handleChange={this.handleTissueTypeSub1Change}
                    disabled={!this.state.canUpdate} />
                </div>
                <label className="col-md-1 control-label">次亚型</label>
                <div className="col-md-2">
                  <DynamicSelect
                    selectItems={DiagnosticsMenuItems.TissueTypeSub2.getMenuItems(
                              diagnostics.locale.main,
                              diagnostics.tumorData.tissue.origin,
                              diagnostics.tumorData.tissue.type.main,
                              diagnostics.tumorData.tissue.type.sub1
                            )}
                    value={diagnostics.tumorData.tissue.type.sub2}
                    handleChange={this.handleTissueTypeSub2Change}
                    disabled={!this.state.canUpdate} />
                </div>
            </div>

            <div className="form-group">
                <label className="col-md-2 control-label">补充说明</label>
                <div className="col-md-8">
                      <Input type="textarea" rows="4"
                        value={diagnostics.notes}
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
