var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var Constants = require('../constants');

// test data
var TestData = require('../test-data');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getPatientEvents: function(patientId) {

    this.events = TestData.test_events_data; 

    this.triggerChange();

    /*
    return Api.get('patients')
      .then(function(json){
        this.patients = json.data;
        this.triggerChange();
      }.bind(this));
      */
  },

  findEvent: function(patientId, eventId){
    var patient=null;

    if (this.events === undefined) {
      this.getPatientEvents(patientId);
      //return null;
    }

    for (var i=0; i<this.patients.length; i++) {
      if (this.events[i].id.toString() === eventId) {
        event = this.events[i];
      }
    }

    return event;
  },

  triggerChange: function() {
    this.trigger('change', this.events);
  }
});
