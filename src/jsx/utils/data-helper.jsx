var React=require('react');

module.exports = {

  // menu items is an array of objects, each object contains an "items"
  // property which is an array of {value, display} pairs
  getDisplayHelper: function(menuSets, value) {
    var display = null;

    menuSets.forEach(function(menuSet) {
      menuSet.items.forEach(function(item) {
        if (item.value === value) {
          display = item.display;
        }
      })
    });

    return display;
  },

  getPatientStatus: function(patientData) {
    var status="";

    if (patientData.date_discharge != null) {
        status="discharged"; //discharged showing color sucesss
    } else {
        status="hospitalized";
    }
    return status;
  },

  getChineseSex: function(sex) {
    var chineseSex="";

    if (sex=="m") {
        chineseSex="男";
    } else if (sex=="f") {
        chineseSex="女";
    }

    return chineseSex;
  },

  getChineseDate: function(date) {
    var chineseDate = "";
    if (date!=null) {
        chineseDate=date.getFullYear()+'年'+date.getMonth()+ '月'+date.getDate()+'日';
    }

    return chineseDate;
  },

  getHTMLDate: function(date) {
    if (!date) return null;
    var yyyy = date.getFullYear();
    var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
    var dd  = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return "".concat(yyyy).concat("-").concat(mm).concat("-").concat(dd);
  },

  getAge: function(birthdate) {
    var now= new Date();
    var age = now.getFullYear() - birthdate.getFullYear();

    if ((birthdate.getMonth() > now.getMonth()) ||
        (birthdate.getMonth() === now.getMonth() && birthdate.getDate()>now.getDate())) {
      age = age-1;  // not birthday yet, adjust the age
    }

    return age;
  },

  random: function(n1,n2){
    return Math.round(Math.random() * (Math.max(n1,n2)-Math.min(n1,n2) + 1) + Math.min(n1,n2), 0);
  }
}
