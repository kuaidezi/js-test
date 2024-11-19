/**
 * 阻塞节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-12-4
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  BLOCK_TITLE: () => intl.get('horc.orchestration.view.block.blockTitle').d('阻塞恢复条件'),
  BLOCK_TITLE_TIP: () =>
    intl.get('horc.orchestration.view.block.blockTitleTip').d('达成配置的条件打通流程'),

  RESUME_CONDITION_TYPE: () =>
    intl.get('horc.orchestration.model.block.resumeConditionType').d('恢复条件类型'),
  RESUME_CONDITION_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.model.block.resumeConditionTypeTip')
      .d(
        '指定时间：指当时间到达基准时间或基准时间偏移后的时间，阻塞节点将被打通流程；外部触发：会在运行时生成恢复URL地址，通过调用该地址打通流程；循环判断：会循环调用已配置的http接口或透传接口，调用成功并且断言成功时打通流程，否则继续阻塞。'
      ),

  WEB_HOOK_URL: () => intl.get('horc.orchestration.model.block.webHookUrl').d('WebHook地址'),
  WEB_HOOK_URL_TIP: () =>
    intl
      .get('horc.orchestration.model.block.webHookUrlMessage')
      .d('可通过POST请求调用该地址打通节点'),
  WEB_HOOK_IDENTITY: () =>
    intl.get('horc.orchestration.model.block.webHookIdentity').d('WebHook标识'),
  WEB_HOOK_IDENTITY_TIP: () =>
    intl.get('horc.orchestration.model.block.webHookIdentityTip').d('该节点唯一标识'),
  BENCH_MARK_TIME: () => intl.get('horc.orchestration.model.block.benchmarkTime').d('基准时间'),
  BENCH_MARK_TIME_TIP: () =>
    intl
      .get('horc.orchestration.model.block.benchmarkTimeTipCode')
      .d('流程打通的时间，若配置了偏移量，则根据基准时间和偏移量计算恢复时间'),
  EXPRESSION_TIME_TIP: () =>
    intl
      .get('horc.orchestration.model.block.benchmarkTimeTip')
      .d(
        '流程打通的时间，若配置了偏移量，则根据基准时间和偏移量计算恢复时间，可配置SpEL表达式， 遵循格式2000-01-01 00: () =>00:00'
      ),
  DELAY: () => intl.get('horc.orchestration.model.block.delay').d('偏移量'),
  DELAY_TIP: () =>
    intl
      .get('horc.orchestration.model.block.delayTip')
      .d(
        '基于基准时间偏移恢复时间，如设置偏移为一天，基准时间为当前时间，则恢复时间为一天后，一天后当前节点打通，可配置SpEL表达式'
      ),
  FOREACH_TYPE: () => intl.get('horc.orchestration.model.block.foreachType').d('循环判断类型'),
  FOREACH_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.model.block.foreachTypeTip')
      .d(
        '支持HTTP和接口透传，会循环调用配置好的http接口或接口透传，选择HTTP时，当请求超时，即读超时或连接超时，此次循环判断无效，会等待下次循环判断，选择接口透传时，可以在接口平台接口处配置http配置达到一样的效果'
      ),
  INTERVAL: () => intl.get('horc.orchestration.model.block.interval').d('循环间隔'),
  INTERVAL_TIP: () =>
    intl
      .get('horc.orchestration.model.block.intervalTip')
      .d('每经过间隔时间长度进行一次调用并判断，间隔长度必须为正整数，至少间隔1s'),
  TIMEOUT: () => intl.get('horc.orchestration.model.block.timeout').d('超时时长'),
  TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.block.timeoutTip')
      .d('超过该时长则判断则该节点运行失败，若设置该值，必须为正整数'),

  BENCH_MARK_TIME_TYPE: () =>
    intl.get('horc.orchestration.model.block.benchmarkTimeType').d('基准时间类型'),
  BENCH_MARK_TIME_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.model.block.benchmarkTimeTypeTip')
      .d(
        '当前时间为开始阻塞的时间，表达式为SpEL表达式获取前序节点的时间，具体时间为自己配置的具体时间'
      ),
  ADD_ASSERTION: () => intl.get('horc.orchestration.view.button.addAssertion').d('添加断言'),
  CLEAR_ASSERTION: () => intl.get('horc.orchestration.view.button.clearAssertion').d('清空断言'),
  ASSERTION: () => intl.get('horc.orchestration.model.http.assertion').d('断言'),
  ASSERTION_TIP: () =>
    intl
      .get('horc.orchestration.model.http.assertion.tip')
      .d(
        '断言，即通过下列选项设定判定条件，设定多个条件时共为"与"的逻辑关系。不满足条件则继续阻塞，直到条件满足时才打通节点。'
      ),
  JSON_BODY: () => intl.get('horc.orchestration.model.http.assertion.jsonBody').d('JSON Path'),
  JSON_BODY_TIP: () =>
    intl
      .get('horc.orchestration.assertion.model.jsonBodyTip')
      .d('JSON响应体需要通过JSON Path语法匹配对应值,可参考：'),
  SUBJECT: () => intl.get('horc.orchestration.model.http.subject').d('对象'),
  CONDITION: () => intl.get('horc.orchestration.model.http.condition').d('条件'),
  FIELD: () => intl.get('horc.orchestration.model.http.field').d('字段'),
  KEY: () => intl.get('horc.orchestration.model.http.key').d('参数名'),
  VALUE: () => intl.get('horc.orchestration.model.http.value').d('参数值'),
  TYPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),
  EXPECTATION: () => intl.get('horc.orchestration.model.http.expectation').d('期望值'),
};

export default Langs;
