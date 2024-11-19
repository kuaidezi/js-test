/**
 * 服务编排-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-4-26
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.instance',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  TENANT_NAME: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  LOG: () => intl.get('hzero.common.log').d('日志'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  CONFIRM_TITLE: () => intl.get('hzero.common.message.confirm.title').d('提示'),

  CLEAR_INSTANCE: () => intl.get('horc.instance.view.button.clearInstance').d('清理编排实例'),
  TASK_INSTANCE: () => intl.get('horc.instance.view.button.taskInstance').d('任务实例'),
  GANTT_TITLE: () => intl.get('horc.instance.view.title.ganttTitle').d('编排实例甘特图'),
  HEADER: () => intl.get('horc.instance.view.title.header').d('编排实例'),
  CREATE_LINE: () => intl.get('horc.instance.view.title.createLine').d('创建节点'),
  EDIT_LINE: () => intl.get('horc.instance.view.title.editLine').d('修改节点'),
  FIELD_MAPPING: () => intl.get('horc.instance.view.title.fieldMapping').d('字段映射'),
  ENSURE_ADD: () => intl.get('horc.instance.view.title.ensureAdd').d('确定'),
  ONLINE_CONFIRM: () => intl.get('horc.instance.view.title.onlineConfirm').d('确定上线吗'),
  OFFLINE_CONFIRM: () => intl.get('horc.instance.view.title.offlineConfirm').d('确定下线吗'),
  HTTP_METHOD_CHANGE_CONFIRM: () =>
    intl.get('horc.instance.view.title.httpMethodChangeConfirm').d('切换请求方法将清空请求'),

  MUTEX_INSTANCES: () => intl.get('horc.instance.view.title.MutexInstances').d('互斥实例'),
  MUTEX_RELATION: () => intl.get('horc.instance.model.instance.mutexRelation').d('编排定义关系'),
  MUTEX_SCOPE: () => intl.get('horc.instance.model.instance.mutexScope').d('互斥域'),
  MUTEX_CONDITION: () => intl.get('horc.instance.model.instance.mutexCondition').d('互斥条件'),
  STATUS_CODE: () => intl.get('horc.instance.model.instance.statusCode').d('运行状态'),

  LOG_DETAIL: () => intl.get('horc.instance.view.title.logDetail').d('日志详情'),
  NEW_WINDOW_SHOW: () => intl.get('horc.instance.view.button.newWindowShow').d('新窗口展示'),

  ONLINE: () => intl.get('horc.instance.view.button.online').d('上线'),
  OFFLINE: () => intl.get('horc.instance.view.button.offline').d('下线'),
  EXECUTE: () => intl.get('horc.instance.view.button.execute').d('运行'),
  RERUN: () => intl.get('horc.instance.view.button.rerun').d('重跑'),
  PAUSE: () => intl.get('horc.instance.view.button.pause').d('暂停'),
  STOP: () => intl.get('horc.instance.view.button.stop').d('停止'),
  RESUME: () => intl.get('horc.instance.view.button.resume').d('恢复'),
  VIEW_MUTEX_INSTANCES: () =>
    intl.get('horc.instance.view.button.viewMutexInstances').d('查看互斥实例'),
  RESUME_EXECUTE: () => intl.get('horc.instance.view.button.resumeExecute').d('恢复运行'),
  RESUME_FAILED: () => intl.get('horc.instance.view.button.resumeFailed').d('恢复失败'),
  GANTT: () => intl.get('horc.instance.view.button.gantt').d('甘特图'),
  FAILOVER: () => intl.get('horc.instance.view.button.failover').d('故障转移'),

  SEQ_NUMBER: () => intl.get('horc.instance.view.serialNumber').d('序号'),
  SOURCE_TYPE: () => intl.get('horc.instance.model.instance.sourceType').d('来源类型'),
  ORCH_TENANT: () => intl.get('horc.instance.model.instance.orchTenant').d('编排租户'),
  INSTANCE_NAME: () => intl.get('horc.instance.model.instance.instanceName').d('编排实例名称'),
  INSTANCE_STATUS: () => intl.get('horc.instance.model.instance.instanceStatus').d('实例状态'),
  STATEMENT_TYPE: () => intl.get('horc.instance.model.instance.statementType').d('执行类型'),
  STATEMENT_START_TIME: () =>
    intl.get('horc.instance.model.instance.statementStartTime').d('执行触发时间'),
  START_TIME: () => intl.get('horc.instance.model.instance.startTime').d('运行开始时间'),
  END_TIME: () => intl.get('horc.instance.model.instance.endTime').d('运行结束时间'),
  TIME_CONSUMPTION: () => intl.get('horc.instance.model.instance.timeConsumption').d('耗时(ms)'),
  TIME_CONSUMPTION_DESC: () =>
    intl.get('horc.instance.model.instance.timeConsumptionDesc').d('耗时'),
  FAILOVER_FLAG: () => intl.get('horc.instance.model.instance.failoverFlag').d('容错标志'),
  FAILURE_STRATEGY: () => intl.get('horc.instance.model.instance.failureStrategy').d('失败策略'),
  HOST: () => intl.get('horc.instance.model.instance.host').d('主机地址'),
  WORKER_GROUP: () => intl.get('horc.instance.model.instance.workerGroup').d('工作组'),
  MAPPING_NAME: () => intl.get('horc.instance.model.instance.mappingName').d('编排映射'),
  MAPPING_NAME_TIP: () =>
    intl.get('horc.instance.model.instance.mappingNameTip').d('编排映射名称(编排映射编码)'),
  LOG_LEVEL: () => intl.get('horc.instance.model.taskInstance.logLevel').d('日志策略'),
  RECORD_INSTANCE_FLAG: () =>
    intl.get('horc.instance.model.taskInstance.recordInstanceFlag').d('记录实例详情'),

  SAVE_VALIDATE: () => intl.get('horc.instance.model.instance.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.instance.model.preposedMachine.saveEmpty').d('无修改内容,无需保存'),

  STATEMENT_START_TIME_LOW: () =>
    intl.get('horc.instance.model.instance.statement_start_time_low').d('执行触发时间从'),
  STATEMENT_START_TIME_HIGH: () =>
    intl.get('horc.instance.model.instance.statement_start_time_high').d('执行触发时间至'),
  START_TIME_LOW: () => intl.get('horc.instance.model.instance.start_time_low').d('运行开始时间从'),
  START_TIME_HIGH: () =>
    intl.get('horc.instance.model.instance.start_time_high').d('运行开始时间至'),
  END_TIME_LOW: () => intl.get('horc.instance.model.instance.end_time_low').d('运行结束时间从'),
  END_TIME_HIGH: () => intl.get('horc.instance.model.instance.end_time_high').d('运行结束时间至'),
  TIME_CONSUMPTION_LOW: () =>
    intl.get('horc.instance.model.instance.time_consumption_low').d('耗时时长从(ms)'),
  TIME_CONSUMPTION_HIGH: () =>
    intl.get('horc.instance.model.instance.time_consumption_high').d('耗时时长至(ms)'),

  ENABLE_GLOBAL_TRANSACTION: () =>
    intl.get('horc.instance.model.orchestration.enableGlobalTransaction').d('开启全局事务'),
  GLOBAL_TRANSACTION_TIMEOUT: () =>
    intl.get('horc.instance.model.orchestration.globalTransactionTimeout').d('事务超时时间(ms)'),
  CLEAR_TYPE: () => intl.get('horc.instance.model.instance.clearType').d('类型'),
  CLEAR_INSTANCE_SUCCESS: () =>
    intl
      .get('horc.instance.model.traceLog.clearInstanceSuccess')
      .d('操作成功，数据清理将执行后台操作，请重新执行查询或刷新列表操作查看最新进度'),

  CONFIRM: () => intl.get('horc.instance.model.instance.services.confirm').d('确认'),

  EXECUTE_TRIGGER_TIME: () =>
    intl.get('horc.instance.model.instance.services.executeTriggerTime').d('执行触发时间'),
  BATCH_FAILOVER_TIP: () =>
    intl
      .get('horc.instance.model.instance.services.batchFailoverTip')
      .d('是否将所选择的记录进行故障转移？'),
};

export default Langs;
