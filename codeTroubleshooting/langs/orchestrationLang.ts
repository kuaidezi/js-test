/**
 * 服务编排-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-4-26
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  CONTINUE: () => intl.get('hzero.common.button.continue').d('继续'),
  SURE: () => intl.get('hzero.common.button.ok').d('确定'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  SYNC: () => intl.get('hzero.common.button.sync').d('同步'),
  IMPORT: () => intl.get('hzero.common.button.import').d('导入'),
  EXPORT: () => intl.get('hzero.common.button.export').d('导出'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  USER: () => intl.get('hzero.common.model.user').d('用户'),
  BELONG_TENANT: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  DELETE_CONFIRM: () => intl.get('hzero.common.message.confirm.delete').d('是否删除此条记录？'),
  EMAIL_VALIDATION: () => intl.get('hzero.common.validation.email').d('邮箱格式不正确'),
  ENABLE_FLAG: () => intl.get('hzero.common.model.common.enableFlag').d('是否启用'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  NOT_CHANGE: () => intl.get('hzero.common.validation.notChange').d('未更改'),
  CONFIRM_TITLE: () => intl.get('hzero.common.message.confirm.title').d('提示'),
  PATTERN_CODE_UPPER: () =>
    intl
      .get('hzero.common.validation.codeUpper')
      .d('全大写及数字，必须以字母、数字开头，可包含“-”、“_”、“.”、“/”'),
  PATTERN_CODE: () =>
    intl
      .get('hzero.common.validation.code')
      .d('大小写及数字，必须以字母、数字开头，可包含“-”、“_”、“.”、“/”'),
  UPGRADE_ORCH_TIP: () =>
    intl
      .get('horc.orchestration.view.title.upgradeOrchTip')
      .d('该编排定义中部分节点关联的子编排版本可'),
  UPGRADE_CONNECTOR_TIP: () =>
    intl
      .get('horc.orchestration.view.title.upgradeConnectorTip')
      .d('该编排定义中部分节点关联的连接器版本可'),
  NODE_UPGRADE_ORCH_TIP: () =>
    intl.get('horc.orchestration.view.title.nodeUpgradeOrchTip').d('该节点关联的子编排版本可'),
  NODE_UPGRADE_CONNECTOR_TIP: () =>
    intl.get('horc.orchestration.view.title.nodeUpgradeConnectorTip').d('该节点关联的连接器版本可'),
  SCHEDULE_INFO: () => intl.get('horc.orchestration.view.title.scheduleInfo').d('调度任务运行情况'),
  SCHEDULE_STATUS: () => intl.get('horc.orchestration.view.title.scheduleStatus').d('调度任务状态'),
  UPDATE: () => intl.get('horc.orchestration.view.title.update').d('升级版本'),
  UPDATE_CONTENT: () =>
    intl.get('horc.orchestration.view.title.updateContent').d('是否升级到最新版本'),
  UNIT_TEST: () => intl.get('horc.orchestration.view.button.unitTest').d('单元调试'),
  START_TEST: () => intl.get('horc.orchestration.view.button.startTest').d('开始调试'),
  QUIT_TEST: () => intl.get('horc.orchestration.view.button.quitTest').d('退出调试'),
  RETRY_TEST: () => intl.get('horc.orchestration.view.button.retryTest').d('重试'),
  STOP_TEST: () => intl.get('horc.orchestration.view.button.stopTest').d('停止'),
  PERV_STEP: () => intl.get('horc.orchestration.view.button.pervStep').d('上一步'),
  NEXT_STEP: () => intl.get('horc.orchestration.view.button.nextStep').d('下一步'),
  REFRESH_RESPONSE_RESULT: () =>
    intl.get('horc.orchestration.view.button.refreshResponseResult').d('刷新响应结果'),

  FIRST_STEP_TITLE: () =>
    intl.get('horc.orchestration.view.title.firstStepTitle').d('请选择所要调试的一个或多个节点'),
  SECOND_STEP_TITLE: () =>
    intl.get('horc.orchestration.view.title.secondStepTitle').d('请模拟单元调试输入数据'),
  TEST_HISTORY: () => intl.get('horc.orchestration.view.title.testHistory').d('调试历史'),
  VERSION: () => intl.get('horc.orchestration.view.title.version').d('版本'),
  TIME: () => intl.get('horc.orchestration.view.title.time').d('时间'),
  NODE_PARAM: () => intl.get('horc.orchestration.view.title.nodeParam').d('节点参数'),
  SIMULATION_NODE_PARAM: () =>
    intl.get('horc.orchestration.view.title.simulationNodeParam').d('模拟节点参数'),
  CONTINUE_TESTING_TIP_TITLE: () =>
    intl.get('horc.orchestration.view.title.continueTestingTipTitle').d('确认继续执行该操作？'),
  CONTINUE_TESTING_TIP: () =>
    intl
      .get('horc.orchestration.view.title.continueTestingTip')
      .d('数据已变更，请先保存，继续执行该操作则会丢失该未保存数据。'),
  STOP_TEST_TIP_TITLE: () =>
    intl
      .get('horc.orchestration.view.title.stopTestTipTitle')
      .d('当前正在进行单元调试，确定停止？'),
  STOP_TEST_TIP_CONTENT: () =>
    intl.get('horc.orchestration.view.title.stopTestTipContent').d('确定后将停止本次调试'),
  QUIT_TEST_TIP_TITLE: () =>
    intl
      .get('horc.orchestration.view.title.quitTestTipTitle')
      .d('当前正在进行单元调试，确定退出？'),
  QUIT_TEST_TIP_CONTENT: () =>
    intl
      .get('horc.orchestration.view.title.quitTestTipContent')
      .d('确定后将停止单元调试，退出调试态，返回编辑态'),
  TASK_CONFIG: () => intl.get('horc.orchestration.view.title.taskConfig').d('任务配置'),
  TASK_RESULT: () => intl.get('horc.orchestration.view.title.taskResult').d('任务结果'),
  TASK_INFO: () => intl.get('horc.orchestration.view.title.taskInfo').d('任务信息'),
  TASK_LOG: () => intl.get('horc.orchestration.view.title.taskLog').d('任务日志'),

  SURE_DELETE: () => intl.get('horc.orchestration.view.title.sureDelete').d('确认删除'),
  HEADER: () => intl.get('horc.orchestration.view.title.orchestration').d('编排定义'),
  HTTP_TITLE: () => intl.get('horc.orchestration.view.title.HTTPinfo').d('HTTP信息'),
  FIELD_MAPPING: () => intl.get('horc.orchestration.view.title.fieldMapping').d('字段映射'),
  DATA_TRANSFORM: () => intl.get('horc.orchestration.view.title.dataMapping').d('数据转化'),
  DYNAMIC_FORM: () => intl.get('horc.orchestration.view.title.dynamicForm').d('表单信息'),
  AUTH_TITLE: () => intl.get('horc.orchestration.view.title.authTitle').d('认证信息'),
  MQ_TITLE: () => intl.get('horc.orchestration.view.title.mqTitle').d('消息队列'),
  BASIC_INFO: () => intl.get('horc.orchestration.view.title.basicInfo').d('基本信息'),
  TRANSACTION_MANAGE: () =>
    intl.get('horc.orchestration.view.title.transactionManage').d('事务管理'),
  FILE_OPERATION: () => intl.get('horc.orchestration.view.title.fileOperation').d('文件操作'),
  ENSURE_ADD: () => intl.get('horc.orchestration.view.title.ensureAdd').d('确定'),
  ONLINE_CONFIRM: () => intl.get('horc.orchestration.view.title.onlineConfirm').d('确定上线吗'),
  OFFLINE_CONFIRM: () => intl.get('horc.orchestration.view.title.offlineConfirm').d('确定下线吗'),
  IMPORT_JSON: () => intl.get('horc.orchestration.view.button.importJson').d('导入JSON'),
  IMPORT_XML: () => intl.get('horc.orchestration.view.button.importXml').d('导入XML'),
  IMPORT_TEXT: () => intl.get('horc.orchestration.view.button.importText').d('导入文本'),
  SELECT_FIELD: () => intl.get('horc.orchestration.view.button.selectField').d('选择字段'),

  TOOL: () => intl.get('horc.orchestration.model.orchestration.tool').d('工具栏'),
  TOOL_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.tool.tip')
      .d('请选中下方条目拖拽至右方画布中进行编排操作，仅支持在(已下线)状态下操作。'),
  SEQ_NUMBER: () => intl.get('horc.orchestration.view.serialNumber').d('序号'),
  BASIC: () => intl.get('horc.orchestration.model.orchestration.basic').d('编排信息'),
  MAPPING_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.mappingName').d('编排映射名称'),
  BASIC_TIP: () => intl.get('horc.orchestration.model.orchestration.basic.tip').d('编排信息'),
  TASK_CODE: () => intl.get('horc.orchestration.model.orchestration.http.taskCode').d('任务编码'),
  TASK_CODE_VALIDATE: () =>
    intl
      .get('horc.orchestration.model.orchestration.http.validate.taskCode')
      .d(
        "任务编码不能包含关键字【'input', 'global', 'local', 'result', 'node', 'super'】,任何大小写的形式"
      ),
  SCHEDULER_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.scheduleFlag').d('定时标志'),
  EDGE_TITLE: () => intl.get('horc.orchestration.model.orchestration.http.edgeTitle').d('连线属性'),
  EDGE_NAME: () => intl.get('horc.orchestration.model.orchestration.http.edgeName').d('连线名称'),
  TASK_NAME: () => intl.get('horc.orchestration.model.orchestration.http.taskName').d('任务名称'),
  TASK_NAME_VALIDATE: () =>
    intl
      .get('horc.orchestration.model.orchestration.http.validate.taskName')
      .d(
        "任务名称不能包含关键字【'input', 'global', 'local', 'result', 'node', 'super'】,任何大小写的形式"
      ),
  THREAD_MECHANISM: () =>
    intl.get('horc.orchestration.model.definition.threadMechanism').d('线程执行机制'),
  THREAD_MECHANISM_TIP: () =>
    intl
      .get('horc.orchestration.model.definition.threadMechanismTip')
      .d(
        '线程执行机制，同步或异步，默认同步。同步即按照编排定义的流程顺序依次执行。选择异步时，当前任务将以异步线程执行，任务线程将直接返回，改结果非最终的任务结果。最终结果以节点执行结果为准。'
      ),
  FAILURE_STRATEGY: () =>
    intl.get('horc.orchestration.model.model.definition.failureStrategy').d('失败策略'),
  FAILURE_STRATEGY_TIP: () =>
    intl
      .get('horc.orchestration.model.model.definition.failureStrategyTip')
      .d(
        '失败策略，终止或继续。任务节点的失败策略为空时使用编排实例的失败策略(全局)。任务的失败策略优先(覆盖)编排实例失败策略。特别地，当编排实例(全局)失败策略为"终止"，节点失败策略若未设置或设置为"终止"时，当前节点失败则触发剩余节点强制结束；当编排实例(全局)设置为"继续"，节点失败策略设置为"终止"时，当前节点失败仅中断当前分支。'
      ),
  TASK_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.http.task_name.tip')
      .d('名称，请确保同一编排内任务名称唯一。'),

  ONLINE: () => intl.get('horc.orchestration.view.button.online').d('上线'),
  OFFLINE: () => intl.get('horc.orchestration.view.button.offline').d('下线'),
  EXECUTE: () => intl.get('horc.orchestration.view.button.execute').d('运行'),
  DUPLICATE: () => intl.get('horc.orchestration.view.button.duplicate').d('克隆'),
  RERUN: () => intl.get('horc.orchestration.view.button.rerun').d('重跑'),
  PAUSE: () => intl.get('horc.orchestration.view.button.pause').d('暂停'),
  STOP: () => intl.get('horc.orchestration.view.button.stop').d('停止'),
  RESUME: () => intl.get('horc.orchestration.view.button.resume').d('恢复'),
  TEST: () => intl.get('horc.orchestration.view.button.test').d('测试'),
  TEST_CONNECT: () => intl.get('horc.orchestration.view.button.testConnect').d('测试连接'),
  UPGARDE: () => intl.get('horc.orchestration.view.button.upgrade').d('升级'),
  SETTING: () => intl.get('horc.orchestration.view.button.setting').d('配置'),
  JSON_IMPORT: () => intl.get('horc.orchestration.view.button.jsonImport').d('Json导入'),
  JSON_EXPORT: () => intl.get('horc.orchestration.view.button.jsonExport').d('Json导出'),
  EXCEL_IMPORT: () => intl.get('horc.orchestration.view.button.excelImport').d('Excel导入'),
  EXCEL_EXPORT: () => intl.get('horc.orchestration.view.button.excelExport').d('Excel导出'),

  CONNECT_SUCCESS: () => intl.get('horc.orchestration.view.button.connectSuccess').d('连接成功'),
  CONNECT_FAILED: () => intl.get('horc.orchestration.view.button.connectFailed').d('连接失败'),

  EXECUTE_TITLE: () => intl.get('horc.orchestration.view.title.execute').d('启动前请先设置参数'),
  FAILED_STRATEGY: () =>
    intl.get('horc.orchestration.model.orchestration.failedStrategy').d('失败策略'),
  WARNING_TYPE: () => intl.get('horc.orchestration.model.orchestration.warningType').d('告警类型'),
  WORKER_GROUP: () => intl.get('horc.orchestration.model.orchestration.workerGroup').d('工作组'),
  TIMES: () => intl.get('horc.orchestration.model.orchestration.times').d('次'),
  MINUTES: () => intl.get('horc.orchestration.model.orchestration.minutes').d('分钟'),
  SECONDS: () => intl.get('horc.orchestration.model.orchestration.seconds').d('秒'),
  MILLI: () => intl.get('horc.orchestration.model.orchestration.milli').d('毫秒'),
  WORKER_GROUP_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.workerGroup.tip')
      .d('工作组，亦即任务分组，同一工作组的任务将会被对应的工作负载节点处理。'),
  PREFERENCE: () => intl.get('horc.orchestration.model.orchestration.preference').d('偏好'),
  PREFERENCE_PLACEHOLDER: () =>
    intl
      .get('horc.orchestration.model.orchestration.preference_placeholder')
      .d('偏好(用于编排任务获取筛选)'),
  COMPLEMENT: () => intl.get('horc.orchestration.model.orchestration.complement').d('补数'),
  EXEC_METHOD: () => intl.get('horc.orchestration.model.orchestration.execMethod').d('执行方式'),
  SERIAL_EXEC: () => intl.get('horc.orchestration.model.orchestration.serialExec').d('串行执行'),
  PARALLEL_EXEC: () =>
    intl.get('horc.orchestration.model.orchestration.parallelExec').d('并行执行'),
  DISPATCH_DATE: () =>
    intl.get('horc.orchestration.model.orchestration.dispatchDate').d('调度日期'),
  EXECUTE_NODE: () => intl.get('horc.orchestration.model.orchestration.executeNode').d('节点执行'),

  ADD_PARAM: () => intl.get('horc.orchestration.view.button.addParam').d('添加参数'),
  CLEAR_PARAM: () => intl.get('horc.orchestration.view.button.clearParam').d('清空参数'),
  ADD_HEADER: () => intl.get('horc.orchestration.view.button.addHeader').d('添加请求头'),
  CLEAR_HEADER: () => intl.get('horc.orchestration.view.button.clearHeader').d('清空请求头'),
  PARAM: () => intl.get('horc.orchestration.model.orchestration.param').d('参数'),
  PARAM_NAME: () => intl.get('horc.orchestration.model.orchestration.paramName').d('参数名'),
  PARAM_NAME_TIP: () =>
    intl.get('horc.orchestration.model.orchestration.paramNameTip').d('请确保全局参数的参数名唯一'),
  PARAM_VALUE: () => intl.get('horc.orchestration.model.orchestration.paramValue').d('参数值'),

  DEFINITION_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.definitionName').d('编排定义名称'),
  DEFINITION_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.definitionNameTip')
      .d(
        '编排定义名称。确保唯一。当触发克隆动作时，默认使用"被克隆"定义名称+"_copy"(可后台自定义)作为新定义名称，字符超长则截断，若名称与已有名称重复则使用默认规则生成，编辑保存时可更改。'
      ),
  DEFINITION_CODE: () =>
    intl.get('horc.orchestration.model.orchestration.definitionCode').d('编排定义编码'),
  DEFINITION_CODE_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.definitionCodeTip')
      .d('不填写时按照编码规则生成'),
  NODE_NAME: () => intl.get('horc.orchestration.model.orchestration.nodeName').d('节点名称'),
  STATUS: () => intl.get('horc.orchestration.status').d('状态'),
  DESCRIPTION: () => intl.get('horc.orchestration.model.description').d('描述'),
  NODE_DESCRIPTION: () => intl.get('horc.orchestration.model.nodeDescription').d('节点描述'),
  NODE_CLASSIFY_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.nodeClassifyName').d('节点分类名称'),
  NODE_CLASSIFY_CODE: () =>
    intl.get('horc.orchestration.model.orchestration.nodeClassifyCode').d('节点分类编码'),
  PRIORITY: () => intl.get('horc.orchestration.model.orchestration.priority').d('优先级'),
  MUTEX_STRATEGY: () =>
    intl.get('horc.orchestration.model.orchestration.mutexStrategy').d('互斥策略'),
  LOCK_KEY: () => intl.get('horc.orchestration.model.orchestration.lockKey').d('互斥键'),
  LOG_LEVEL: () => intl.get('horc.orchestration.model.orchestration.logLevel').d('日志策略'),
  RECORD_INSTANCE_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.recordInstanceFlag').d('记录实例详情'),
  EXECUTION_TYPE: () =>
    intl.get('horc.orchestration.model.orchestration.executionType').d('执行策略'),
  RECORD_INSTANCE_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.recordInstanceFlagTip')
      .d('配置启用：记录子编排中节点执行完成后生成的任务实例及任务结果'),
  RETRY_TIMES: () =>
    intl.get('horc.orchestration.model.orchestration.retryTimes').d('失败重试次数'),
  RETRY_TIMES_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.retryTimes.tip')
      .d('失败重试次数，失败后重试的次数，数值范围0-99，默认0即不重试。'),
  RETRY_INTERVAL: () =>
    intl.get('horc.orchestration.model.orchestration.retryInterval').d('失败重试间隔'),
  RETRY_INTERVAL_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.retryInterval.tip')
      .d('失败重试间隔，数值范围0-99999，默认1，单位：秒'),
  ALERT_FLAG: () => intl.get('horc.orchestration.model.orchestration.alertFlag').d('启用告警'),
  TIMEOUT_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.timeoutFlag').d('启用超时告警'),
  TIMEOUT_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.timeoutWarning.tip')
      .d('超时告警标志，是否启用超时告警。启用时，运行超时将执行告警任务。'),
  TIMEOUT_STRATEGY: () =>
    intl.get('horc.orchestration.model.orchestration.timeoutStrategy').d('超时策略'),
  TIMEOUT_STRATEGY_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.timeoutStrategy.tip')
      .d('超时策略，选择告警时，任务超时根据告警代码发送告警消息，默认发送任务超时告警消息。'),
  TIMEOUT_STRATEGY_WARNING: () =>
    intl.get('horc.orchestration.model.orchestration.timeoutStrategyWarning').d('警告'),
  TIMEOUT_STRATEGY_FAILURE: () =>
    intl.get('horc.orchestration.model.orchestration.timeoutStrategyFailure').d('失败'),
  STATUS_OFFLINE: () =>
    intl.get('horc.orchestration.model.orchestration.statusOffline').d('已下线'),

  TIMEOUT_TIME: () => intl.get('horc.orchestration.model.orchestration.timeoutTime').d('超时时长'),

  ENABLE_RESULT_PROPAGATION: () =>
    intl.get('horc.orchestration.model.orchestration.enableResultPropagation').d('允许结果传递'),
  GLOBAL_PROMOTION_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.globalPromotionFlag').d('结果全局参数'),

  STATUS_SUBMITTED: () =>
    intl.get('horc.orchestration.model.orchestration.status_submitted').d('已提交'),
  STATUS_RUNNING: () =>
    intl.get('horc.orchestration.model.orchestration.status_running').d('正在运行'),
  STATUS_PREPARING_PAUSE: () =>
    intl.get('horc.orchestration.model.orchestration.status_preparing_pause').d('准备暂停'),
  STATUS_PAUSED: () => intl.get('horc.orchestration.model.orchestration.status_paused').d('已暂停'),
  STATUS_PREPARING_STOP: () =>
    intl.get('horc.orchestration.model.orchestration.status_preparing_stop').d('准备停止'),
  STATUS_STOPPED: () =>
    intl.get('horc.orchestration.model.orchestration.status_stopped').d('已停止'),
  STATUS_FAILED: () => intl.get('horc.orchestration.model.orchestration.status_failed').d('已失败'),
  STATUS_SUCCESSFUL: () =>
    intl.get('horc.orchestration.model.orchestration.status_successful').d('已成功'),
  STATUS_NEED_FAULT_TOLERANCE: () =>
    intl.get('horc.orchestration.model.orchestration.status_need_fault_tolerance').d('需容错'),
  STATUS_KILLED: () =>
    intl.get('horc.orchestration.model.orchestration.status_killed').d('强制结束'),
  STATUS_THREAD_THREAD_WAITING: () =>
    intl
      .get('horc.orchestration.model.orchestration.status_thread_thread_waiting')
      .d('等待线程资源'),
  STATUS_DEPENDENCY_WAITING: () =>
    intl.get('horc.orchestration.model.orchestration.status_dependency_waiting').d('等待依赖任务'),

  STATEMENT_START: () =>
    intl.get('horc.orchestration.model.orchestration.statement_start').d('全新编排'),
  STATEMENT_START_CURRENT_TASK: () =>
    intl
      .get('horc.orchestration.model.orchestration.statement_start_current_task')
      .d('从当前任务节点开始'),
  RECOVER_TOLERANCE_FAULT: () =>
    intl.get('horc.orchestration.model.orchestration.recover_tolerance_fault').d('恢复容错'),
  RECOVER_SUSPENDED: () =>
    intl.get('horc.orchestration.model.orchestration.recover_suspended').d('恢复暂停'),
  START_FAILURE_TASK: () =>
    intl.get('horc.orchestration.model.orchestration.start_failure_task').d('从失败节点开始'),
  COMPLEMENT_DATA: () =>
    intl.get('horc.orchestration.model.orchestration.complement_data').d('补数'),
  SCHEDULER: () => intl.get('horc.orchestration.model.orchestration.scheduler').d('定时'),
  SCHEDULE_MANAGER: () =>
    intl.get('horc.orchestration.model.orchestration.scheduleManage').d('定时管理'),
  REPEAT_RUNNING: () =>
    intl.get('horc.orchestration.model.orchestration.repeat_running').d('重新运行'),
  RECOVER_WAITING_THREAD: () =>
    intl.get('horc.orchestration.model.orchestration.recover_waiting_thread').d('从等待线程恢复'),

  LOWEST: () => intl.get('horc.orchestration.model.orchestration.lowest').d('最低'),
  LOW: () => intl.get('horc.orchestration.model.orchestration.low').d('低'),
  MEDIUM: () => intl.get('horc.orchestration.model.orchestration.medium').d('中等'),
  HIGH: () => intl.get('horc.orchestration.model.orchestration.high').d('高'),
  HIGHEST: () => intl.get('horc.orchestration.model.orchestration.highest').d('最高'),

  FLOW_SMOOTH: () => intl.get('horc.orchestration.view.editor.flowSmooth').d('平滑线'),
  FLOW_POLYLINE: () => intl.get('horc.orchestration.view.editor.flowPolyline').d('折线'),
  FLOW_POLYLINE_ROUND: () =>
    intl.get('horc.orchestration.view.editor.flowPolylineRound').d('平滑折线'),
  EXPLAIN: () => intl.get('hzero.common.explain').d('说明'),
  SHAPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),
  NODE: () => intl.get('horc.orchestration.view.editor.node').d('节点'),
  EDGE: () => intl.get('horc.orchestration.view.editor.edge').d('边线'),
  UNDO: () => intl.get('horc.orchestration.view.editor.undo').d('撤销'),
  COPY: () => intl.get('horc.orchestration.view.editor.copy').d('复制'),
  REDO: () => intl.get('horc.orchestration.view.editor.redo').d('重做'),
  LOCATION: () => intl.get('horc.orchestration.view.editor.location').d('定位'),
  PASTE: () => intl.get('horc.orchestration.view.editor.paste').d('粘贴'),
  ZOOM_IN: () => intl.get('horc.orchestration.view.editor.zoomIn').d('放大'),
  ZOOM_OUT: () => intl.get('horc.orchestration.view.editor.zoomOut').d('缩小'),
  AUTO_ZOOM: () => intl.get('horc.orchestration.view.editor.autoZoom').d('自适应尺寸'),
  RESET_ZOOM: () => intl.get('horc.orchestration.view.editor.resetZoom').d('实际尺寸'),
  CLEAR_ALL: () => intl.get('horc.orchestration.view.editor.clearAll').d('清空画布'),
  MINI_MAP: () => intl.get('horc.orchestration.view.editor.miniMap').d('缩略图'),
  MULTI_SELECT: () => intl.get('horc.orchestration.view.editor.multiSelect').d('区域选择'),
  GRAPH_NOT_EMPTY: () =>
    intl.get('horc.orchestration.validation.graph.notEmpty').d('编排定义画布未包含任何节点'),
  GRAPH_NODE_REPEAT: () =>
    intl.get('horc.orchestration.validation.node.repeat').d('存在相同任务名称'),
  GRAPH_CODE_REPEAT: () =>
    intl.get('horc.orchestration.validation.code.repeat').d('存在相同任务编码'),
  GRAPH_CHANGED: () =>
    intl.get('horc.orchestration.validation.node.changed').d('当前编排定义未保存，是否离开？'),
  GRAPH_FORBIDDEN_CREATE: () =>
    intl.get('horc.orchestration.validation.node.forbidden').d('当前菜单不可用'),
  EXE: () => intl.get('horc.orchestration.view.button.exe').d('执行'),
  START_PARAM: () => intl.get('horc.orchestration.view.button.startParam').d('启动参数'),
  GLOBAL_PARAM: () => intl.get('horc.orchestration.view.button.globalParam').d('全局参数'),
  PROCESS_REFERENCE: () =>
    intl.get('horc.orchestration.expression.model.processReference').d('流程入参'),
  MUTEX_RELATION: () => intl.get('horc.orchestration.view.button.mutexRelation').d('互斥关系'),
  VIEW_VAR: () => intl.get('horc.orchestration.view.button.viewVar').d('查看变量'),
  VIEW_LOG: () => intl.get('horc.orchestration.view.button.viewLog').d('日志结果'),
  LAST_UPDATE_DATE: () =>
    intl.get('horc.orchestration.view.title.lastUpdateDate').d('上次保存时间'),
  NODE_PANEL: () => intl.get('horc.orchestration.view.title.nodePanel').d('组属性配置'),

  GROUP_NAME: () => intl.get('horc.orchestration.model.orchestration.groupName').d('分组名称'),
  CREATE_GROUP: () => intl.get('horc.orchestration.model.orchestration.createGroup').d('新建分组'),

  ALERT_CODE: () => intl.get('horc.orchestration.model.orchestration.alertCode').d('告警代码'),
  TIME_OUT_ALERT_CODE: () =>
    intl.get('horc.orchestration.model.orchestration.timeoutAlertCode').d('超时告警代码'),
  TIME_OUT_ALERT_CODE_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.timeoutAlertCode.tip')
      .d('超时告警代码，启用超时告警时必输，任务超时时根据超时告警代码发送告警消息。'),

  FAIL_FLAG: () => intl.get('horc.orchestration.model.orchestration.failFlag').d('启用失败告警'),
  FAIL_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.failFlag.tip')
      .d(
        '启用失败告警，开启时，任务运行失败发送失败告警；特别地，任务超时且失败时只会发超时告警消息。'
      ),
  FAIL_ALERT_CODE: () =>
    intl.get('horc.orchestration.model.orchestration.failAlertCode').d('失败告警代码'),
  FAIL_ALERT_CODE_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.failAlertCode.tip')
      .d('失败告警代码，启用失败告警时必输，任务失败时根据失败告警代码发送告警消息。'),

  SAVE_VALIDATE: () =>
    intl.get('horc.orchestration.model.orchestration.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.orchestration.model.orchestration.saveEmpty').d('无修改内容,无需保存'),
  GRAPH_DATA_VALIDATE: () =>
    intl
      .get('horc.orchestration.model.orchestration.graphDataValidate')
      .d('数据格式有误，无法渲染流程'),
  NODE_TYPE_VALIDATE_PREFIX: () =>
    intl
      .get('horc.orchestration.model.orchestration.nodeTypeValidatePrefix')
      .d('当前编排画布渲染异常，请确认节点'),
  NODE_TYPE_VALIDATE_SUFFIX: () =>
    intl
      .get('horc.orchestration.model.orchestration.nodeTypeValidateSuffix')
      .d('是否通过了“编排分类授权”或联系管理员处理'),

  TIP_COPY_NAME: () => intl.get('horc.orchestration.view.title.tipCopyName').d('复制名称'),
  MQ_IOT_ALERT: () => intl.get('horc.orchestration.view.title.choseAlert').d('预警规则'),
  MQ_IOT_THING: () => intl.get('horc.orchestration.view.title.HiotMqtt').d('选择设备'),
  MQ_IOT_ALI_THING: () => intl.get('horc.orchestration.view.title.HiotAmqp').d('选择云账户'),
  MQ_IOT_DESIRED: () => intl.get('horc.orchestration.view.title.iotDesired').d('指令下发'),

  NODE_INFO: () => intl.get('horc.orchestration.view.button.nodeInfo').d('节点信息'),
  VIEW_CALL_ADDRESS: () => intl.get('horc.orchestration.view.button.viewCallAddress').d('调用信息'),
  NODE_CODE: () => intl.get('horc.orchestration.view.button.nodeCode').d('分类编码'),
  NODE_NAME_2: () => intl.get('horc.orchestration.view.button.nodeName2').d('分类名称'),
  PARAM_INFO: () => intl.get('horc.orchestration.view.button.paramInfo').d('参数信息'),
  PARAM_DETAIL: () => intl.get('horc.orchestration.view.button.paramDetail').d('参数值详情'),

  SCHEDULER_INFO: () => intl.get('horc.orchestration.view.title.schedulerInfo').d('调度信息'),
  JOB_CODE: () => intl.get('horc.orchestration.view.title.scheduler.jobCode').d('任务编码'),
  JOB_DESC: () => intl.get('horc.orchestration.view.title.scheduler.jobDesc').d('任务描述'),
  JOB_STATUS: () => intl.get('horc.orchestration.view.title.scheduler.jobStatus').d('任务状态'),
  CRON: () => intl.get('horc.orchestration.model.orchestration.scheduler.cron').d('Cron'),
  START_DATE: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.startDate').d('有效时间从'),
  END_DATE: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.endDate').d('有效时间至'),
  JOB_ID: () => intl.get('horc.orchestration.model.orchestration.scheduler.jobId').d('任务ID'),
  EXECUTOR_FAIL_STRATEGY: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorFailStrategy')
      .d('失败处理策略'),
  RETRY_NUMBER: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.retryNumber').d('重试次数'),
  EXECUTOR: () => intl.get('horc.orchestration.model.orchestration.scheduler.executor').d('执行器'),
  EXECUTOR_STRATEGY: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.executorStrategy').d('执行器策略'),
  EXECUTOR_CONFIG_LIST: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorConfigList')
      .d('执行器配置列表'),

  USER_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.userName').d('用户名'),
  NAME: () => intl.get('horc.orchestration.model.orchestration.scheduler.name').d('名称'),
  ALERT_RECEIVER: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.alertReceivers').d('告警接收人'),
  EXECUTOR_BLOCK_STRATEGY: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorBlockStrategy')
      .d('阻塞处理策略'),
  EXECUTOR_BLOCK_STRATEGY_TIP1: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorBlockStrategyTip1')
      .d('调度过于密集执行器来不及处理时的处理策略'),
  EXECUTOR_BLOCK_STRATEGY_TIP2: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorBlockStrategyTip2')
      .d('并行执行：按定时任务的时间进行调度'),
  EXECUTOR_BLOCK_STRATEGY_TIP3: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorBlockStrategyTip3')
      .d('串行丢弃：按定时任务执行，任务触发时存在执行中任务则丢弃本次任务'),
  EXECUTOR_BLOCK_STRATEGY_TIP4: () =>
    intl
      .get('horc.orchestration.model.orchestration.scheduler.executorBlockStrategyTip4')
      .d('串行阻塞：按定时任务执行，任务触发时存在执行中任务则本次任务进入等待队列'),
  CONTEXT_STRATEGY: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.contextStrategy').d('上下文策略'),
  ALARM_EMAIL: () =>
    intl.get('horc.orchestration.model.orchestration.scheduler.alarmEmail').d('报警邮件'),
  LABEL: () => intl.get('horc.orchestration.model.orchestration.scheduler.label').d('标签'),

  TENANT_NAME: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  JOB_RESULT: () => intl.get('horc.orchestration.jobLog.view.title.jobResult').d('调度结果'),
  CLIENT_RESULT: () =>
    intl.get('horc.orchestration.jobLog.view.title.clientResult').d('客户端执行结果'),
  EXECUTOR_NAME: () =>
    intl.get('horc.orchestration.jobLog.view.title.executorName').d('执行器名称'),
  ADDRESS: () => intl.get('horc.orchestration.jobLog.view.title.address').d('执行地址'),
  START_TIME: () => intl.get('horc.orchestration.jobLog.view.title.startTime').d('执行开始时间'),
  END_TIME: () => intl.get('horc.orchestration.jobLog.view.title.endTime').d('执行结束时间'),
  MESSAGE_HEADER: () =>
    intl.get('horc.orchestration.jobLog.view.title.messageHeader').d('错误信息'),
  TASK_PROGRESS: () => intl.get('horc.orchestration.jobLog.view.button.taskProgress').d('任务进度'),
  ERROR_DETAIL: () => intl.get('horc.orchestration.jobLog.view.button.errorDetail').d('错误详情'),
  CALLBACK_LOG: () => intl.get('horc.orchestration.jobLog.view.button.callbackLog').d('回调日志'),
  LOG_URL: () => intl.get('horc.orchestration.jobLog.view.button.logUrl').d('日志文件'),
  LOG_DETAIL: () => intl.get('horc.orchestration.jobLog.view.button.logDetail').d('日志详情'),
  EXPORT_FILE: () => intl.get('horc.orchestration.jobLog.view.button.exportFile').d('导出文件'),
  RESUME_CONFIRM: () =>
    intl.get('horc.orchestration.jobLog.view.confirm.resume').d('是否恢复该任务'),

  INSTANCE_JOB: () => intl.get('horc.orchestration.jobLog.view.button.instance').d('实例'),

  KILL_JOB: () => intl.get('horc.orchestration.jobLog.view.button.kill').d('结束'),
  KILL_JOB_CONFIRM: () =>
    intl.get('horc.orchestration.jobLog.view.confirm.kill').d('是否终止该任务'),

  COPY_JOB_CONFIRM: () =>
    intl.get('horc.orchestration.jobLog.view.confirm.copy').d('是否复制该任务'),

  PAUSE_JOB_CONFIRM: () =>
    intl.get('horc.orchestration.jobLog.view.confirm.pause').d('是否暂停该任务'),
  EXE_JOB_CONFIRM: () => intl.get('horc.orchestration.jobLog.view.confirm.exe').d('是否执行该任务'),
  EXE_JOB_TOOLTIP: () =>
    intl.get('horc.orchestration.jobLog.view.tooltip.exe').d('执行：手动执行任务一次'),
  SCHEDULE_LOG: () => intl.get('horc.orchestration.jobLog.view.button.scheduleLog').d('调度日志'),

  ORCH_DOMAIN: () => intl.get('horc.orchestration.model.orchestration.orchDomain').d('编排领域'),
  SOURCE_TYPE: () => intl.get('horc.orchestration.model.orchestration.sourceType').d('来源类型'),

  GLOBAL_TRANSACTION_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.globalTransactionFlag').d('启用全局事务'),
  GLOBAL_TRANSACTION_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.globalTransactionFlagTip')
      .d('采用seata-at模式，此功能需保证被调用的微服务配置好seata客户端所需的配置信息。'),
  ENABLE_GLOBAL_TRANSACTION: () =>
    intl.get('horc.orchestration.model.orchestration.enableGlobalTransaction').d('开启全局事务'),
  ENABLE_GLOBAL_TRANSACTION_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.enableGlobalTransactionTip')
      .d(
        '采用seata事务管理，需部署好seata-server且在编排manager服务端配置对应seata客户端配置信息。编排流程中启用全局事务的任务节点全部成功(失败但失败策略为继续也看作成功)则全局事务提交，事务节点中存在失败节点则全局事务回滚。'
      ),
  GLOBAL_TRANSACTION_TIMEOUT: () =>
    intl.get('horc.orchestration.model.orchestration.globalTransactionTimeout').d('事务超时时间'),

  PATTERN_MISMATCH: () =>
    intl
      .get('horc.orchestration.model.orchestration.patternMismatch')
      .d('大小写及数字，必须以字母、数字开头，可包含“-”、“_”'),

  FORMAT_VERSION: () =>
    intl.get('horc.orchestration.model.orchestration.formatVersion').d('当前版本'),
  HISTORY_VERSION: () =>
    intl.get('horc.orchestration.view.orchestration.historyVersion').d('历史版本'),
  ROLLBACK_VERSION: () =>
    intl.get('horc.orchestration.btn.orchestration.rollbackVersion').d('版本回退'),
  START_END_NODE: () =>
    intl
      .get('horc.orchestration.model.orchestration.start-end-node')
      .d('必须有且只有一个开始/结束节点'),
  START_NODE: () =>
    intl.get('horc.orchestration.model.orchestration.startNode').d('开始节点必须位于流程开始位置'),
  END_NODE: () =>
    intl.get('horc.orchestration.model.orchestration.endNode').d('结束节点必须位于流程结束位置'),
  OTHER_NODE: () =>
    intl
      .get('horc.orchestration.model.orchestration.otherNode')
      .d('除了开始/结束节点必须存在其他流程节点'),
  SOURCE_TARGET: () =>
    intl
      .get('horc.orchestration.model.orchestration.source-target')
      .d('每个任务节点必须可以追朔到开始/结束节点，请检查。'),
  END_RESULT_EXIST: () =>
    intl
      .get('horc.orchestration.model.orchestration.endResultExist')
      .d('结束节点的响应结果配置选择了不存在的任务节点，请检查。'),

  CONDITION: () => intl.get('horc.orchestration.modal.orchestration.condition').d('条件'),
  CONDITION_PASTE_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.conditionPasteTip')
      .d('粘贴出来的节点为【网关条件】节点，其「条件」和「网关」信息已清空，请注意重新维护'),
  RECOVERED_FLAG: () => intl.get('horc.orchestration.model.orchestration.recovered').d('事件状态'),
  RECOVERED_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.recovered.tip')
      .d('开启表示该节点为设备恢复节点，关闭表示该节点为设备告警节点。'),
  AUTO_RECOVER_TIME: () =>
    intl.get('horc.orchestration.model.orchestration.autoRecoverTime').d('自动恢复时间'),
  DESCRIPTION_ALERT: () =>
    intl.get('horc.orchestration.model.orchestration.descriptionAlert').d('告警事件描述'),
  ALERT_LOV: () => intl.get('horc.orchestration.model.orchestration.alertLov').d('告警通知配置'),
  GOTO_SUB_ORCH: () =>
    intl.get('horc.orchestration.orchestration.orchestration.gotoSubOrch').d('查看子编排'),
  GOTO_SUB_ORCH_WARN: () =>
    intl
      .get('horc.orchestration.orchestration.orchestration.gotoSubOrchWarn')
      .d('对应的子编排id不存在，请重新选择子节点再操作。'),

  SURE_DELETE_PARAM: () =>
    intl.get('horc.orchestration.view.title.sureDeleteParam').d('确认删除该参数？'),

  SEARCH_PLACEHOLDER: () =>
    intl.get('horc.orchestration.view.title.searchPlaceholder').d('根据编排分类名称检索'),

  RESPONSE_RESULT_TEMPALTE: () =>
    intl.get('horc.orchestration.view.title.responseResultTemplate').d('响应结果模板'),
  RESPONSE_RESULT: () => intl.get('horc.orchestration.view.title.responseResult').d('响应结果'),
  EXTRACT_RESPONSE_RESULT: () =>
    intl.get('horc.orchestration.view.title.extractResponseResult').d('响应结果提取'),

  JSON_VALIDATE: () => intl.get('horc.orchestration.view.message.jsonValidate').d('错误的JSON格式'),

  BOTH_LINE_WARNING: () =>
    intl
      .get('horc.orchestration.view.message.bothLineWaring')
      .d('该节点必须有【出】、【入】线才可以编辑，请先连线后再编辑'),
  IN_LINE_WARNING: () =>
    intl
      .get('horc.orchestration.view.message.inLineWaring')
      .d('该节点必须有【入】线才可以编辑，请先连线后再编辑'),
  OUT_LINE_WARNING: () =>
    intl
      .get('horc.orchestration.view.message.outLineWaring')
      .d('该节点必须有【出】线才可以编辑，请先连线后再编辑'),

  AT_LEAST_ONE_NODE_WARNING: () =>
    intl
      .get('horc.orchestration.view.message.atLeastOneNodeWarning')
      .d('至少勾选一个节点才能进行单元调试'),
  NOT_ONLY_START_OR_END_NODE_WARNING: () =>
    intl
      .get('horc.orchestration.view.message.notOnlyStartOrEndNodeWarning')
      .d('禁止单独调试开始/结束节点'),
  EDGE_DELETE_CONDIFRM: () =>
    intl
      .get('horc.orchestration.view.message.edgeDeleteConfirm')
      .d('该连线已选择网关条件，删除该连线，网关条件对应的目标节点也会删除，是否确认删除？'),
  NODE_DELETE_CONDIFRM: () =>
    intl
      .get('horc.orchestration.view.message.nodeDeleteConfirm')
      .d(
        '前序节点为网关节点，当前节点已在网关条件对应的目标节点中应用，删除该节点，网关条件对应的目标节点也会删除，是否确认删除？'
      ),
  NODE_DELETE_MESSAGE: () =>
    intl
      .get('horc.orchestration.view.message.nodeDeleteMessage')
      .d(
        '前序节点为网关节点，当前节点已在网关条件对应的目标节点中应用，删除该节点，网关条件对应的目标节点也会删除'
      ),
  NODE_DELETE_END_MESSAGE: () =>
    intl
      .get('horc.orchestration.view.message.nodeDeleteEndMessage')
      .d(
        '该节点被结束节点设置为流程任务的响应结果，删除该节点，结束节点对应的响应结果配置也会修改'
      ),
  NODE_DELETE_CONFIRM: () =>
    intl.get('horc.orchestration.view.message.deleteConfirm').d('是否确认删除？'),
  DISABLED_NODES_TIP: () =>
    intl
      .get('horc.orchestration.view.message.disabledNodesTip')
      .d('当前任务对应的节点分类无效或当前身份无权限访问该节点分类，仅允许查看任务配置信息。'),

  CERTIFICATE_TITLE: () => intl.get('horc.orchestration.view.title.certificate').d('证书设置'),

  INVALID_JSON: () => intl.get('horc.orchestration.view.title.invalidJson').d('JSON格式不合法'),
  INVALID_XML: () => intl.get('horc.orchestration.view.title.invalidXml').d('XML格式不合法'),

  SAME_LOCAL_KEY_ERROR_PREFIX: () =>
    intl
      .get('horc.orchestration.view.title.sameLocalKeyErrorPrefix')
      .d('当前执行策略为串行互斥，已存在正在运行的相同互斥键的'),
  SAME_LOCAL_KEY_ERROR_SUFFIX: () =>
    intl.get('horc.orchestration.view.title.sameLocalKeyError').d('无法执行当前操作，请稍后重试。'),

  NODE_TYPE_LIST: () => intl.get('horc.orchestration.view.title.nodeTypeList').d('编排分类列表'),

  NO_COPY: () => intl.get('horc.orchestration.view.title.noCopy').d('不允许复制连线'),
  NO_COPY_EMPTY: () =>
    intl.get('horc.orchestration.view.title.noCopyEmpty').d('请先选中节点再复制'),
  NO_PASTE: () => intl.get('horc.orchestration.view.title.noPaste').d('剪切板为空，不可粘贴'),

  LOADING_NODE_INFO_WARNING: () =>
    intl
      .get('horc.orchestration.view.title.loadingNodeInfoWarning')
      .d('正在加载任务信息，请稍后重试'),
  SEE_MORE: () => intl.get('horc.orchestration.view.message.SeeMore').d('查看更多'),
  VIEW_OPERATIONS: () => intl.get('horc.orchestration.view.message.viewOperations').d('查看操作'),
  OTHER: () => intl.get('horc.orchestration.view.message.other').d('其他'),
  CONNECTOR: () => intl.get('horc.orchestration.view.message.connector').d('生态连接器'),
  TASK: () => intl.get('horc.orchestration.view.message.task').d('任务'),
  ASYNC: () => intl.get('horc.orchestration.view.message.async').d('异步'),
  SAVE_AS_TEMPLATE: () =>
    intl.get('horc.orchestration.view.message.SaveAsTemplate').d('另存为模板'),
  SORT_NUMBER: () => intl.get('horc.orchestration.view.message.sortNumber').d('排序号'),
  TEMPLATE_NAME: () => intl.get('horc.orchestration.view.message.TemplateName').d('模板名称'),
  TEMPLATE_CODE: () => intl.get('horc.orchestration.view.message.TemplateCode').d('模板编码'),
  TEMPLATE_NAME_OR_CODE: () =>
    intl.get('horc.orchestration.view.message.TemplateNameOrCode').d('模板名称、模板编码'),
  TEMPLATE_DESCRIPTION: () =>
    intl.get('horc.orchestration.view.message.TemplateDescription').d('模板描述'),
  BATCH_DISABLE: () => intl.get('horc.orchestration.model.connector.batchDisable').d('批量禁用'),
  BATCH_ENABLE: () => intl.get('horc.orchestration.model.connector.batchEnable').d('批量启用'),
  PREVIEW: () => intl.get('horc.orchestration.view.message.Preview').d('预览'),
  USE: () => intl.get('horc.orchestration.view.message.use').d('使用'),
  MORE_TEMPLATES: () => intl.get('horc.orchestration.view.message.moreTemplates').d('更多模板'),
  USE_TEMPLATE: () => intl.get('horc.orchestration.view.message.useTemplate').d('使用模板'),
  ORCH_TEMPLATE: () => intl.get('horc.orchestration.view.message.orchTemplate').d('编排模板'),
  SAVE_ORCH_TEMPLATE: () =>
    intl.get('horc.orchestration.view.message.saveoOrchTemplate').d('保存模板'),
  ALL: () => intl.get('horc.orchestration.view.message.all').d('全部'),
  EDIT_TEMPLATE: () => intl.get('horc.orchestration.view.message.editTemplate').d('编辑模板'),
  COPY_TEMPLATE: () => intl.get('horc.orchestration.view.message.copyTemplate').d('复制模板'),
  COPY_FUBEN: () => intl.get('horc.orchestration.view.message.copyFuben').d('副本'),
  TEMPLATE_SOURCE: () => intl.get('horc.orchestration.view.message.templateSource').d('模板来源'),
  OFTEN_TEMPLATES: () => intl.get('horc.orchestration.view.message.oftenTemplates').d('常用模板'),
  ALL_TEMPLATES: () => intl.get('horc.orchestration.view.message.allTemplates').d('全部模板'),

  CONNECT_CONFIG: () =>
    intl.get('horc.orchestration.model.orchestration.connectConfig').d('连接设置'),
  CHOOSE_CONNECT: () => intl.get('horc.orchestration.model.template.chooseConnect').d('选择连接'),
  CREATE_CONNECT: () => intl.get('horc.orchestration.model.template.createConnect').d('新建连接'),
  CONNECT_CONFIG_NOT_EMPTY: () =>
    intl.get('horc.orchestration.model.template.connectConfigNotEmpty').d('连接配置不允许为空'),

  RESPONSE_END_NODE_TIP: () =>
    intl
      .get('horc.orchestration.view.title.responseEndNodeTip')
      .d('结束节点可配置本流程的响应结果。'),

  START: () => intl.get('horc.orchestration.view.title.start').d('开始'),
  END: () => intl.get('horc.orchestration.view.title.end').d('结束'),
  CAN_NOT_PASTE: () =>
    intl.get('horc.orchestration.view.message.canNotPaste').d('开始/结束节点不允许粘贴'),
  CAN_NOT_CREATE: () =>
    intl
      .get('horc.orchestration.view.message.canNotCreate')
      .d('已存在开始/结束节点，禁止创建该节点'),
  NOT_FOUND_NODE_COMPONENT: () =>
    intl
      .get('horc.orchestration.view.message.notFoundNodeComponent')
      .d('无法找到当前节点对应的页面，请联系管理员或'),
  REFRESH_PAGE: () => intl.get('horc.orchestration.view.message.refreshPage').d('刷新页面'),
  REFRESH_PAGE_CONFIRM: () =>
    intl.get('horc.orchestration.view.message.refreshPageConfirm').d('确定刷新页面？'),
  REFRESH_PAGE_CONFIRM_TIP: () =>
    intl
      .get('horc.orchestration.view.message.refreshPageConfirmTip')
      .d('刷新页面将会丢失未保存数据，请确保数据已保存。'),
  BASIC_CONFIG: () => intl.get('horc.orchestration.view.button.basicConfig').d('基础配置'),
  ORCH_TYPE: () => intl.get('horc.orchestration.view.button.orchType').d('编排类型'),
  CHANGE_CONFIRM: () =>
    intl.get('horc.orchestration.view.changeConfirm').d('切换来源数据将会清空表格中的参数值'),
  LOAD_MORE: () => intl.get('horc.orchestration.view.load.btnLoadMore').d('加载更多'),
  CREATE_MODE: () => intl.get('horc.orchestration.view.createMode').d('创建模式'),
  RESOURCE_NAME: () => intl.get('horc.orchestration.view.resourceName').d('资源名称'),
  RESOURCE_CODE: () => intl.get('horc.orchestration.view.resourceCode').d('资源编码'),
  SYSTEM_OPERATIVE: () => intl.get('horc.orchestration.view.systemOperative').d('主机类型'),
};
export default Langs;
