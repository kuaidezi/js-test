/**
 * 服务编排-多语言
 * @author weikang.lin@hand-china.com
 * @date 2020-9-29
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.statement',
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  TENANT_NAME: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),

  SEQ_NUMBER: () => intl.get('horc.statement.view.serialNumber').d('序号'),
  ORCH_TENANT: () => intl.get('horc.statement.model.statement.orchTenant').d('编排租户'),
  DEFINITION_NAME: () =>
    intl.get('horc.statement.model.statement.definitionName').d('编排定义名称'),
  WORKER_GROUP: () => intl.get('horc.statement.model.statement.workerGroup').d('工作组'),
  PREFERENCE: () => intl.get('horc.statement.model.statement.preference').d('偏好'),
  START_TIME: () => intl.get('hzero.common.date.startTime').d('开始时间'),
  START_TIME_START: () => intl.get('horc.statement.model.statement.startTimeStart').d('开始时间从'),
  START_TIME_END: () => intl.get('horc.statement.model.statement.startTimeEnd').d('开始时间至'),
  INSTANCE_PRIORITY: () => intl.get('horc.statement.model.statement.instancePriority').d('优先级'),
  STATEMENT_TYPE: () => intl.get('horc.statement.model.statement.statementType').d('语句类型'),
  DEPENDENCY_TYPE: () => intl.get('horc.statement.model.statement.dependencyType').d('依赖类型'),
  FAILURE_STRATEGY: () => intl.get('horc.statement.model.statement.failureStrategy').d('失败策略'),
  WARNING_TYPE: () => intl.get('horc.statement.model.statement.warningType').d('预警类型'),
  DEFINITION: () => intl.get('horc.statement.model.statement.definition').d('编排定义'),
  DEFINITION_STATUS: () =>
    intl.get('horc.statement.model.statement.definitionStatus').d('编排定义状态'),
  ACTIONS: () => intl.get('horc.statement.model.statement.actions').d('操作'),

  DETAIL: () => intl.get('horc.statement.view.button.detail').d('详情'),

  ONLINE: () => intl.get('horc.statement.view.tag.online').d('已上线'),
  OFFLINE: () => intl.get('horc.statement.view.tag.offline').d('已下线'),

  ORCHESTRATION_STATEMENT: () =>
    intl.get('horc.statement.view.title.orchestrationStatement').d('编排待办'),
  STATEMENT_DETAIL: () => intl.get('horc.statement.view.title.statementDetail').d('编排代办明细'),
  BASIC_INFORMATION: () => intl.get('horc.statement.view.title.baseInfo').d('基本信息'),
  STATEMENT_PARAM: () => intl.get('horc.statement.view.title.statementParam').d('执行参数'),
  TRANSLATE_ERROR: () => intl.get('horc.statement.view.message.translateError').d('字段解析失败'),
  DELETE_ERROR_TIP: () =>
    intl
      .get('horc.statement.model.statement.deleteErrorTip')
      .d('编排待办记录不存在，操作执行失败，请刷新列表界面查看最新记录'),

  ENABLE_GLOBAL_TRANSACTION: () =>
    intl.get('horc.statement.model.orchestration.enableGlobalTransaction').d('开启全局事务'),
  GLOBAL_TRANSACTION_TIMEOUT: () =>
    intl.get('horc.statement.model.orchestration.globalTransactionTimeout').d('事务超时时间(ms)'),
};

export default Langs;
