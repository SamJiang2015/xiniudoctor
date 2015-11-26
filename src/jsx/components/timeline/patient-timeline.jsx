var React = require('react');
var Reflux = require('reflux');

var TimelineEvent = require('./patient-timeline-event');
var TimelineMarker = require('./patient-timeline-marker');

var Actions = require('../../actions');
var EventsStore = require('../../stores/events-store');
var PatientStore = require('../../stores/patients-store');
var DataHelper=require('../../utils/data-helper');
var Constants=require('../../constants');
var SideMenu = require('../patient/side-menu');

module.exports = React.createClass({

    mixins: [
      Reflux.listenTo(EventsStore, 'onChange'),
      Reflux.listenTo(PatientStore, 'onPatienChange'),
    ],

    getInitialState: function() {
      return {
        patient: PatientStore.find(this.props.params.id),
        events: []
      }
    },

    componentWillMount: function() {
      // retrieve events for this patient
      Actions.getPatientEvents(this.props.params.id);
    },

  render: function(){
    return (
      <div className="container">
        <div className="col-md-1 sidebar">
          <SideMenu id={this.props.params.id}/>
        </div>
        <div className="patient-timeline col-md-offset-1 cold-md-8">
          <br/>
          <div className="patient-name" >
              {this.state.patient.name}
          </div>
          <ul className="timeline">
            {this.renderTimeline(this.props.filter)}
          </ul>
        </div>
      </div>
  )},

  renderTimeline: function(filter) {

    if (this.state.events.length === 0) {
      return null;
    }

    // insert time marker on the timeline,
    // assuming the events array returned from the store is already
    // sorted by event date
    var timelineEvents = [];

    // start with a year marker
    timelineEvents.push(
        <TimelineMarker
          badge={this.state.events[this.state.events.length-1].date.getFullYear()+'年'} />
      );

    var index = 0;
    for (var i=this.state.events.length-1; i>=0; i--) {
      var event=this.state.events[i];
      var showEvent = false;

      switch(filter) {
        case Constants.TimelineEventType.ALL:   // no filter, show all events
          showEvent = true;
          break;
        case Constants.TimelineEventType.OPERATION:   // only show procedures
          if (event.type === Constants.TimelineEventType.OPERATION) showEvent=true;
          break;
        case Constants.TimelineEventType.DIAGNOSTICS:   //  only show dianosis
          if (event.type === Constants.TimelineEventType.DIAGNOSTICS) showEvent=true;
          break;
      }

      if (showEvent) {
          timelineEvents.push(
            <TimelineEvent
              inverted={(index%2)===1? true:false}
              title={event.title}
              type={event.type}
              date={DataHelper.getChineseDate(event.date)}
              description={event.description}
              badge={event.date.getMonth()+'月'+event.date.getDate()+'日'}
              key={event.id}/>
          );
          index++;
        }

      // when year changes, we display a time point for the new year.
      if (i>0) {
        var nextEventDate = this.state.events[i-1].date;

        // insert a time point for a new year
        if (nextEventDate.getFullYear()!= event.date.getFullYear()) {
          timelineEvents.push(
            <TimelineMarker
              badge={nextEventDate.getFullYear()+'年'} />);
          }
      }
    }

    return timelineEvents;
  },

  onChange: function(event, events) {
    this.setState({events: events});
  },

  onPatientChange: function(event, patient) {
    this.setState({patient: patient});
  }

});
