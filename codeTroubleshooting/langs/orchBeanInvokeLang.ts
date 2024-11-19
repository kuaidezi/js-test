/**
 * javaBean调用插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-12-18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */
import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  INCREASE: () => intl.get('hzero.common.button.add').d('新增'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  STATUS: () => intl.get('hzero.common.model.status').d('状态'),
  SUCCESS: () => intl.get('hzero.common.status.success').d('成功'),
  FAILURE: () => intl.get('hzero.common.status.failure').d('失败'),

  ADD_FIELD_MAPPING: () =>
    intl.get('horc.orchestration.view.button.addFieldMapping').d('+ 添加字段映射配置'),
  ADD_VALUE_MAPPING: () =>
    intl.get('horc.orchestration.view.button.addValueMapping').d('+ 添加数据映射配置'),
  ADD_SCRIPT_MAPPING: () =>
    intl.get('horc.orchestration.view.button.addScriptMapping').d('+ 添加脚本映射配置'),

  BASIC_INFO: () => intl.get('horc.orchestration.view.baseInfo').d('基本信息'),
  PARAM_INFO: () => intl.get('horc.orchestration.view.title.beanInvoke.paramInfo').d('参数信息'),
  SETTING_INFO: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.settingInfo').d('配置信息'),
  FIELD_MAPPING_CONFIG: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.fieldMappingConfig').d('字段映射配置'),
  VALUE_MAPPING_CONFIG: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.valueMappingConfig').d('数据映射配置'),
  SCRIPT_MAPPING_CONFIG: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.scriptMappingConfig').d('脚本映射配置'),

  BEAN_SETTING: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.beanSetting').d('Bean配置'),

  SERVICE_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.serviceName').d('服务名称'),
  SERVICE_CODE: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.serviceCode').d('服务代码'),

  TRANSACTION_FLAG: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.transactionFlag').d('启用事务'),
  TRANSACTION_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.transactionFlagTip')
      .d('全局事务优先级高于Bean调用本地事务，启用全局事务将关闭Bean调用本地事务配置'),
  TRANSACTION_PROPAGATION: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.transactionPropagationBehavior')
      .d('事务传播属性'),
  TRANSACTION_PROPAGATION_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.transactionPropagationBehaviorTip')
      .d(
        '事务传播属性用于控制Bean调用流程整体的事务执行机制（所有Bean方法调用将会包裹为一个统一事务域整体控制），可选设置如下：UPROPAGATION_REQUIRED: 如果当前没有事务，就新建一个事务，如果已经存在一个事务中，加入到这个事务中;PROPAGATION_SUPPORTS: 支持当前事务，如果当前没有事务，就以非事务方式执行; PROPAGATION_MANDATORY: 使用当前的事务，如果当前没有事务，就抛出异常; PROPAGATION_REQUIRES_NEW: 新建事务，如果当前存在事务，把当前事务挂起; PROPAGATION_NOT_SUPPORTED: 以非事务方式执行操作，如果当前存在事务，就把当前事务挂起; PROPAGATION_NEVER: 以非事务方式执行，如果当前存在事务，则抛出异常; PROPAGATION_NESTED: 如果当前存在事务，则在嵌套事务内执行；如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作'
      ),

  NEXT_INPUT: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.nextinput').d('传递结果'),
  NEXT_INPUT_ORDER_SEQ: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.nextInputOrderSeq')
      .d('目标参数序号'),

  BEAN_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.beanName').d('bean名称'),
  CLASS_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.className').d('类路径'),
  CLASS_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.classNameTip')
      .d('类完全限定名，Spring Bean请设置为具体实现类完全限定名'),

  METHOD_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.methodName').d('方法名'),
  METHOD_SIGNATURE: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.methodSignature').d('方法签名'),

  EXECUTION_ORDER_SEQ: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.executionOrderSeq').d('执行顺序数'),
  EXECUTION_START_TIME: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.executionStartTime')
      .d('开始执行时间'),
  EXECUTION_END_TIME: () =>
    intl
      .get('horc.orchestration.model.orchestration.beanInvoke.executionEndTime')
      .d('结束执行时间'),
  TIME_CONSUMPTION: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.timeConsumption').d('耗时（ms）'),
  RUN_RESULT: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.runResult').d('运行结果'),

  SEQ: () => intl.get('horc.orchestration.view.serialNumber').d('序号'),
  PARAM_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.paramName').d('参数名称'),
  PARAM_TYPE: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.paramType').d('参数类型'),
  PARAM_VALUE: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.paramValue').d('参数值'),
  PARAM_REMARK: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.paramRemark').d('参数说明'),
  INPUT: () => intl.get('horc.orchestration.model.orchestration.beanInvoke.input').d('输入数据'),
  OUTPUT: () => intl.get('horc.orchestration.model.orchestration.beanInvoke.output').d('输出数据'),
  STACKTRACE: () =>
    intl.get('horc.orchestration.model.orchestration.beanInvoke.stacktrace').d('异常堆栈'),

  RUN: () => intl.get('horc.orchestration.view.title.beanInvoke.run').d('Bean运行情况'),
  DETAIL: () => intl.get('horc.orchestration.view.title.beanInvoke.detail').d('Bean详情'),

  REMOVE_CONFIRM: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.confirm.remove').d('确定移除该Bean配置吗？'),

  INVOKE_RESULT_CONFIG: () =>
    intl.get('horc.orchestration.view.title.beanInvoke.invokeResultConfig').d('调用结果映射配置'),

  DELETE_FIELD_MAPPING_CONFIG_CONFIRM: () =>
    intl
      .get('horc.orchestration.view.title.beanInvoke.deleteFieldMappingConfigConfirm')
      .d('确定删除字段映射配置？'),
  DELETE_VALUE_MAPPING_CONFIG_CONFIRM: () =>
    intl
      .get('horc.orchestration.view.title.beanInvoke.deleteValueMappingConfigConfirm')
      .d('确定删除数据映射配置？'),
  DELETE_SCRIPT_MAPPING_CONFIG_CONFIRM: () =>
    intl
      .get('horc.orchestration.view.title.beanInvoke.deleteScriptMappingConfigConfirm')
      .d('确定删除脚本映射配置？'),
};

export default Langs;
