/**
 * 断言-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-8-23
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  ASSERTION: () => intl.get('horc.orchestration.assertion.model.assertion').d('断言'),
  ASSERTION_TIP: () =>
    intl
      .get('horc.orchestration.assertion.model.assertionTip')
      .d(
        '断言，即通过下列选项设定判定条件，设定多个条件时共为"与"的逻辑关系。不满足条件则终止当前任务，最终编排实例的结果需通过失败策略决定。'
      ),
  JSON_BODY: () => intl.get('horc.orchestration.assertion.model.jsonBody').d('JSON Path'),
  JSON_BODY_TIP: () =>
    intl
      .get('horc.orchestration.assertion.model.jsonBodyTip')
      .d('JSON响应体需要通过JSON Path语法匹配对应值,可参考：'),
  XML_BODY: () => intl.get('horc.orchestration.assertion.model.xmlBody').d('XPath 1.0'),
  XML_BODY_TIP: () =>
    intl
      .get('horc.orchestration.assertion.model.xmlBodyTip')
      .d('XML响应体需要通过XPath 1.0语法匹配对应值,可参考：'),
  SUBJECT: () => intl.get('horc.orchestration.assertion.model.subject').d('对象'),
  CONDITION: () => intl.get('horc.orchestration.assertion.model.condition').d('条件'),
  FIELD: () => intl.get('horc.orchestration.assertion.model.field').d('字段'),
  KEY: () => intl.get('horc.orchestration.assertion.model.key').d('参数名'),
  VALUE: () => intl.get('horc.orchestration.assertion.model.value').d('参数值'),
  TYPE: () => intl.get('horc.orchestration.assertion.model.type').d('类型'),
  EXPECTATION: () => intl.get('horc.orchestration.assertion.model.expectation').d('期望值'),
  ADD_ASSERTION: () => intl.get('horc.orchestration.view.button.addAssertion').d('添加断言'),
  CLEAR_ASSERTION: () => intl.get('horc.orchestration.view.button.clearAssertion').d('清空断言'),
  INVOKE_SUCCESS: () => intl.get('horc.orchestration.view.button.invokeSuccess').d('透传成功'),
  INVOKE_FAIL: () => intl.get('horc.orchestration.view.button.invokeFail').d('透传失败'),
};

export default Langs;
