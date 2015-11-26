var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var DataHelper = require('../utils/data-helper');

// test data
var TestData = require('../test-data');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getPatients: function() {

    // todo: replace testdata with logic to retrieve patients list from
    // data store
    this.patients= TestData.test_patients_list_data;
    this.triggerChange();

    /*
    return Api.get('patients')
      .then(function(json){
        this.patients = json.data;
        this.triggerChange();
      }.bind(this));
      */
  },

  getPatient: function(id) {
    //todo: implement logic to retrieve patient detail info
    return this.find(id);
  },

  find: function(id){
    var patient=null;
    if (this.patients === undefined) {
      this.getPatients();
      //return null;
    }

    for (var i=0; i<this.patients.length; i++) {
      if (this.patients[i].id.toString() === id) {
        patient = this.patients[i];
      }
    }

    return patient;
  },

  triggerChange: function() {
    this.trigger('change', this.patients);
  }
});
