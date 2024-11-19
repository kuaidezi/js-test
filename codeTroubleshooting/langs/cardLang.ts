/**
 * 工作台-多语言
 * @author wanjun.feng@hand-china.com
 * @date 2021-1-14
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.card',
  RELOAD: () => intl.get('hzero.common.button.reload').d('重新加载'),
  REFRESH: () => intl.get('hzero.common.button.refresh').d('刷新'),
  START_DATE: () => intl.get('hzero.common.date.startTime').d('开始时间'),
  END_DATE: () => intl.get('hzero.common.date.endTime').d('结束时间'),
  START_TIME: () => intl.get('hzero.common.date.startTime').d('开始时间'),
  END_TIME: () => intl.get('hzero.common.date.endTime').d('结束时间'),
  RESET: () => intl.get('hzero.common.button.common.reset').d('重置'),
  QUERY: () => intl.get('hzero.common.button.common.query').d('查询'),
  TENANT: () => intl.get('hzero.common.model.common.tenant').d('租户'),
  DETAIL: () => intl.get('hzero.common.status.detail').d('查看详情'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  OK: () => intl.get('hzero.common.button.ok').d('确定'),
  DISABLE: () => intl.get('hzero.common.button.disable').d('禁用'),
  ENABLE_FLAG: () => intl.get('hzero.common.model.common.enableFlag').d('是否启用'),

  FILTER: () => intl.get('horc.card.view.button.filter').d('筛选'),
  AUTO_REFRESH: () => intl.get('horc.card.view.button.autoRefresh').d('自动刷新'),
  SUMMARY: () => intl.get('horc.card.view.title.summary').d('概览'),
  TOP_NUM: () => intl.get('horc.card.model.report.topNum').d('排名前'),
  TIMES: () => intl.get('horc.card.view.model.times').d('次'),
  // Bar
  INVOKE_COUNT: () => intl.get('horc.card.model.totalCount').d('调用总量'),
  INVOKE_SUBMIT_COUNT: () => intl.get('horc.card.model.submitCount').d('已提交数量'),
  INVOKE_SUCCESS_COUNT: () => intl.get('horc.card.model.succeedCount').d('已成功数量'),
  INVOKE_FAIL_COUNT: () => intl.get('horc.card.model.failureCount').d('已失败数量'),
  INVOKE_RUNNING_COUNT: () => intl.get('horc.card.model.runningCount').d('正在运行数量'),
  INVOKE_PREPARING_PAUSED_COUNT: () =>
    intl.get('horc.card.model.preparingPausedCount').d('准备暂停数量'),
  INVOKE_PAUSED_COUNT: () => intl.get('horc.card.model.pausedCount').d('已暂停数量'),
  INVOKE_PREPARING_STOP_COUNT: () =>
    intl.get('horc.card.model.preparingStopCount').d('准备停止数量'),
  INVOKE_STOPPED_COUNT: () => intl.get('horc.card.model.stoppedCount').d('已停止数量'),
  INVOKE_NEED_TOLERANCE_COUNT: () =>
    intl.get('horc.card.model.needFaultToleranceCount').d('需容错数量'),
  INVOKE_KILLED_COUNT: () => intl.get('horc.card.model.killedCount').d('强制结束数量'),
  MAX_RUN_TIME: () => intl.get('horc.card.model.maxRunTime').d('最长运行时间'),
  MIN_RUN_TIME: () => intl.get('horc.card.model.minRunTime').d('最短运行时间'),
  AVG_RUN_TIME: () => intl.get('horc.card.model.avgRunTime').d('平均运行时间'),

  INVOKE_SUM: () => intl.get('horc.card.model.invokeSum').d('总编排实例数'),
  ORCHESTRATION_TOTAL_TITLE: () =>
    intl.get('horc.card.view.title.orchestrationTotal').d('编排实例情况'),
  ORCHESTRATION_SUM_TOTAL: () =>
    intl.get('horc.card.model.orchestrationSumTotal').d('总编排实例数'),
  ORCHESTRATION_COUNT_TITLE: () =>
    intl.get('horc.card.view.title.orchestrationCount').d('编排实例总量排行'),
  ORCHESTRATION_FAILED_TITLE: () =>
    intl.get('horc.card.view.title.orchestrationFailedCount').d('编排实例错误排行'),
  ORCHESTRATION_STATUS_TITLE: () =>
    intl.get('horc.card.view.title.orchestrationStatus').d('编排状态'),
  TASK_STATUS_TITLE: () => intl.get('horc.card.view.title.TaskStatus').d('任务状态'),
};

export default Langs;
