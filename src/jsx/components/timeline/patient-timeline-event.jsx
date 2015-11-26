var React = require('react');

var Panel = require('react-bootstrap/lib/panel');
var Modal = require('react-bootstrap/lib/modal');
var Button = require('react-bootstrap/lib/button');

var PatientStore = require('../../stores/patients-store');
var Actions = require('../../actions');

var Operation = require('../operation/operation-detail');
var Diagnostics = require('../diagnostics/diagnostics-detail');

var Constants=require('../../constants');

module.exports = React.createClass({

  getInitialState: function() {
      return {
        showModal: false
      };
  },

  showModal: function() {
    this.setState({showModal: true});
  },

  hideModal: function() {
    this.setState({showModal: false});
  },

  renderModalBody: function() {
      var modalBody = null;

      if (this.props.type === Constants.TimelineEventType.OPERATION) {
        modalBody = (<Operation {...this.props}></Operation>);
      } else if (this.props.type === Constants.TimelineEventType.DIAGNOSTICS) {
        console.log('i am here');
        modalBody = (<Diagnostics {...this.props}></Diagnostics>);
      } else {
        console.log('wrong type was passed into renderModalBody: ' + this.props.type);
      }

      return modalBody;
  },

  render: function(){
      return (
          <li className="patient-timeline-event"
              className={this.props.inverted ? 'timeline-inverted' : ''}>
              <div className={"timeline-badge " + this.props.type}>
                <p>{this.props.badge}</p>
              </div>
              <Panel className="timeline-panel"
                header={this.props.title}
                bsStyle={this.props.type}
                onClick={this.showModal}>
                <div className="timeline-body">
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time"></i>
                      {this.props.date}
                    </small>
                  </p>
                  <p>{this.props.description}</p>
                </div>
              </Panel>

              <Modal
                {...this.props}
                show={this.state.showModal}
                onHide={this.hideModal}
                bsSize="large"
                dialogClassName="patient-timeline-event-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {this.renderModalBody()}
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.hideModal}>Close</Button>
                </Modal.Footer>
              </Modal>
        </li>)
  }
});
