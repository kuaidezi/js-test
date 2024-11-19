/**
 * 循环插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-3-25
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  BASIC_INFO: () => intl.get('horc.orchestration.foreach.title.basicInfo').d('配置信息'),

  FOREACH_TYPE: () => intl.get('horc.orchestration.foreach.model.foreachType').d('循环类型'),
  COLLECTION_EXPRESSION: () =>
    intl.get('horc.orchestration.foreach.model.collectionExpression').d('数组变量路径'),
  COLLECTION_EXPRESSION_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.collectionExpression')
      .d('JsonPath语法。获取的数组作为分组循环的源数据'),
  ITERATOR_VARIABLE: () =>
    intl.get('horc.orchestration.foreach.model.iteratorVariable').d('迭代变量'),
  ITERATOR_VARIABLE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.iteratorVariableTip')
      .d('循环子节点可根据该变量名从上下文获取每次迭代的值'),
  ITERATOR_VARIABLE_VALUE_HELP: () =>
    intl
      .get('horc.orchestration.foreach.model.iteratorVariableValueHelp')
      .d('自动赋值，每次循环遍历的数据'),

  REQUEST_VARIABLE: () =>
    intl.get('horc.orchestration.foreach.model.requestVariable').d('循环请求变量'),
  REQUEST_VARIABLE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.requestVariable')
      .d(
        '该变量存储的值为按执行条数切割数组得到的每个数据单元，一次循环处理一个数据单元，循环子节点可根据该变量名从上下文获取每次迭代的数据单元。'
      ),

  BATCH_SIZE: () => intl.get('horc.orchestration.foreach.model.batchSize').d('执行条数'),
  BATCH_SIZE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.batchSize')
      .d('获取到的数组根据该执行条数切割数组，切割之后的每批数据传递给迭代变量'),

  THREAD_EXECUTE_TYPE: () =>
    intl.get('horc.orchestration.foreach.model.threadExecuteType').d('执行方式'),
  THREAD_EXECUTE_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.threadExecuteTypeTip')
      .d(
        '串行: 子编排中的节点任务全部在父任务运行的机器上运行，所有待循环的子编排按照顺序执行，当次循环子编排完成即节点任务全部运行完成后才执行下一次循环，只存在一个编排实例。并行(多线程): 子编排中的节点任务全部在父任务运行的机器上运行，所有待循环的子编排并行执行，实际并行数与设置的最大并发数有关，只存在一个编排实例。并行(多实例): 所有待循环的子编排生成多个子编排实例， 生成的编排实例个数等于循环次数， 实例间并行执行。当循环数据量过大时可使用此方式，结合集群部署可实现负载均衡。'
      ),

  MAX_CONCURRENCY: () => intl.get('horc.orchestration.foreach.model.maxConcurrency').d('最大并发'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.foreach.model.subDefinition').d('子编排'),
  VERSION: () => intl.get('horc.orchestration.foreach.model.version').d('版本'),

  VARIABLE_TYPE: () => intl.get('horc.orchestration.foreach.model.variableType').d('变量类型'),
  VARIABLE_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.variableTypeTip')
      .d(
        '对应迭代变量的类型，每次设置的迭代变量值会转为对应类型的值，且会将初始值和比较值转为对应类型的值再进行比较。特别地，布尔类型的值只有为 Y，TRUE，YES，1才会被判为true，其他值均为false'
      ),

  VARIABLE_TYPE_VALIDATOR_BOOLEAN: () =>
    intl.get('horc.orchestration.foreach.validator.boolean').d('请输入布尔类型，true 或者 false'),
  VARIABLE_TYPE_VALIDATOR_LONG: () =>
    intl.get('horc.orchestration.foreach.validator.long').d('请输入整型数值'),
  VARIABLE_TYPE_VALIDATOR_DOUBLE: () =>
    intl.get('horc.orchestration.foreach.validator.double').d('请输入浮点型数值'),
  VARIABLE_TYPE_VALIDATOR_DATE: () =>
    intl.get('horc.orchestration.foreach.validator.date').d('请输入日期类型，格式为yyyy-MM-dd'),

  INITIAL_VALUE: () =>
    intl.get('horc.orchestration.foreach.model.initialVariableValue').d('初始值'),
  INITIAL_VALUE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.initialVariableValueTip')
      .d(
        '循环时设置的迭代变量初始值。支持SpEL表达式，结合SpEL表达式从前序编排中获取(固定相应参数为result(map结构)，通过#result进行关联值获取。示例：前序结果获取:#result["xxx"]，本地参数获取:#local["xxx"]，全局参数获取:#global["xxx"])。'
      ),

  CONDITION: () => intl.get('horc.orchestration.foreach.model.conditionType').d('循环条件'),
  CONDITION_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.conditionType')
      .d('当前迭代变量的值与比较值根据循环条件比较，满足条件则循环'),

  COMPARE_VALUE: () => intl.get('horc.orchestration.foreach.model.compareValue').d('比较值'),
  COMPARE_VALUE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.compareValueTip')
      .d(
        '相当于终止条件。支持SpEL表达式，结合SpEL表达式从前序编排中获取(固定相应参数为result(map结构)，通过#result进行关联值获取。示例：前序结果获取:#result["xxx"]，本地参数获取:#local["xxx"]，全局参数获取:#global["xxx"])。'
      ),

  ITERATOR_SCRIPT: () =>
    intl.get('horc.orchestration.foreach.model.iteratorJsScript').d('迭代变量变更脚本(JS)'),
  ITERATOR_SCRIPT_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.iteratorJsScript')
      .d(
        'JS语法。用于每次循环完成之后，对迭代变量的值进行更新，根据该JS脚本可灵活的控制循环次数。'
      ),

  PAGE_NUM: () => intl.get('horc.orchestration.foreach.model.pageNum').d('起始页码'),
  PAGE_NUM_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.pageNumTip')
      .d(
        '分页请求时从设置的页码开始请求，每次循环时页码会自动加1，后续子编排可根据表达式#pageNum获取当次循环的页码。起始页码从0开始。支持SpEL表达式，结合SpEL表达式从前序编排中获取(固定相应参数为result(map结构)，通过#result进行关联值获取。示例：前序结果获取:#result["xxx"]，本地参数获取:#local["xxx"]，全局参数获取:#global["xxx"])。'
      ),

  PAGE_NUM_VALUE_HELP: () =>
    intl
      .get('horc.orchestration.foreach.model.pageNumValueHelp')
      .d('自动赋值，从设置的起始页码开始每次循环自动加1'),

  CURRENT_PAGE: () => intl.get('horc.orchestration.foreach.model.currentPage').d('当前页码'),
  PAGE_SIZE: () => intl.get('horc.orchestration.foreach.model.pageSize').d('每页条数'),
  PAGE_SIZE_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.pageSizeTip')
      .d(
        '分页请求时每页的数据条数，后续子编排可根据表达式#pageSize获取每页条数。支持SpEL表达式，结合SpEL表达式从前序编排中获取(固定相应参数为result(map结构)，通过#result进行关联值获取。示例：前序结果获取:#result["xxx"]，本地参数获取:#local["xxx"]，全局参数获取:#global["xxx"])。'
      ),

  PAGE_SIZE_HELP: () =>
    intl.get('horc.orchestration.foreach.model.pageSizeHelp').d('自动赋值，设置的每页条数'),

  TOTAL_COUNT: () => intl.get('horc.orchestration.foreach.model.totalCount').d('总条数'),
  TOTAL_COUNT_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.totalCountTip')
      .d(
        '根据总条数和每页条数自动计算出页数，根据页数循环请求。支持SpEL表达式，结合SpEL表达式从前序编排中获取(固定相应参数为result(map结构)，通过#result进行关联值获取。示例：前序结果获取:#result["xxx"]，本地参数获取:#local["xxx"]，全局参数获取:#global["xxx"])。'
      ),

  MAX_COUNT: () => intl.get('horc.orchestration.foreach.model.maxCount').d('最大条数'),
  MAX_COUNT_TIP: () =>
    intl
      .get('horc.orchestration.foreach.tip.maxCount')
      .d(
        '总条数与最大条数比较，取两者最小的数据作为循环的总条数。可有效防止输入的总条数比实际的总条数过大时，请求得到的响应数据为空，一直循环空跑的情况。'
      ),

  JS_SCRIPT_PH: () =>
    intl.get('horc.orchestration.foreach.placeholder.jsScriptTip').d(
      `// parent_task为内置变量，通过getVariable、setVariable方法分别取迭代变量和设置迭代变量的值
// 如下示例为每次循环后变量curCounter的值加1

var i=parseInt(parent_task.getVariable("curCounter")) + 1
parent_task.setVariable("curCounter", i)`
    ),

  ERROR_STRATEGY: () => intl.get('horc.orchestration.foreach.model.errorStrategy').d('错误策略'),
  ERROR_STRATEGY_TIP: () =>
    intl
      .get('horc.orchestration.foreach.model.errorStrategyTip')
      .d(
        '错误策略，终止或继续。当编排实例失败策略为"终止"且错误策略为"终止"时，若某次循环子编排出现错误，则终止后续的循环。'
      ),

  FOREACH_ITERATOR_VARIABLE: () =>
    intl.get('horc.orchestration.foreach.model.forearchIteratorVariable').d('循环迭代变量'),
};

export default Langs;
