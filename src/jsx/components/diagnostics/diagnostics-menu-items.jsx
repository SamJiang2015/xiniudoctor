//
// this file defines the select menu items to be rendered in the
// dianostics UI
//
var React = require('react');
var Constants = require('../../constants');
var DataHelper = require('../../utils/data-helper');

const DiagnosticsMenuItems = {

  LocaleMain: [
    {
      items: [
        {value: 'LM1',  display: '肺/气管/支气管'},
        {value: 'LM2',  display: '胸膜及心包'}
      ]
    }
  ],

  LocaleSub: [
    {
      localeMain: 'LM1',
      items: [
       {value: 'LM1LS1',  display: '肺'},
       {value: 'LM1LS2',  display: '气管及支气管'}]
    }
  ],

  Type: [
    {
      localeMain: 'LM1',
      items: [
        {value: 'LM1T1',  display: '肿瘤性'}]
    },
    {
      localeMain: 'LM2',
      items: [
        {value: 'LM2T1',  display: '肿瘤性'}]
    }
  ],  // end of Type menu items

  TumorName: [
    {items: [
        {value: 'TN1',  display: '胸部肿瘤'}
      ]
    }
  ],

  TissueOrigin: [
    {
        localeMain: 'LM1',
        items: [
          {value: 'LM1TO1',  display: '上皮细胞肿瘤'},
          {value: 'LM1TO2',  display: '间叶组织肿瘤'},
          {value: 'LM1TO3',  display: '淋巴组织细胞肿瘤'},
          {value: 'LM1TO4',  display: '异位来源肿瘤'},
          {value: 'LM1TO5',  display: '肺转移瘤'}]
      },
      {
        localeMain: 'LM2',
        items: [
          {value: 'LM2TO1',  display: '胸膜间皮瘤'},
          {value: 'LM2TO2',  display: '胸膜转移瘤'},
          {value: 'LM2TO3',  display: '恶性胸腔积液'},
          {value: 'LM2TO4',  display: '心包转移瘤'},
          {value: 'LM2TO5',  display: '恶性心包积液'}]
      }
  ],  // end of Type menu items

  TissueTypeMain:[
      {
        localeMain: 'LM1',
        tissueOrigin: 'LM1TO1',
        items: [
          {value: 'LM1TO1TTM1',  display: '鳞癌'},
          {value: 'LM1TO1TTM2',  display: '腺癌'},
          {value: 'LM1TO1TTM3',  display: '神经内分泌癌'},
          {value: 'LM1TO1TTM4',  display: '大细胞癌'},
          {value: 'LM1TO1TTM5',  display: '腺鳞癌'},
          {value: 'LM1TO1TTM6',  display: '肉瘤样癌'},
          {value: 'LM1TO1TTM7',  display: '其他及未分类癌'},
          {value: 'LM1TO1TTM8',  display: '涎腺肿瘤'},
          {value: 'LM1TO1TTM9',  display: '乳头状瘤'},
          {value: 'LM1TO1TTM10',  display: '腺瘤'},
          {value: 'LM1TO1TTM11',  display: '非小细胞肺癌-分型困难'},
          {value: 'LM1TO1TTM12',  display: '特殊临床类型的肺癌'}]
      },
      {
        localeMain: 'LM1',
        tissueOrigin: 'LM1TO2',
        items: [
          {value: 'LM1TO2TTM1',  display: '肺错构瘤'},
          {value: 'LM1TO2TTM2',  display: '软骨瘤'},
          {value: 'LM1TO2TTM3',  display: '血管周围上皮样肿瘤'},
          {value: 'LM1TO2TTM4',  display: '先天性支气管周围肌纤维母细胞瘤'},
          {value: 'LM1TO2TTM5',  display: '弥漫性肺淋巴管瘤病'},
          {value: 'LM1TO2TTM6',  display: '炎性肌纤维母细胞瘤'},
          {value: 'LM1TO2TTM7',  display: '上皮样血管内皮细胞瘤'},
          {value: 'LM1TO2TTM8',  display: '胸膜肺母细胞瘤'},
          {value: 'LM1TO2TTM9',  display: '滑膜肉瘤'},
          {value: 'LM1TO2TTM10',  display: '肺动脉内膜肉瘤'},
          {value: 'LM1TO2TTM11',  display: '肺黏液样肉瘤伴EWSR1-CREB1移位'},
          {value: 'LM1TO2TTM12',  display: '肌上皮肿瘤'}]
      },
      {
        localeMain: 'LM1',
        tissueOrigin: 'LM1TO3',
        items: [
          {value: 'LM1TO3TTM1',  display: '结外黏膜相关淋巴样组织的边缘区域的B细胞淋巴瘤'},
          {value: 'LM1TO3TTM2',  display: '弥漫性大B细胞淋巴瘤'},
          {value: 'LM1TO3TTM3',  display: '淋巴瘤样肉芽肿病'},
          {value: 'LM1TO3TTM4',  display: '血管大B细胞淋巴瘤'},
          {value: 'LM1TO3TTM5',  display: '肺朗格罕斯细胞组织增生症'},
          {value: 'LM1TO3TTM6',  display: 'Erdheim-Chester综合症/多骨型硬化组织细胞增生症'}]
      },
      {
        localeMain: 'LM1',
        tissueOrigin: 'LM1TO4',
        items: [
          {value: 'LM1TO4TTM1',  display: '生殖细胞肿瘤'},
          {value: 'LM1TO4TTM2',  display: '肺内胸腺瘤'},
          {value: 'LM1TO4TTM3',  display: '黑色素瘤'},
          {value: 'LM1TO4TTM4',  display: '脑膜瘤'}]
      },
      {
        localeMain: 'LM2',
        tissueOrigin: 'LM2TO1',
        items: [
          {value: 'LM2TO1TTM1',  display: '局限型胸膜间皮瘤'},
          {value: 'LM1TO4TTM2',  display: '弥漫型胸膜间皮瘤'}]
      }
  ],

  TissueTypeSub1: [
    {
      localeMain: 'LM1',
      tissueOrigin: 'LM1TO1',
      tissueTypeMain: 'LM1TO1TTM1',
      items: [
        {value: 'LM1TO1TTM1TTS11',  display: '角化型'},
        {value: 'LM1TO1TTM1TTS12',  display: '非角化型'},
        {value: 'LM1TO1TTM1TTS13',  display: '基底细胞样'},
        {value: 'LM1TO1TTM1TTS14',  display: '鳞状细胞原位癌'}]
    },
    {
      localeMain: 'LM1',
      tissueOrigin: 'LM1TO1',
      tissueTypeMain: 'LM1TO1TTM2',
      items: [
        {value: 'LM1TO1TTM2TTS11',  display: '不典型腺瘤样增生'},
        {value: 'LM1TO1TTM2TTS12',  display: '原位腺癌'},
        {value: 'LM1TO1TTM2TTS13',  display: '微浸润腺癌'},
        {value: 'LM1TO1TTM2TTS14',  display: '贴壁样生长腺癌'},
        {value: 'LM1TO1TTM2TTS15',  display: '腺泡样腺癌'},
        {value: 'LM1TO1TTM2TTS16',  display: '乳头状腺癌'},
        {value: 'LM1TO1TTM2TTS17',  display: '微小乳头状腺癌'},
        {value: 'LM1TO1TTM2TTS18',  display: '实体性腺癌'},
        {value: 'LM1TO1TTM2TTS19',  display: '浸润性粘液腺癌'},
        {value: 'LM1TO1TTM2TTS110',  display: '胶样腺癌'},
        {value: 'LM1TO1TTM2TTS111',  display: '胎儿型腺癌'},
        {value: 'LM1TO1TTM2TTS112',  display: '肠腺型腺癌'}]
    }
  ],

  TissueTypeSub2: [
    {
      localeMain: 'LM1',
      tissueOrigin: 'LM1TO1',
      tissueTypeMain: 'LM1TO1TTM2',
      tissueTypeSub1: 'LM1TO1TTM2TTS12',
      items: [
        {value: 'LM1TO1TTM2TTS12TTS21',  display: '非粘液性'},
        {value: 'LM1TO1TTM2TTS12TTS22',  display: '粘液性'}]
    },
    {
      localeMain: 'LM1',
      tissueOrigin: 'LM1TO1',
      tissueTypeMain: 'LM1TO1TTM2',
      tissueTypeSub1: 'LM1TO1TTM2TTS13',
      items: [
        {value: 'LM1TO1TTM2TTS13TTS21',  display: '非粘液性'},
        {value: 'LM1TO1TTM2TTS13TTS22',  display: '粘液性'}]
    }
  ],

  TumorMB:  [
    {items: [
      {value: 'TMB1',  display: '恶性上皮肿瘤'},
      {value: 'TMB2',  display: '侵袭前病变'}]
    }
  ]
};

