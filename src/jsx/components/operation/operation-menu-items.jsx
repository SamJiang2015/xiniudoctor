//
// this file defines the select menu items to be rendered in the
// operation UI
//
var React = require('react');
var Constants = require('../../constants');
var DataHelper = require('../../utils/data-helper');

const OperationMenuItems = {

  EntryMain: [
    {
      items: [
      {value: 'EM1',  display: '开放入路'},
      {value: 'EM2',  display: '微创入路'},
      {value: 'EM3',  display: '复合入路'}]
    }
  ],

  EntrySub: [
    {
      entryMain: 'EM1',
      items: [
       {value: 'EM1ES1',  display: '后外侧开胸'},
       {value: 'EM1ES2',  display: '前外侧开胸'},
       {value: 'EM1ES3',  display: '正中劈胸骨'},
       {value: 'EM1ES4',  display: '正中半劈胸骨'},
       {value: 'EM1ES5',  display: '保护肌肉的小开胸'},
       {value: 'EM1ES6',  display: '半河蚌式开胸'},
       {value: 'EM1ES7',  display: '河蚌式开胸'},
       {value: 'EM1ES8',  display: '开腹'},
       {value: 'EM1ES9',  display: '经颈部'},
       {value: 'EM1ES10',  display: '经肋间'},
       {value: 'EM1ES11',  display: '经肋骨床'}]
    },
    {
      entryMain: 'EM2',
      items: [
      {value: 'EM2ES1',  display: '常规VATS(左)'},
      {value: 'EM2ES2',  display: '常规VATS(右)'},
      {value: 'EM2ES3',  display: '单孔VATS'},
      {value: 'EM2ES4',  display: 'VATS(经剑突下)'},
      {value: 'EM2ES5',  display: '经颈部(纵隔镜)'},
      {value: 'EM2ES6',  display: '经胸骨旁(纵隔镜)'},
      {value: 'EM2ES7',  display: '经气管(支气管镜)'},
      {value: 'EM2ES8',  display: '经食管(胃镜)'},
      {value: 'EM2ES9',  display: 'Lap(腹腔镜)'},
      {value: 'EM2ES10',  display: '经皮(胸壁或腹壁)'}]
    },
    {
      entryMain: 'EM3',
      items: [
      {value: 'EM3ES1',  display: '左胸、腹联合开放切口'},
      {value: 'EM3ES2',  display: '开腹+右侧开胸'},
      {value: 'EM3ES3',  display: 'Lap+VATS(右)'},
      {value: 'EM3ES4',  display: 'Lap+右侧开胸'},
      {value: 'EM3ES5',  display: '开腹+VATS(右)'},
      {value: 'EM3ES6',  display: '颈+右胸+腹三切口'},
      {value: 'EM3ES7',  display: '颈+VATS(右)+Lap'},
      {value: 'EM3ES8',  display: '颈+右侧开胸+Lap'},
      {value: 'EM3ES9',  display: '颈+VATS(右)+开腹'},
      {value: 'EM3ES10',  display: '颈部+正中劈胸骨'}]
    }
  ],

  LocaleMain: [
    {
      items: [
        {value: 'LM1',  display: '肺'},
        {value: 'LM2',  display: '喉/气管'},
        {value: 'LM3',  display: '食管'}]
    }
  ],

  LocaleSub1: [
        {
          localeMain: 'LM1',
          items: [
           {value: 'LM1LS11',  display: '左'},
           {value: 'LM1LS12',  display: '右'}]
        },
        {
          localeMain: 'LM2',
          items: [
            {value: 'LM2LS11', display: '气管'},
            {value: 'LM2LS12', display: '隆突'},
            {value: 'LM2LS13', display: '支气管'},
            {value: 'LM2LS14', display: '喉'}]
        },
        {
          localeMain: 'LM3',
          items: [
            {value: 'LM3LS11', display: '颈段'},
            {value: 'LM3LS12', display: '胸段'},
            {value: 'LM3LS13', display: '腹段'}]
        }
    ],  // end of Locale Sub1 items

    LocaleSub2: [
        {
          localeMain: 'LM1',
          localeSub1: 'LM1LS11',
          items: [
            {value: 'LM1LS11LS21',  display: '上'},
            {value: 'LM1LS11LS22',  display: '下'}]
        },
        {
          localeMain: 'LM1',
          localeSub1: 'LM1LS12',
          items: [
            {value: 'LM1LS12LS21',  display: '上'},
            {value: 'LM1LS12LS22',  display: '中'},
            {value: 'LM1LS12LS23',  display: '下'}]
        },
        {
          localeMain: 'LM2',
          localeSub1: 'LM2LS11',
          items: [
            {value: 'LM2LS11LS21',  display: '颈段'},
            {value: 'LM2LS11LS22',  display: '胸内上段'},
            {value: 'LM2LS11LS23',  display: '胸内中段'},
            {value: 'LM2LS11LS24',  display: '胸内下段'},
            {value: 'LM2LS11LS25',  display: '颈胸交界'}]
        },
        {
          localeMain: 'LM2',
          localeSub1: 'LM2LS12',
          items: [
            {value: Constants.MenuItems.NA,  display: '无'}]
        },
        {
          localeMain: 'LM2',
          localeSub1: 'LM2LS13',
          items: [
            {value: 'LM2LS13LS21',  display: '左主支气管'},
            {value: 'LM2LS13LS22',  display: '右主支气管'}]
        },
        {
          localeMain: 'LM2',
          localeSub1: 'LM2LS14',
          items: [
              {value: Constants.MenuItems.NA,  display: '无'}]
        },
        {
          localeMain: 'LM3',
          localeSub1: 'LM3LS11',
          items: [
              {value: Constants.MenuItems.NA,  display: '无'}]
        },
        {
          localeMain: 'LM3',
          localeSub1: 'LM3LS12',
          items: [
            {value: 'LM3LS12LS21',  display: '上'},
            {value: 'LM3LS12LS22',  display: '中'},
            {value: 'LM3LS12LS23',  display: '下'}]
        },
        {
          localeMain: 'LM3',
          localeSub1: 'LM3LS13',
          items: [
            {value: Constants.MenuItems.NA,  display: '无'}]
        }
    ],  //end of Locale Sub2 items

    Type: [
        {
          localeMain: Constants.MenuItems.MATCH_ALL,   // 探查术和部位无关
          items: [
            {value: 'LM0T1', display: '探查术'}]
        },
        {
          localeMain: 'LM1',
          items: [
            {value: 'LM1T1',  display: '非解剖性肺切除'},
            {value: 'LM1T2',  display: '解剖性肺切除'},
            {value: 'LM1T3',  display: '其他'}]
        },
        {
          localeMain: 'LM2',
          items: [
            {value: Constants.MenuItems.NA,  display: '无'}]
        },
        {
          localeMain: 'LM3',
          items: [
            {value: Constants.MenuItems.NA,  display: '无'}]
        }
    ],  // end of Type menu items

    Name: [
      {
        localeMain: Constants.MenuItems.MATCH_ALL,   // 探查术和部位无关
        localeSub1: Constants.MenuItems.MATCH_ALL,  // 和sub1无关
        type: 'LM0T1',
        items: [
          {value: 'LM0LS10T1N1', display: '单纯探查术(未切除病灶，或亦未进行任何诊断性/治疗性操作)'},
          {value: 'LM0LS10T1N2', display: '探查姑息切除术(凡是未能达到R0切除的病灶切除术——即有肿瘤组织残余之可能——的手术应当增加此项手术名称)'},
          {value: 'LM0LS10T1N3', display: '常规探查术(以明确手术方式、范围为目的的常规探查术)'}]
      },
      {
        localeMain: 'LM1',
        localeSub1: Constants.MenuItems.MATCH_ALL,  // 和sub1无关
        type: 'LM1T1',
        items: [
          {value: 'LM1LS10T1N1',  display: '肺活检术(仅以诊断为唯一目的)'},
          {value: 'LM1LS10T1N2',  display: '肺楔形切除术'},
          {value: 'LM1LS10T1N3',  display: '肺减容术'},
          {value: 'LM1LS10T1N4',  display: '肺大疱结扎术'}
        ]
      },
      {
        localeMain: 'LM1',
        localeSub1: Constants.MenuItems.MATCH_ALL,  // 和sub1无关
        type: 'LM1T2',
        items: [
          {value: 'LM1LS10T2N1',  display: '肺段/亚段切除术'},
          {value: 'LM1LS10T2N2',  display: '联合肺段/亚段切除术'},
          {value: 'LM1LS10T2N3',  display: '肺叶切除术'},
          {value: 'LM1LS10T2N4',  display: '肺叶切除术伴支气管/肺动脉成形术'},
          {value: 'LM1LS10T2N5',  display: '肺叶支气管袖式切除术'},
          {value: 'LM1LS10T2N6',  display: '肺叶支气管动脉双袖式切除术'},
          {value: 'LM1LS10T2N7',  display: '全肺切除术'}
        ]
      },
      {
        localeMain: 'LM1',
        localeSub1: Constants.MenuItems.MATCH_ALL,  // 和sub1无关
        type: 'LM1T3',
        items: [
          {value: 'LM1LS10T3N1',  display: '异物取出术'},
          {value: 'LM1LS10T3N2',  display: '肺内病灶射频消融术'},
          {value: 'LM1LS10T3N3',  display: '肺移植术'}
        ]
      },
      {
        localeMain: 'LM2',
        localeSub1: 'LM2LS11',
        type: Constants.MenuItems.MATCH_ALL,  // 和type无关
        items: [
          {value: 'LM2LS11T0N1',  display: '气管裂伤缝合术'},
          {value: 'LM2LS11T0N2',  display: '气管食管瘘管切除术'},
          {value: 'LM2LS11T0N3',  display: '气管节段切除重建术'},
          {value: 'LM2LS11T0N4',  display: '气管切开术'},
          {value: 'LM2LS11T0N5',  display: '气管造口术'}
        ]
      },
      {
        localeMain: 'LM2',
        localeSub1: 'LM2LS12',
        type: Constants.MenuItems.MATCH_ALL,  // 和type无关
        items: [
          {value: 'LM2LS12T0N1',  display: '半隆突切除重建术'},
          {value: 'LM2LS12T0N2',  display: '全隆突切除重建术'}        ]
      },
      {
        localeMain: 'LM2',
        localeSub1: 'LM2LS13',
        type: Constants.MenuItems.MATCH_ALL,  // 和type无关
        items: [
          {value: 'LM2LS13T0N1',  display: '支气管裂伤缝合术'},
          {value: 'LM2LS13T0N2',  display: '支气管食管瘘管切除术'},
          {value: 'LM2LS13T0N3',  display: '支气管节段切除重建术'},
          {value: 'LM2LS13T0N4',  display: '支气管成形术'},
          {value: 'LM2LS13T0N5',  display: '异物取出术'}
        ]
      },
      {
        localeMain: 'LM2',
        localeSub1: 'LM2LS14',
        type: Constants.MenuItems.MATCH_ALL,  // 和type无关
        items: [
          {value: 'LM2LS14T0N1',  display: '全喉切除术'}
        ]
      },
      {
        localeMain: 'LM3',
        localeSub1: Constants.MenuItems.MATCH_ALL,
        type: Constants.MenuItems.MATCH_ALL,
        items: [
            {value: 'LM3LS10T0N1',  display: '食管病损切除术+胃-食管颈部吻合术'},
            {value: 'LM3LS10T0N2',  display: '食管病损切除术+胃-食管弓上吻合术'},
            {value: 'LM3LS10T0N3',  display: '食管病损切除术+胃-食管弓下吻合术'},
            {value: 'LM3LS10T0N4',  display: '食管病损切除术+胃-食管右胸内圆形吻合术'},
            {value: 'LM3LS10T0N5',  display: '食管病损切除术+胃-食管右胸内三角吻合术'},
            {value: 'LM3LS10T0N6',  display: '食管病损切除术+结肠代食管术'},
            {value: 'LM3LS10T0N7',  display: '食管病损切除术+空肠代食管术'},
            {value: 'LM3LS10T0N8',  display: '食管良性肿瘤剔除术'},
            {value: 'LM3LS10T0N9',  display: '食管憩室切除术'},
            {value: 'LM3LS10T0N10',  display: '异物取出术'},
            {value: 'LM3LS10T0N11',  display: '食管修补术'}
          ]
      }
    ]
};

