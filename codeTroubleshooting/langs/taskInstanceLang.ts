/**
 * 服务编排-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-4-26
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.taskInstance',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  DETAIL: () => intl.get('hzero.common.model.detail').d('详情'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  TENANT_NAME: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  LOG: () => intl.get('hzero.common.log').d('日志'),

  HEADER: () => intl.get('horc.taskInstance.view.title.header').d('任务实例'),
  CREATE_LINE: () => intl.get('horc.taskInstance.view.title.createLine').d('创建节点'),
  EDIT_LINE: () => intl.get('horc.taskInstance.view.title.editLine').d('修改节点'),
  FIELD_MAPPING: () => intl.get('horc.taskInstance.view.title.fieldMapping').d('字段映射'),
  ENSURE_ADD: () => intl.get('horc.taskInstance.view.title.ensureAdd').d('确定'),
  ONLINE_CONFIRM: () => intl.get('horc.taskInstance.view.title.onlineConfirm').d('确定上线吗'),
  OFFLINE_CONFIRM: () => intl.get('horc.taskInstance.view.title.offlineConfirm').d('确定下线吗'),
  HTTP_METHOD_CHANGE_CONFIRM: () =>
    intl.get('horc.taskInstance.view.title.httpMethodChangeConfirm').d('切换请求方法将清空请求'),
  RETURN: () => intl.get('horc.taskInstance.view.button.return').d('返回'),
  LOG_DETAIL: () => intl.get('horc.taskInstance.view.title.logDetail').d('日志详情'),

  NEW_WINDOW_SHOW: () => intl.get('horc.taskInstance.view.button.newWindowShow').d('新窗口展示'),
  TASK_RESULT: () => intl.get('horc.taskInstance.view.title.taskResult').d('任务结果'),
  TASK_INFO: () => intl.get('horc.taskInstance.view.title.taskInfo').d('任务信息'),

  CLOSE_ALL: () => intl.get('horc.taskInstance.view.button.closeAll').d('关闭所有'),
  RERUN: () => intl.get('horc.taskInstance.view.button.rerun').d('重跑'),
  RERUN_TIP: () =>
    intl
      .get('horc.taskInstance.view.button.rerunTip')
      .d('该任务实例由循环迭代节点中的子编排产生，点击重跑会根据当次循环的数据重跑该子编排'),

  SEQ_NUMBER: () => intl.get('horc.taskInstance.view.serialNumber').d('序号'),
  ORCH_TENANT: () => intl.get('horc.taskInstance.model.taskInstance.orchTenant').d('编排租户'),
  SOURCE_TYPE: () => intl.get('horc.taskInstance.model.taskInstance.sourceType').d('来源类型'),
  TASK_NAME: () => intl.get('horc.taskInstance.model.taskInstance.taskName').d('任务实例名称'),
  CODE_TASK: () => intl.get('horc.taskInstance.model.taskInstance.taskCode').d('任务编码'),
  THREAD_MECHANISM: () =>
    intl.get('horc.taskInstance.view.taskInstance.threadMechanism').d('线程执行机制'),
  FAILED_STRATEGY: () =>
    intl.get('horc.taskInstance.model.taskInstance.failedStrategy').d('失败策略'),
  INSTANCE_NAME: () =>
    intl.get('horc.taskInstance.model.taskInstance.instanceName').d('编排实例名称'),
  TASK_TYPE: () => intl.get('horc.taskInstance.model.taskInstance.taskType').d('任务类型'),
  STATUS: () => intl.get('horc.taskInstance.model.taskInstance.status').d('任务实例状态'),
  SUBMITTED_TIME: () =>
    intl.get('horc.taskInstance.model.taskInstance.submittedTime').d('提交时间'),
  START_TIME: () => intl.get('horc.taskInstance.model.taskInstance.startTime').d('任务开始时间'),
  END_TIME: () => intl.get('horc.taskInstance.model.taskInstance.endTime').d('任务结束时间'),
  TIME_CONSUMPTION: () =>
    intl.get('horc.taskInstance.model.taskInstance.timeConsumption').d('耗时(ms)'),
  TIME_CONSUMPTION_DESC: () =>
    intl.get('horc.taskInstance.model.taskInstance.timeConsumptionDesc').d('耗时'),
  HOST: () => intl.get('horc.taskInstance.model.taskInstance.host').d('任务执行主机'),
  LOG_LEVEL: () => intl.get('horc.taskInstance.model.taskInstance.logLevel').d('日志策略'),
  TASK_LEVEL: () => intl.get('horc.taskInstance.model.taskInstance.taskLevel').d('任务所属层级'),
  LEVEL_RESULT: () => intl.get('horc.taskInstance.model.taskInstance.levelResult').d('层级结果值'),

  ALERT_FLAG: () => intl.get('horc.taskInstance.model.taskInstance.alertFlag').d('告警标志'),
  RETRY_TIMES: () => intl.get('horc.taskInstance.model.taskInstance.retryTimes').d('重试次数'),
  INSTANCE_PRIORITY: () =>
    intl.get('horc.taskInstance.model.taskInstance.instancePriority').d('优先级'),
  WORKER_GROUP: () => intl.get('horc.taskInstance.model.taskInstance.workerGroup').d('工作组'),
  REMARK: () => intl.get('horc.taskInstance.model.taskInstance.remark').d('备注说明'),
  FAILURE_STRATEGY: () =>
    intl.get('horc.taskInstance.model.taskInstance.failureStrategy').d('失败策略'),

  SAVE_VALIDATE: () =>
    intl.get('horc.taskInstance.model.taskInstance.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.taskInstance.model.preposedMachine.saveEmpty').d('无修改内容,无需保存'),

  SUBMITTED_TIME_LOW: () =>
    intl.get('horc.taskInstance.model.taskInstance.submitted_time_low').d('提交时间从'),
  SUBMITTED_TIME_HIGH: () =>
    intl.get('horc.taskInstance.model.taskInstance.submitted_time_high').d('提交时间至'),
  RETRY_TIMES_LOW: () =>
    intl.get('horc.taskInstance.model.taskInstance.retry_times_low').d('重试次数从'),
  RETRY_TIMES_HIGH: () =>
    intl.get('horc.taskInstance.model.taskInstance.retry_times_high').d('重试次数至'),

  PRE_TASK: () => intl.get('horc.taskInstance.model.taskInstance.preTask').d('前序任务'),
  TEXT_TYPE: () => intl.get('horc.taskInstance.model.taskInstance.textType').d('响应文本类型'),
  CONTENT_TYPE: () =>
    intl.get('horc.taskInstance.model.taskInstance.contentType').d('响应内容类型'),
  PROCESS_TIME: () => intl.get('horc.taskInstance.model.taskInstance.processTime').d('处理时间'),
  RESULT: () => intl.get('horc.taskInstance.model.taskInstance.result').d('响应结果'),
  REQUEST_INFO: () => intl.get('horc.taskInstance.model.taskInstance.request').d('请求信息'),
  RESULT_TIP: () =>
    intl
      .get('horc.taskInstance.view.title.taskResultTip')
      .d(
        '响应结果，即任务实例运行结果；当响应结果大于结果大小限制（默认10M）时，将不显示结果信息，若需要查看，请点击下载按钮下载结果文件'
      ),
  TRANSLATE_ERROR: () =>
    intl.get('horc.taskInstance.view.message.translateError').d('字段解析失败'),
  BATCH_NUM: () => intl.get('horc.taskInstance.model.taskInstance.batchNum').d('批次号'),
  STATUS_MEANING: () => intl.get('horc.taskInstance.status').d('状态'),
  TEXT_TYPE_MEANING: () =>
    intl.get('horc.taskInstance.model.taskInstance.textTypeMeaning').d('响应文本类型'),
  ACTIONS: () => intl.get('horc.taskInstance.model.taskInstance.actions').d('操作'),

  DOWNLOAD_LOG: () => intl.get('horc.taskInstance.view.button.downLoad').d('下载日志文件'),

  GLOBAL_TRANSACTION_FLAG: () =>
    intl.get('horc.taskInstance.model.orchestration.globalTransactionFlag').d('启用全局事务'),

  TASK_CODE: () => intl.get('horc.taskInstance.model.taskInstance.taskCode').d('节点分类编码'),
  TASK_CODE_MEANING: () =>
    intl.get('horc.taskInstance.model.taskInstance.taskCodeMeaning').d('节点分类名称'),
  TASK_RUNNING_INFO: () =>
    intl.get('horc.taskInstance.model.taskInstance.taskRunningInfo').d('任务运行情况'),

  SUB_ORCH_INFO: () => intl.get('horc.taskInstance.view.button.subOrchInfo').d('子编排详情'),
  SUB_ORCH_DEFINITION_NAME: () =>
    intl.get('horc.taskInstance.model.taskInstance.subOrchDefinitionName').d('子编排定义名称'),
  SUB_ORCH_DEFINITION_CODE: () =>
    intl.get('horc.taskInstance.model.taskInstance.subOrchDefinitionCode').d('子编排定义编码'),
  SUB_ORCH_TASK_NAME: () =>
    intl.get('horc.taskInstance.model.taskInstance.subOrchTaskName').d('子编排实例名称'),
  SUB_ORCH_TASK_STATUS: () =>
    intl.get('horc.taskInstance.model.taskInstance.subOrchTaskStatus').d('子编排实例状态'),
  SUB_ORCH_RUNNING_STATUS: () =>
    intl.get('horc.taskInstance.model.taskInstance.subOrchRunningStatus').d('子编排句柄运行状态'),
  EXTRACT_RESULT: () =>
    intl.get('horc.taskInstance.model.taskInstance.extractResult').d('抽取结果'),
  M_START_TIME: () => intl.get('horc.taskInstance.model.text.startTime').d('开始时间'),
  M_END_TIME: () => intl.get('horc.taskInstance.model.text.endTime').d('结束时间'),
};

export default Langs;
