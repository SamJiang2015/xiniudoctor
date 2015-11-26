//
// temporary place to store some test data
//
var DataHelper = require('./utils/data-helper');
var Constants = require('./constants');

module.exports = {

  // number of patients for each 专家组
  test_patient_group_data: [
    [20, 30, 25, 22,  8, 44, 44,  8, 20, 30, 25, 22],
    [22, 28, 27, 20, 51, 11, 22, 27, 20, 51, 11, 28],
    [13, 17, 33, 35, 22, 25, 33, 35, 22, 25, 13, 17],
    [22, 24, 28, 29, 25, 25, 22, 24, 28, 25, 29, 25]
  ],

 // for this doctor, the 12-month number of patients in each of the
 // three categories: 主刀，一助，二助
  test_patient_doctor_data: [
    [4, 6, 10, 0, 2, 8, 4, 6, 10, 0, 2, 8], //主刀
    [1, 5, 2, 3, 0, 4, 0, 1, 0, 1, 1, 0],  //一助
    [0, 1, 0, 1, 1, 0, 1, 5, 2, 3, 0, 4],  //二助
  ],

  test_patients_list_data: [
      {
          id: 1,
          name: "赵一",
          sex:  "m",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "胸膜炎",
          date_hospitalization: new Date(),
          date_operation: new Date(),
          date_discharge: null
      },
      {
          id: 2,
          name: "钱二",
          sex:  "f",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "肺癌",
          date_hospitalization: new Date(),
          date_operation: null,
          date_discharge: null
      },
      {
          id: 3,
          name: "孙三",
          sex:  "m",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "胃溃疡",
          date_hospitalization: new Date(),
          date_operation: new Date(),
          date_discharge: new Date()
      },
      {
          id: 4,
          name: "李四",
          sex:  "f",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "胸膜炎",
          date_hospitalization: new Date(),
          date_operation: new Date(),
          date_discharge: null
      },
      {
          id: 5,
          name: "周五",
          sex:  "m",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "心肌炎",
          date_hospitalization: new Date(),
          date_operation: null,
          date_discharge: null
      },
      {
          id: 6,
          name: "武六",
          sex:  "f",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "高血压",
          date_hospitalization: new Date(),
          date_operation: new Date(),
          date_discharge: new Date()
      },
      {
          id: 7,
          name: "郑七",
          sex:  "m",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "胸膜炎",
          date_hospitalization: new Date(),
          date_operation: null,
          date_discharge: null
      },
      {
          id: 8,
          name: "王八",
          sex:  "f",
          birthdate: new Date(DataHelper.random(1940, 2000), DataHelper.random(2, 10), DataHelper.random(1,30)),
          diagnosis: "肺癌",
          date_hospitalization: new Date(),
          date_operation: null,
          date_discharge: null
      }
    ],

    test_diagnostics_data: {
                id: 1,
                doc: '秦二爷',
                date: new Date(
                  DataHelper.random(2014, 2015),
                  DataHelper.random(2, 12),
                  DataHelper.random(1,30)),
                isTumor: true,
                name: 'TN1',  // 胸部肿瘤
                type: 'LM1T1',
                locale: {
                  main: 'LM1',
                  sub: 'LM1LS2',
                },
                tumorData: {
                  tissue: {
                    origin: 'LM1TO1',
                    type: {
                      main: 'LM1TO1TTM2',
                      sub1: 'LM1TO1TTM2TTS13',
                      sub2: 'LM1TO1TTM2TTS13TTS22'
                    }
                  },
                  mb: 'TMB2'
                },
                notes: '此处填加具体诊断信息'
            },

  test_operation_data: {
              id: 1,
              doc_performing: '秦二爷',
              doc_first_aid: '秦三爷',
              doc_second_aid: '秦四爷',
              date: new Date(
                DataHelper.random(2014, 2015),
                DataHelper.random(2, 10),
                DataHelper.random(1,30)),
              entry: {
                main: 'EM1',
                sub:  'EM1ES6'
              },
              locale: {
                main: 'LM1',
                sub1: 'LM1LS12',
                sub2: 'LM1LS12LS23'
              },
              type: 'LM1T2',
              name: 'LM1LS10T2N3',
              notes: '此处填加具体手术信息'
          },

  test_events_data: [
      {
        id: 1,
        type: Constants.TimelineEventType.KEY_EVENT,
        date:  new Date(2015, 6, 2),
        title: '入院',
        description: '由北医三院转入协和医院'
      },
      {
        id: 2,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2015, 6, 3),
        title: '肿瘤诊断',
        description: '胸部肿瘤'
      },
      {
        id: 3,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2015, 6, 6),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 4,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2015, 10, 13),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 5,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2015, 10, 15),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 6,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2016, 1, 2),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 7,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2016, 2, 5),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 8,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2016, 3, 3),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 9,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2016, 3, 10),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 10,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2016, 4, 3),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 11,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2016, 7, 6),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 12,
        type:  Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2017, 1, 3),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 13,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2018, 4, 6),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 14,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2018, 5, 3),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 15,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2018, 6, 6),
        title: '手术',
        description: '切除肺部癌细胞'
      },
      {
        id: 16,
        type: Constants.TimelineEventType.DIAGNOSTICS,
        date:  new Date(2018, 7, 3),
        title: '血液检查',
        description: '阴性'
      },
      {
        id: 17,
        type: Constants.TimelineEventType.OPERATION,
        date:  new Date(2018, 7, 6),
        title: '手术',
        description: '切除肺部癌细胞'
      },

      {
        id: 18,
        type: Constants.TimelineEventType.KEY_EVENT,
        date:  new Date(2018, 10, 10),
        title: '出院',
        description: '患者开心的出院了'
      }
    ]
}