// interface functions to retrieve menu items based
// on user input
module.exports = React.createClass({

  statics: {

    ///////////////////////////////////////////////////
    // Entry main has no dependencies
    EntryMain: {
      getMenuItems: function() {
        return OperationMenuItems.EntryMain[0].items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.EntryMain, value);
      }
    },

    /////////////////////////////////////////////////////
    // Entry sub depends on entrMain
    //
    EntrySub: {
      getMenuItems(entryMainValue) {

        var items=[];
        for (var i=0; i<OperationMenuItems.EntrySub.length; i++) {
          if (OperationMenuItems.EntrySub[i].entryMain === entryMainValue) {
            items=items.concat(OperationMenuItems.EntrySub[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.EntrySub, value);
      }
    },

    ///////////////////////////////////////////////////
    // locale main has no dependencies
    //
    LocaleMain: {
      getMenuItems: function() {
        return OperationMenuItems.LocaleMain[0].items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.LocaleMain, value);
      }
    },

    /////////////////////////////////////////////////////
    // locale sub1 generally depends on localeMain
    //
    LocaleSub1: {
      getMenuItems(localeMainValue) {

        var items=[];
        for (var i=0; i<OperationMenuItems.LocaleSub1.length; i++) {
          if (OperationMenuItems.LocaleSub1[i].localeMain === localeMainValue) {
            items=items.concat(OperationMenuItems.LocaleSub1[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.LocaleSub1, value);
      }
    },

    ////////////////////////////////////////////////////////////////////
    // locale sub2 depends on main and sub1
    //
    LocaleSub2: {
      getMenuItems: function(localeMainValue, localeSub1Value) {

        var items=[];
        for (var i=0; i<OperationMenuItems.LocaleSub2.length; i++) {
          if ((OperationMenuItems.LocaleSub2[i].localeMain === localeMainValue) &&
              (OperationMenuItems.LocaleSub2[i].localeSub1 === localeSub1Value)) {
            items=items.concat(OperationMenuItems.LocaleSub2[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.LocaleSub2, value);
      }
    },

    ////////////////////////////////////////
    // Type depends on locale main
    //
    Type: {
      getMenuItems: function(localeMainValue) {
        var items=[];

        for (var i=0; i<OperationMenuItems.Type.length; i++) {
          if ((OperationMenuItems.Type[i].localeMain === Constants.MenuItems.MATCH_ALL) ||
              (OperationMenuItems.Type[i].localeMain === localeMainValue)) {
            items=items.concat(OperationMenuItems.Type[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.Type, value);
      }
    },

    ////////////////////////////////////////////////////////
    // name depends on locale main, sub1 and type
    //
    Name: {
      getMenuItems: function(localeMainValue, localeSub1Value, typeValue) {
        var items=[];

        for (var i=0; i<OperationMenuItems.Name.length; i++) {
          if (
              ( (OperationMenuItems.Name[i].localeMain === Constants.MenuItems.MATCH_ALL) ||
                (OperationMenuItems.Name[i].localeMain === localeMainValue) )  &&
              ( (OperationMenuItems.Name[i].localeSub1 === Constants.MenuItems.MATCH_ALL) ||
                (OperationMenuItems.Name[i].localeSub1 === localeSub1Value) )  &&
              ( (OperationMenuItems.Name[i].type === Constants.MenuItems.MATCH_ALL) ||
                (OperationMenuItems.Name[i].type === typeValue) )
            ) {
            items=items.concat(OperationMenuItems.Name[i].items);
          }
        }

        return items;
      },

      getDisplay: function(value) {
        return DataHelper.getDisplayHelper(OperationMenuItems.Name, value);
      }
    }
  },

  render: function() {
    return null;
  }
})