// interface functions to retrieve menu items based
// on user input
module.exports = React.createClass({

  statics: {
    ///////////////////////////////////////////////////
    // Locale main has no dependencies
    LocaleMain: {
      getMenuItems: function() {
        return DiagnosticsMenuItems.LocaleMain[0].items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.LocaleMain, value);
      }
    },

    /////////////////////////////////////////////////////
    // Locale sub depends on Locale Main
    //
    LocaleSub: {
      getMenuItems(localeMainValue) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.LocaleSub.length; i++) {
          if (DiagnosticsMenuItems.LocaleSub[i].localeMain === localeMainValue) {
            items=items.concat(DiagnosticsMenuItems.LocaleSub[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.LocaleSub, value);
      }
    },

    /////////////////////////////////////////////////////
    // Type depends on Locale Main
    //
    Type: {
      getMenuItems(localeMainValue) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.Type.length; i++) {
          if (DiagnosticsMenuItems.Type[i].localeMain === localeMainValue) {
            items=items.concat(DiagnosticsMenuItems.Type[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.Type, value);
      }
    },

    /////////////////////////////////////////////////////
    // Tissue Origin depends on Locale Main
    //
    TissueOrigin: {
      getMenuItems(localeMainValue) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.TissueOrigin.length; i++) {
          if (DiagnosticsMenuItems.TissueOrigin[i].localeMain === localeMainValue) {
            items=items.concat(DiagnosticsMenuItems.TissueOrigin[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TissueOrigin, value);
      }
    },

    ////////////////////////////////////////////////////////////////////
    // Tissue Type Main depends on Locale Main and Tissue Origin
    //
    TissueTypeMain: {
      getMenuItems: function(localeMainValue, tissueOriginValue) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.TissueTypeMain.length; i++) {
          if ((DiagnosticsMenuItems.TissueTypeMain[i].localeMain === localeMainValue) &&
              (DiagnosticsMenuItems.TissueTypeMain[i].tissueOrigin === tissueOriginValue)) {
            items=items.concat(DiagnosticsMenuItems.TissueTypeMain[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TissueTypeMain, value);
      }
    },

    ////////////////////////////////////////////////////////////////////
    // Tissue Type Sub1 depends on Locale Main, Tissue Origin and
    // Tissue Type Main
    //
    TissueTypeSub1: {
      getMenuItems: function(
        localeMainValue,
        tissueOriginValue,
        tissueTypeMainValue) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.TissueTypeSub1.length; i++) {
          if ((DiagnosticsMenuItems.TissueTypeSub1[i].localeMain === localeMainValue) &&
              (DiagnosticsMenuItems.TissueTypeSub1[i].tissueOrigin === tissueOriginValue) &&
              (DiagnosticsMenuItems.TissueTypeSub1[i].tissueTypeMain === tissueTypeMainValue)) {
            items=items.concat(DiagnosticsMenuItems.TissueTypeSub1[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TissueTypeSub1, value);
      }
    },

    ////////////////////////////////////////////////////////////////////
    // Tissue Type Sub2 depends on Locale Main, Tissue Origin,
    // Tissue Type Main and Tissue Type Sub1
    //
    TissueTypeSub2: {
      getMenuItems: function(
        localeMainValue,
        tissueOriginValue,
        tissueTypeMainValue,
        tissueTypeSub1Value) {

        var items=[];
        for (var i=0; i<DiagnosticsMenuItems.TissueTypeSub2.length; i++) {
          if ((DiagnosticsMenuItems.TissueTypeSub2[i].localeMain === localeMainValue) &&
              (DiagnosticsMenuItems.TissueTypeSub2[i].tissueOrigin === tissueOriginValue) &&
              (DiagnosticsMenuItems.TissueTypeSub2[i].tissueTypeMain === tissueTypeMainValue) &&
              (DiagnosticsMenuItems.TissueTypeSub2[i].tissueTypeSub1 === tissueTypeSub1Value)) {
            items=items.concat(DiagnosticsMenuItems.TissueTypeSub2[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TissueTypeSub2, value);
      }
    },

    ///////////////////////////////////////////////////
    // Tumor MB has no dependencies
    TumorMB: {
      getMenuItems: function() {
        return DiagnosticsMenuItems.TumorMB[0].items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TumorMB, value);
      }
    },

    ///////////////////////////////////////////////////
    // Tumor Name has no dependencies
    TumorName: {
      getMenuItems: function() {
        return DiagnosticsMenuItems.TumorName[0].items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(DiagnosticsMenuItems.TumorName, value);
      }
    }
  },  // end of statics part

  render: function() {
    return null;
  }

});
