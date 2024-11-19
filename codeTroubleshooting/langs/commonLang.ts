/* eslint-disable no-template-curly-in-string */
/**
 * 通用-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-7-8
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.common',
  IMPORT: () => intl.get('hzero.common.button.import').d('导入'),
  CONFIRM: () => intl.get('hzero.common.button.confirm').d('确认'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  OK: () => intl.get('hzero.common.button.ok').d('确定'),
  UP: () => intl.get('hzero.common.button.up').d('收起'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  EXPAND: () => intl.get('hzero.common.button.expand').d('展开'),
  REFRESH: () => intl.get('hzero.common.button.refresh').d('刷新'),
  DOWNLOAD: () => intl.get('hzero.common.button.download').d('下载'),
  ADD: () => intl.get('hzero.common.button.add').d('新增'),
  SELECT_ALL: () => intl.get('hzero.common.button.selectAll').d('全选'),
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  PREVIEW: () => intl.get('hzero.common.preview').d('预览'),
  ACTION: () => intl.get('hzero.common.action').d('操作'),
  DELETE: () => intl.get('hzero.common.delete').d('删除'),
  STATUS: () => intl.get('hzero.common.status').d('状态'),
  BELONG_TENANT: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  PHONE_VALIDATION: () => intl.get('hzero.common.validation.phone').d('手机格式不正确'),
  CUSTOM_FILE: () => intl.get('hzero.common.components.export.file').d('自定义文件名'),
  REUPLOAD: () => intl.get('hzero.common.button.upload.again').d('重新上传'),
  CONFIRM_TITLE: () => intl.get('hzero.common.message.confirm.title').d('提示'),
  LIST_INFO: () => intl.get('hzero.common.component.list.info').d('列表信息'),
  NO_DATA: () => intl.get('hzero.common.components.noticeIcon.null').d('暂无数据'),
  QUERY: () => intl.get('hzero.common.button.common.query').d('查询'),
  RESET: () => intl.get('hzero.common.button.common.reset').d('重置'),
  COPY: () => intl.get('hzero.common.button.copy').d('复制'),

  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  DISABLE: () => intl.get('hzero.common.button.disable').d('禁用'),

  IMPORT_ZIP: () => intl.get('horc.common.view.title.importZip').d('导入zip格式文件'),
  FIELD_INVALID: () => intl.get('horc.common.model.validation.fieldInvalid').d('该字段不合法'),

  QUANTITY: () => intl.get('horc.common.modal.common.quantity').d('数量'),
  ADD_WHO: () => intl.get('horc.common.view.button.addWho').d('添加WHO字段'),
  WHO_FIELDS_EXIST: () =>
    intl.get('horc.common.model.validation.whoFieldsExist').d('WHO字段已存在'),

  ENTER_FULL_SCREEN: () => intl.get('horc.common.view.title.enterFullScreen').d('进入全屏'),
  EXIT_FULL_SCREEN: () => intl.get('horc.common.view.title.exitFullScreen').d('退出全屏'),

  BACK_TOP: () => intl.get('horc.common.view.button.backTop').d('回到顶部'),
  BACK_BOTTOM: () => intl.get('horc.common.view.button.backBottom').d('回到底部'),
  AUTO_WRAP: () => intl.get('horc.common.view.button.autoWrap').d('自动换行'),
  ADD_GROUP: () => intl.get('horc.common.view.button.addGroup').d('新增条件组'),

  ADVENCED_SETTING: () => intl.get('horc.common.view.title.advancedSetting').d('高级设置'),
  CONNECT_POOL: () => intl.get('horc.common.view.title.connectPool').d('连接池配置'),

  DW_SCRIPT_TIP: () =>
    intl.get('horc.common.view.tip.dw').d('请参考DataWeave Language语法编写映射脚本，官方文档参见'),

  DW_SCRIPT_WARNING_TIP: () =>
    intl
      .get('horc.common.view.dwWarningTip')
      .d(
        '当前映射脚本不符合DataWeave Language语法，具体语法请参考https://docs.mulesoft.com/mule-runtime/4.3/dataweave-language-guide'
      ),

  AND: () => intl.get('horc.common.view.logicOperation.and').d('与'),
  OR: () => intl.get('horc.common.view.logicOperation.or').d('或'),
  EQUAL: () => intl.get('horc.common.view.logicOperation.equal').d('等于'),
  NOT_EQUAL: () => intl.get('horc.common.view.logicOperation.notEqual').d('不等于'),
  LESS: () => intl.get('horc.common.view.logicOperation.less').d('小于'),
  LESS_OR_EQUAL: () => intl.get('horc.common.view.logicOperation.lessOrEqual').d('小于等于'),
  GREATER: () => intl.get('horc.common.view.logicOperation.greater').d('大于'),
  GREATER_OR_EQUAL: () => intl.get('horc.common.view.logicOperation.greaterOrEqual').d('大于等于'),
  IS_EMPTY: () => intl.get('horc.common.view.logicOperation.isEmpty').d('为空'),
  IS_NOT_EMPTY: () => intl.get('horc.common.view.logicOperation.isNotEmpty').d('非空'),
  VALUE: () => intl.get('horc.common.view.logicOperation.value').d('值'),
  CONDITION_FIELD: () => intl.get('horc.common.view.logicOperation.conditionField').d('条件字段'),
  CONDITION: () => intl.get('horc.common.view.logicOperation.condition').d('条件'),
  ADD_CONDITION_GROUP: () =>
    intl.get('horc.common.view.logicOperation.addConditionGroup').d('添加条件分组'),
  ADD_CONDITION: () => intl.get('horc.common.view.logicOperation.addCondition').d('添加条件'),
  NOT: () => intl.get('horc.common.view.logicOperation.not').d('非'),
  SURE: () => intl.get('horc.common.view.logicOperation.sure').d('确定'),
  DELETE_CONDITION_CONFIRM: () =>
    intl.get('horc.common.view.logicOperation.deleteConditionConfirm').d('确定删除该条件'),
  DELETE_GROUP_CONFIRM: () =>
    intl.get('horc.common.view.logicOperation.deleteGroupConfirm').d('确定删除该条件分组'),

  SECOND: () => intl.get('horc.common.view.cron.second').d('秒'),
  MINUTE: () => intl.get('horc.common.view.cron.minute').d('分钟'),
  HOUR: () => intl.get('horc.common.view.cron.hour').d('小时'),
  DAY: () => intl.get('horc.common.view.cron.day').d('日'),
  MONTH: () => intl.get('horc.common.view.cron.month').d('月'),
  WEEK: () => intl.get('horc.common.view.cron.week').d('周'),
  YEAR: () => intl.get('horc.common.view.cron.year').d('年'),

  EVERY_DAY: () => intl.get('horc.common.view.cron.everyDay').d('每日'),
  NOT_SPECIFY: () => intl.get('horc.common.view.cron.notSpecify').d('不指定'),
  SPECIFY: () => intl.get('horc.common.view.cron.specify').d('指定'),
  PERIOD: () => intl.get('horc.common.view.cron.period').d('周期'),
  FROM: () => intl.get('horc.common.view.cron.from').d('从'),
  TO: () => intl.get('horc.common.view.cron.to').d('到'),
  FROM_CERTAIN: () => intl.get('horc.common.view.cron.fromCertain').d('从第'),
  PER_DAY_START: () => intl.get('horc.common.view.cron.perDayStart').d('日开始，每'),
  ONE_TIME_FOR_DAY: () => intl.get('horc.common.view.cron.oneTimeForDay').d('天执行一次'),
  EVERY_MONTH: () => intl.get('horc.common.view.cron.everyMonth').d('每月'),
  LASTEST_WORK_DAY: () => intl.get('horc.common.view.cron.lastestWorkDay').d('日最近的那个工作日'),
  LAST_THE_MONTH: () => intl.get('horc.common.view.cron.lastMonth').d('本月最后'),

  EVERY_HOUR: () => intl.get('horc.common.view.cron.everyHour').d('每小时'),
  SINGLE_HOUR: () => intl.get('horc.common.view.cron.singleHour').d('时'),
  PER_FROM_HOUR: () => intl.get('horc.common.view.cron.perFromHour').d('时开始，每'),
  ONE_TIME_FOR_HOUR: () => intl.get('horc.common.view.cron.oneTimeForHour').d('时执行一次'),
  MIN_NUM: () => intl.get('horc.common.view.cron.minNum').d('至少选择一项'),

  EVERY_MINUTE: () => intl.get('horc.common.view.cron.everyMinute').d('每日'),
  SINGLE_MINUTE: () => intl.get('horc.common.view.cron.singleMinute').d('分'),
  PER_FROM_MINUTE: () => intl.get('horc.common.view.cron.perFromMinute').d('分开始，每'),
  ONE_TIME_FOR_MINUTE: () => intl.get('horc.common.view.cron.oneTimeForMinute').d('分执行一次'),

  SINGLE_MONTH: () => intl.get('horc.common.view.cron.singleMonth').d('月'),
  SINGLE_DAY: () => intl.get('horc.common.view.cron.singelDay').d('天'),
  ONE_TIME_FOR_MONTH: () => intl.get('horc.common.view.cron.oneTimeForMonth').d('月执行一次'),

  EVERY_SECOND: () => intl.get('horc.common.view.cron.everySecond').d('每秒'),
  SINGLE_SECOND: () => intl.get('horc.common.view.cron.singleSecond').d('秒'),
  PER_FROM_SECOND: () => intl.get('horc.common.view.cron.perFromSecond').d('秒开始，每'),
  ONE_TIME_FOR_SECOND: () => intl.get('horc.common.view.cron.oneTimeForSecond').d('秒执行一次'),

  EVERY_WEEK: () => intl.get('horc.common.view.cron.everyWeek').d('每周'),
  SINGLE_WEEK: () => intl.get('horc.common.view.cron.singleWeek').d('周'),
  CERTAIN: () => intl.get('horc.common.view.cron.certain').d('第'),
  THE_WEEK: () => intl.get('horc.common.view.cron.theWeek').d('周的'),
  WEEK_DAY: () => intl.get('horc.common.view.cron.weekDay').d('星期'),

  LAST_ONE_MONTH: () => intl.get('horc.common.view.cron.lastTheMonth').d('本月最后一个'),
  MONDAY: () => intl.get('horc.common.view.cron.monday').d('星期一'),
  TUESDAY: () => intl.get('horc.common.view.cron.tuesday').d('星期二'),
  WEDNESDAY: () => intl.get('horc.common.view.cron.wednesday').d('星期三'),
  THURSDAY: () => intl.get('horc.common.view.cron.thursday').d('星期四'),
  FRIDAY: () => intl.get('horc.common.view.cron.friday').d('星期五'),
  SATURDAY: () => intl.get('horc.common.view.cron.saturday').d('星期六'),
  SUNDAY: () => intl.get('horc.common.view.cron.sunday').d('星期日'),

  EVERY_YEAR: () => intl.get('horc.common.view.cron.everyYear').d('每年'),
  SINGLE_YEAR: () => intl.get('horc.common.view.cron.singleYear').d('年'),

  SAME_NAME_REL: () => intl.get('horc.common.view.button.sameNameRel').d('同名关联'),
  SAME_LINE_REL: () => intl.get('horc.common.view.button.sameLineRel').d('同行关联'),
  CANCEL_REL: () => intl.get('horc.common.view.button.cancelRel').d('取消关联'),
  JSON_FILE: () => intl.get('horc.common.view.button.jsonFile').d('JSON文件'),
  XML_FILE: () => intl.get('horc.common.view.button.xmlFile').d('XML文件'),

  DW_SCRIPT: () => intl.get('horc.common.view.title.dwScript').d('DW脚本维护'),

  SOURCE_TITLE: () => intl.get('horc.common.model.fieldMapping.sourceTitle').d('来源结构'),
  SOURCE_TITLE_TIP: () =>
    intl
      .get('horc.common.model.fieldMapping.sourceTitle.tip')
      .d(
        '来源结构，设定请求数据报文结构，即调用发起方能够给出的json报文结构样例或者xml报文结构样例。通过与目标结构连线构造出DW脚本。'
      ),
  TARGET_TITLE: () => intl.get('horc.common.model.fieldMapping.targetTitle').d('目标结构'),
  TARGET_TITLE_TIP: () =>
    intl
      .get('horc.common.model.fieldMapping.targetTitle.tip')
      .d(
        '目标结构，设定响应数据报文结构，即调用响应方给出的原始json报文结构样例或者xml报文结构样例。通过与来源结构连线构造出DW脚本。'
      ),

  ALL_TITLE: () => intl.get('horc.common.model.fieldMapping.allTitle').d('来源及目标结构'),

  FIELD_DATA: () => intl.get('horc.common.view.modal.fieldData').d('字段数据'),

  FILE_SOURCE: () => intl.get('horc.common.view.modal.fileSource').d('文件来源'),
  DATA_TYPE: () => intl.get('horc.common.model.fieldMapping.dataType').d('数据格式'),
  VALIDATE_IMPORT: () => intl.get('horc.common.model.fieldMapping.validateImport').d('校验并导入'),
  XML_VALIDATE: () => intl.get('horc.common.model.fieldMapping.xmlValidate').d('错误的XML格式数据'),
  SAVE_VALIDATE: () =>
    intl.get('horc.common.model.fieldMapping.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () => intl.get('horc.common.model.fieldMapping.saveEmpty').d('无修改内容,无需保存'),
  JSON_VALIDATE: () =>
    intl.get('horc.common.model.fieldMapping.jsonValidate').d('错误的JSON格式数据'),

  VALIDATE_DATA_TYPE: () =>
    intl.get('horc.common.model.fieldMapping.validate.dataType').d('字段映射类型不能为空'),

  IMPORT_CONFIRM_TIP: () =>
    intl
      .get('horc.common.validation.import.confirm.tip')
      .d('导入将覆盖已存在的来源报文和目标报文，是否确认导入报文?'),

  BATCH_INPUT: () => intl.get('horc.common.view.button.batchInput').d('批量录入'),

  BATCH_INPUT_PLACEHOLDER_TIP: () =>
    intl
      .get('horc.common.placeholder.bacthImportText')
      .d('每一行为一个键值对，键值对之间以:分隔。'),
  BATCH_INPUT_PLACEHOLDER_EXAMPLE: () =>
    intl.get('horc.common.placeholder.bacthImportExample').d('示例：'),
  BATCH_INPUT_PLACEHOLDER_EXAMPLE_ONE: () =>
    intl.get('horc.common.placeholder.bacthImportExample1').d('参数名:参数值'),
  BATCH_INPUT_PLACEHOLDER_EXAMPLE_TWO: () =>
    intl.get('horc.common.placeholder.bacthImportExample2').d('password:123456'),
  TEXT: () => intl.get('horc.common.view.button.text').d('文本'),

  FIELD_TYPE: () => intl.get('horc.common.model.condition.fieldType').d('字段类型'),
  FIELD: () => intl.get('horc.common.model.condition.field').d('字段名'),
  JSONPATH_EXPRESSION: () => intl.get('horc.common.model.condition.expression').d('JsonPath表达式'),
  EXPECTATION: () => intl.get('horc.common.model.condition.expectation').d('期望值'),

  SPEL_TIP: () =>
    intl
      .get('horc.common.model.orchestration.spelTip')
      .d(
        '支持SpEL表达式，使用SpEL模板语法解析。示例：前序结果获取: #[result[xxx]]，全局定义参数获取:#[global[xxx]]，节点结果参数获取: #[node[yourCode][xxx]]。其中#[]为表达式解析器，表达式解析器包裹的为SpEL表达式，支持表达式计算；若需要表达式参与计算，将参与计算的表达式用表达式解析器#[]包裹即可，例如：#[global[page] * 10]即将获取的page参数乘10'
      ),
  FREEMARKER_TIP: () =>
    intl
      .get('horc.common.model.orchestration.freemarkerTip')
      .d(
        '支持Freemarker表达式。示例：前序结果获取: () =>${result.xxx}，全局定义参数获取:${global.xxx}，节点结果参数获取: ${node.yourCode.xxx}。'
      ),
  JSON_PATH_TIP: () =>
    intl
      .get('horc.common.model.orchestration.jsonPathTip')
      .d(
        '支持JsonPath表达式。示例：前序结果获取: () =>$.result.xxx，全局定义参数获取:$.global.xxx，节点结果参数获取: $.node.yourCode.xxx。'
      ),

  ADD_PARAM: () => intl.get('horc.common.view.button.addParam').d('添加参数'),
  CLEAR_PARAM: () => intl.get('horc.common.view.button.clearParam').d('清空参数'),
  PARAM: () => intl.get('horc.common.model.param.param').d('参数'),
  PARAM_NAME: () => intl.get('horc.common.model.param.paramName').d('参数名'),
  PARAM_VALUE: () => intl.get('horc.common.model.pram.paramValue').d('参数值'),
  PARAM_TYPE: () => intl.get('horc.common.model.pram.paramType').d('参数类型'),
  PARAM_DESC: () => intl.get('horc.common.model.pram.paramDesc').d('参数说明'),
  DEFAULT_VALUE: () => intl.get('horc.common.model.pram.defaultValue').d('默认值'),
  VALUE_TYPE: () => intl.get('horc.common.model.pram.valueType').d('取值类型'),

  TARGET_DEFINITION_NAME: () =>
    intl.get('horc.common.model.mutex.targetDefinitionName').d('编排名称'),
  TARGET_DEFINITION_CODE: () =>
    intl.get('horc.common.model.mutex.targetDefinitionCode').d('编排编码'),
  MUTEX_TYPE: () => intl.get('horc.common.model.mutex.mutexType').d('互斥类型'),
  MUTEX_SCOPE: () => intl.get('horc.common.model.mutex.mutexScope').d('互斥域'),
  MUTEX_CONDITION: () => intl.get('horc.common.model.mutex.mutexCondition').d('互斥条件'),
  MUTEX_RELATION: () => intl.get('horc.common.model.mutex.mutexRelation').d('互斥关系'),

  BUILD_EXPRESSION: () => intl.get('horc.common.expression.title.buildExpression').d('构建表达式'),
  REFER_FIELD: () => intl.get('horc.common.expression.title.referField').d('参考字段'),
  FUNCTION: () => intl.get('horc.common.expression.title.function').d('插入函数'),
  PRESET_FUNCTION: () => intl.get('horc.common.expression.title.presetFunction').d('预置函数'),
  BASIC_FUNCTION: () => intl.get('horc.common.expression.title.basicFunction').d('基础函数'),
  SYSTEM_CONFIG: () => intl.get('horc.common.expression.title.systemConfig').d('系统变量'),
  OPERATOR: () => intl.get('horc.common.expression.title.operator').d('运算符'),
  FUNCTION_LIST: () => intl.get('horc.common.expression.title.functionList').d('函数列表'),
  NOTE_DESC: () => intl.get('horc.common.expression.title.noteDesc').d('注释说明'),
  SEARCH_PLACEHOLDER: () => intl.get('horc.common.expression.title.searchPlaceholder').d('请搜索'),
  FIELD_SOURCE: () => intl.get('horc.common.expression.model.fieldSource').d('字段来源'),
  FIELD_LEVEL: () => intl.get('horc.common.expression.model.fieldLevel').d('字段层级'),
  FIELD_CHOOSE: () => intl.get('horc.common.expression.model.fieldChoose').d('字段选择'),
  FIELD_RELATE: () => intl.get('horc.common.expression.model.fieldRelate').d('关联字段选择'),
  EXPRESSION_CONTENT: () =>
    intl.get('horc.common.expression.model.expressionContent').d('表达式内容'),
  EXECUTE: () => intl.get('horc.common.expression.model.execute').d('执行'),
  INSERT: () => intl.get('horc.common.expression.button.insert').d('插入'),
  DETAIL: () => intl.get('horc.common.expression.button.detail').d('详情'),
  EXPRESSION: () => intl.get('horc.common.expression.button.expression').d('表达式'),

  FIELD_PATH: () => intl.get('horc.common.fieldCascader.model.fieldPath').d('字段路径'),

  PRE_TASK_RESULT: () => intl.get('horc.common.expression.model.preTaskResult').d('前序结果'),
  CONTEXT: () => intl.get('horc.common.expression.model.context').d('上下文'),
  GLOBAL_PARAM: () => intl.get('horc.common.expression.model.globalParam').d('全局参数'),
  PROCESS_REFERENCE: () => intl.get('horc.common.expression.model.processReference').d('流程入参'),
  EXPRESSION_MAINTAIN: () =>
    intl.get('horc.common.expression.model.expressionMaintain').d('表达式维护'),

  EXECUTE_PARAM: () => intl.get('horc.common.expression.model.executeParam').d('执行参数'),

  PRESET_VARIABLE: () => intl.get('horc.common.view.title.presetVariable').d('预置变量'),
  PRESET_VARIABLE_HELP: () =>
    intl
      .get('horc.common.view.title.presetParamHelp')
      .d('预置变量由系统自动生成，子编排中的节点可通过global关键字从参数名中获取。'),
  IMPORT_JSON: () => intl.get('horc.common.view.button.importJson').d('导入JSON'),
  CHANGE_TYPE_CONFIRM: () =>
    intl.get('horc.common.view.message.changeTypeConfirm').d('确定清空子结构'),
  CHANGE_TYPE_CONFIRM_CONTENT: () =>
    intl
      .get('horc.common.view.message.changeTypeConfirmContent')
      .d('切换到字符串类型将清空其子结构，确定切换？'),
  DELETE_PARAM_CONFIRM: () =>
    intl.get('horc.common.view.message.deleteParamConfirm').d('确定删除选中参数？'),

  PARAM_VALUE_CONFIG: () => intl.get('horc.common.view.title.paramValueConfig').d('设置参数值'),
  PARAM_VALUE_CONFIG_HELP: () =>
    intl
      .get('horc.common.view.title.paramValueConfigHelp')
      .d(
        '带出的参数为子编排设置的编排定义全局参数，参数值优先覆盖于全局定义处的参数值。子编排中的节点可通过input关键字从参数名中获取父编排中节点的结果数据、循环迭代节点每次迭代的数据、MQ消费节点监听的消息数据。'
      ),

  NORMAL_MODE: () => intl.get('horc.common.view.title.normalMode').d('普通模式'),
  ENHANCED_MODE: () => intl.get('horc.common.view.title.enhancedMode').d('增强模式'),
  CHANGE_CONDITION_CONFIRM: () =>
    intl
      .get('horc.common.view.title.changeConditionConfirm')
      .d('切换模式将删除原条件，确定切换模式吗？'),
  CONDITION_EXPRESSION: () =>
    intl.get('horc.common.view.title.conditionExpression').d('条件表达式'),
  CONDITION_TIP: () =>
    intl
      .get('horc.common.view.title.conditionTip')
      .d('通过AND和OR创建条件的组合表达式，示例：(1 AND 2） OR 3，表示满足条件1、2或满足条件3'),
  CONDITION_EXPRESSION_VALIDATE: () =>
    intl
      .get('horc.common.view.title.conditionExpressionValidate')
      .d('当前条件表达式和已维护的条件序号不匹配，请检查条件表达式'),
  CONDITION_TYPE: () => intl.get('horc.common.view.title.conditionType').d('条件要求'),

  SOURCE: () => intl.get('horc.common.view.title.source').d('来源'),
  TARGET: () => intl.get('horc.common.view.title.target').d('目标'),

  OTHER_NODE: () => intl.get('horc.common.view.title.otherNode').d('其他节点'),
  NUMBER: () => intl.get('horc.common.view.title.number').d('数字'),
  STRING: () => intl.get('horc.common.view.title.string').d('字符串'),
  BOOLEAN: () => intl.get('horc.common.view.message.boolean').d('布尔值'),
  ARRAY: () => intl.get('horc.common.view.message.array').d('数组'),
  OBJECT: () => intl.get('horc.common.view.message.object').d('对象'),

  FORM: () => intl.get('horc.common.model.common.form').d('表单'),
  FORM_TIP: () => intl.get('horc.common.model.common.formTip').d('切换为表单模式'),
  SCRIPT: () => intl.get('horc.common.model.common.script').d('脚本'),
  SCRIPT_TIP: () => intl.get('horc.common.model.common.scriptTip').d('切换为脚本模式'),

  CHANGE_TIP: () =>
    intl.get('horc.common.model.common.changeTip').d('切换操作将会清空原内容，确定切换吗'),

  CHOOSE_ICON: () => intl.get('horc.common.model.common.chooseIcon').d('选择图标'),
  EXIST_ICON: () => intl.get('horc.common.model.common.existIcon').d('可选图标'),
  CUSTOM_ICON: () => intl.get('horc.common.model.common.customIcon').d('自定义图标'),

  UPLOAD_TEXT: () =>
    intl.get('horc.common.model.common.uploadText').d('点击或将文件拖拽到这里上传'),
  UPLOAD_TYPE: () =>
    intl.get('horc.common.model.common.uploadType').d('支持扩展名：jpg、jpeg、png、svg、webp'),
  MAX_FILE_SIZE: () =>
    intl
      .get('horc.common.model.common.uploadType')
      .d('上传文件大小不要超过10KB，否则可能会影响编排定义菜单加载速度'),

  ROTATE_RIGHT: () => intl.get('horc.common.model.common.rotateRight').d('向右旋转'),
  ROTATE_LEFT: () => intl.get('horc.common.model.common.rotateLeft').d('向左旋转'),

  ZOOM_IN: () => intl.get('horc.common.model.common.zoomIn').d('放大'),
  ZOOM_OUT: () => intl.get('horc.common.model.common.zoomOut').d('缩小'),
  NO_MENU_PERMISSION: () =>
    intl
      .get('horc.common.view.title.noMenuPermission')
      .d('当前用户没有拥有该菜单权限，若想继续操作请联系管理员分配权限。'),
  ADD_NOW: () => intl.get('horc.common.view.title.AddNow').d('立即添加'),
  SORRY: () => intl.get('horc.common.view.title.sorry').d('抱歉'),
  TARGET_FUNCTION: () => intl.get('horc.common.view.title.targetFunction').d('目标功能'),
  NOT_HAVE_PERMISSION: () => intl.get('horc.common.view.title.notHavePermission').d('您暂无权限'),
  NO_DATA_FOUND: () => intl.get('horc.common.view.title.NoDataFound').d('没有找到数据？'),
  EMPTY_DATA: () => intl.get('horc.common.view.title.emptyData').d('暂无数据，'),
  EMPTY_DATA_TIP_MESSAGE: () =>
    intl
      .get('horc.common.view.title.emptyDataTipMessage')
      .d('无数据，请前往前序节点维护响应结果模板'),
  DEFINITION_EMPTY: () =>
    intl.get('horc.common.view.title.definitionEmpty').d('暂无数据，请先新建所需编排定义'),

  STATISTIC_REPORT: () =>
    intl.get('horc.common.view.title.statisticReport').d('集成平台调用统计报告'),
  EXPORT: () => intl.get('horc.common.view.button.export').d('导出'),
  PERSONAL_CENTER_CONFIGURATION: () =>
    intl.get('horc.common.view.personalCenterConfiguration').d('个人认证配置'),
  COPY_SUCCESS: () => intl.get('horc.common.message.interfaceDebug.copySuccess').d('复制成功'),
  COPY_FAILED: () => intl.get('horc.common.message.interfaceDebug.copyFailed').d('复制失败'),
  COPY_FAILED_TEXT: () =>
    intl.get('horc.common.message.interfaceDebug.copyFailedText').d('复制文本不能为空！'),
  FUNCTION_VIEW: () => intl.get('horc.common.message.function').d('函数'),
  FUNCTION_DESCRIPTION: () => intl.get('horc.common.message.functionDescription').d('函数描述'),
  EXAMPLE: () => intl.get('horc.common.message.example').d('示例'),
  EXAMPLE_DESCRIPTION: () => intl.get('horc.common.message.exampleDescription').d('示例结果'),

  PARSE: () => intl.get('horc.common.view.button.parse').d('解析'),
  PARSE_AS_DEFAULT_VALUE: () =>
    intl.get('horc.common.view.button.parseAsDefaultValue').d('解析并应用为默认值'),
  DIFFERENCE_STRUCT_TIP: () =>
    intl
      .get('horc.common.view.button.differenceStructTip')
      .d('默认值的数据结构与已维护的数据结构存在差异，请确保两者的数据结构一致。'),

  AUTO_LOAD_PARAM_CONFIRM_TITLE: () =>
    intl.get('horc.common.message.autoLoadParamConfirmTitle').d('自动加载参数结构'),
  AUTO_LOAD_PARAM_CONFIRM_CONTENT: () =>
    intl
      .get('horc.common.message.autoLoadParamConfirmContent')
      .d('是否自动加载其下级参数结构并覆盖现有参数？'),
  FIELD_TYPE_TIP: () => intl.get('horc.common.message.fieldTypeTip').d('该参数类型为'),
  REFRESH_ALL_FUNCTION: () =>
    intl.get('horc.common.message.refreshAllFunction').d('刷新所有表达式'),

  SOURCE_DATA: () => intl.get('horc.common.ruleDataStorage.model.sourceData').d('来源数据'),
  SEARCH_DETAIL: () => intl.get('horc.common.message.searchDetail').d('请搜索关键字'),
};

export default Langs;
