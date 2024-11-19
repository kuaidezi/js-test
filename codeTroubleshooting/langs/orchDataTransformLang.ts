/**
 * 数据转化-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-7-15
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  INCREASE: () => intl.get('hzero.common.button.add').d('新增'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  SURE: () => intl.get('hzero.common.button.ok').d('确定'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),

  EXECUTE: () => intl.get('horc.orchestration.view.button.exec').d('执行'),
  MAPPING_MAINTAIN: () =>
    intl.get('horc.orchestration.view.button.mappingMaintain').d('值映射维护'),
  ADD_CONDITION: () => intl.get('horc.orchestration.view.button.addCondition').d('添加条件'),

  HEADER: () => intl.get('horc.orchestration.view.title.header').d('数据映射'),
  DETAIL: () => intl.get('horc.orchestration.view.title.detail').d('数据映射明细'),
  CREATE_LINE: () => intl.get('horc.orchestration.view.title.createLine').d('创建转换维护信息'),
  EDIT_LINE: () => intl.get('horc.orchestration.view.title.editLine').d('更新转换维护信息'),
  BASIC_INFO: () => intl.get('horc.orchestration.view.baseInfo').d('基本信息'),
  DETAIL_INFO: () => intl.get('horc.orchestration.view.title.detailInfo').d('转换维护'),
  FORMULA_MAINTAIN: () => intl.get('horc.orchestration.view.title.formulaMaintain').d('公式维护'),
  CAST_VAL_MAINTAIN: () =>
    intl.get('horc.orchestration.view.title.castValMaintain').d('值转换维护'),
  CONDITION_MAINTAIN: () =>
    intl.get('horc.orchestration.view.title.conditionMaintain').d('条件维护'),

  SEQ_NUMBER: () => intl.get('horc.orchestration.view.serialNumber').d('序号'),
  CAST_CODE: () => intl.get('horc.orchestration.model.dataTransform.castCode').d('数据映射代码'),
  CAST_NAME: () => intl.get('horc.orchestration.model.dataTransform.castName').d('数据映射名称'),
  DATA_TYPE: () => intl.get('horc.orchestration.model.dataTransform.dataType').d('数据映射类型'),
  STATUS: () => intl.get('horc.orchestration.view.title.status').d('状态'),
  CAST_TYPE: () => intl.get('horc.orchestration.model.dataTransform.castType').d('数据映射类型'),
  CAST_ROOT: () => intl.get('horc.orchestration.model.dataTransform.castRoot').d('字段路径'),
  CAST_FIELD: () => intl.get('horc.orchestration.model.dataTransform.castField').d('字段名称'),
  CAST_FORMULA: () => intl.get('horc.orchestration.model.dataTransform.castFormula').d('公式转换'),
  CAST_VAL: () => intl.get('horc.orchestration.model.dataTransform.castVal').d('值转换'),
  CAST_SQL: () => intl.get('horc.orchestration.model.dataTransform.castSql').d('SQL转换'),
  CAST_DATASOURCE_TYPE: () =>
    intl.get('horc.orchestration.model.dataMapping.castDatasourceType').d('数据源类型'),
  CAST_DATASOURCE: () =>
    intl.get('horc.orchestration.model.dataMapping.castDatasource').d('数据源名称'),
  CAST_DATASOURCE_SCHEMA: () =>
    intl.get('horc.orchestration.model.dataMapping.castDatasourceSchema').d('数据源schema'),
  SQL: () => intl.get('horc.orchestration.model.dataTransform.Sql').d('SQL'),
  FORMULA: () => intl.get('horc.orchestration.model.dataTransform.formula').d('公式'),
  DATA_CONFIG_REQUIRED: () =>
    intl.get('horc.orchestration.view.message.dataConfigRequired').d('请输入数据映射配置'),

  CAST_LOV_CODE: () => intl.get('horc.orchestration.model.dataTransform.castLovCode').d('值集编码'),
  CAST_LOV_NAME: () => intl.get('horc.orchestration.model.dataTransform.castLovName').d('值集名称'),
  CAST_LOV_FIELD: () =>
    intl.get('horc.orchestration.model.dataTransform.castLovField').d('值集转化字段'),
  CAST_LOV_TYPE: () =>
    intl.get('horc.orchestration.model.dataTransform.castLovType').d('值集转换类型'),
  CAST_NULL_VALUE_STRATEGRY: () =>
    intl.get('horc.orchestration.model.dataTransform.castNullValueStrategy').d('空值策略'),
  CAST_NULL_VALUE_STRATEGRY_TIP: () =>
    intl
      .get('horc.orchestration.model.dataTransform.castNullValueStrategyTip')
      .d('转换后的结果为空值的处理策略'),
  CAST_MULTIVALUED_STRATEGRY: () =>
    intl.get('horc.orchestration.model.dataTransform.castMultivaluedStrategy').d('多值策略'),
  CAST_MULTIVALUED_STRATEGRY_TIP: () =>
    intl
      .get('horc.orchestration.model.dataTransform.castMultivaluedStrategyTip')
      .d('转换后的结果为多个值的处理策略'),
  CAST_LOV_LANG: () =>
    intl.get('horc.orchestration.model.dataTransform.castLovLang').d('值集转化语言'),
  DESENSITIZE_RULE: () =>
    intl.get('horc.orchestration.model.dataTransform.desensitizeRule').d('脱敏规则'),

  EXPR_SOURCE_TYPE: () =>
    intl.get('horc.orchestration.model.dataTransform.exprSourceType').d('来源类型'),
  EXPR_SOURCE_VALUE: () =>
    intl.get('horc.orchestration.model.dataTransform.exprSourceValue').d('来源值'),

  TARGET_VALUE: () => intl.get('horc.orchestration.model.dataTransform.targetValue').d('目标值'),
  CONDITION: () => intl.get('horc.orchestration.model.dataTransform.condition').d('条件'),
  CONJUNCTION: () =>
    intl.get('horc.orchestration.model.dataTransform.conjunction').d('多条件连接符'),

  FIELD_TYPE: () => intl.get('horc.orchestration.model.dataTransform.fieldType').d('目标字段类型'),

  CONDITION_FIELD: () =>
    intl.get('horc.orchestration.model.dataTransform.conditionField').d('条件字段'),
  VALUE: () => intl.get('horc.orchestration.model.dataTransform.sourceValue').d('值'),

  CAST_FORMULA_TIP_HEADER: () =>
    intl.get('horc.orchestration.view.message.castFormulaTip').d('不同的符号标注代表不同的含义：'),
  CAST_FORMULA_TIP_CONST: () =>
    intl.get('horc.orchestration.view.message.castFormulaConst').d('常量：双引号 "" 标注'),
  CAST_FORMULA_TIP_FORMULA: () =>
    intl.get('horc.orchestration.view.message.castFormulaFormula').d('公式：方括号 [] 标注'),
  CAST_FORMULA_TIP_RESPONSE: () =>
    intl.get('horc.orchestration.view.message.castFormulaResponse').d('变量：花括号 {} 标注'),

  SAVE_VALIDATE: () =>
    intl.get('horc.orchestration.model.dataTransform.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.orchestration.model.dataTransform.saveEmpty').d('无修改内容,无需保存'),

  PATTERN_MISMACTH: () =>
    intl
      .get('hzero.common.validation.codeUpper')
      .d('全大写及数字，必须以字母、数字开头，可包含“-”、“_”、“.”、“/”'),

  DEBUG: () => intl.get('horc.orchestration.button.debug').d('调试'),
  DEBUG_LOG: () => intl.get('horc.orchestration.button.debugLog').d('调试日志'),
  SOURCE_DATA: () => intl.get('horc.orchestration.model.sourceData').d('来源报文'),
  RESULT_DATA: () => intl.get('horc.orchestration.model.resultData').d('调试结果'),
  DEBUG_TIP: () =>
    intl
      .get('horc.orchestration.button.debug.tip')
      .d(
        '调试仅对来源报文执行数据映射处理，流程调试将同时执行字段映射处理与数据映射处理；如需执行流程调试，请确保字段映射或者数据映射至少配置了其中一个'
      ),
  FLOW_DEBUG: () => intl.get('horc.orchestration.button.flowDebug').d('流程调试'),
  FORMATTER: () => intl.get('horc.orchestration.button.formatter').d('格式化'),
  CAST_DATA_TYPE_REQUIRED: () =>
    intl.get('horc.orchestration.validation.required.castDataType').d('请输入数据映射类型'),
  JSON_FORMATTER: () =>
    intl.get('horc.orchestration.debug.validation.formatter.json').d('JSON格式有误'),
  XML_FORMATTER: () =>
    intl.get('horc.orchestration.debug.validation.formatter.xml').d('XML格式有误'),
  SOURCE_DATA_REQUIRED: () =>
    intl.get('horc.orchestration.debug.validation.required.sourceData').d('请输入来源报文'),
  CAST_LINE_REQUIRED: () =>
    intl.get('horc.orchestration.debug.validation.required.castLine').d('请维护转换信息'),

  IMPORT_MAPPING_CONFIG: () =>
    intl.get('horc.orchestration.button.importMappingConfig').d('导入映射配置'),
  IMPORT_MAPPING_CONFIG_TIP: () =>
    intl.get('horc.fieldMapping.tip.importMappingConfig').d('导入JSON文件或者输入JSON格式数据'),

  DATA_MASKING: () => intl.get('horc.orchestration.debug.DataMasking').d('数据脱敏'),
  DATA_MASKING_INFO: () => intl.get('horc.orchestration.debug.DataMaskingInfo').d('脱敏信息'),
  VALUE_MAPPING_TRANSFORMATION: () =>
    intl.get('horc.orchestration.debug.valueMappingTransformation').d('值映射转换'),
  NEW_FIELD_VALUE: () => intl.get('horc.orchestration.debug.newFieldValue').d('新建字段值'),
  FIELD_VALUE: () => intl.get('horc.orchestration.debug.fieldValue').d('字段值'),
  MAPPING_FIELD_SELECTION: () =>
    intl.get('horc.orchestration.debug.MappingFieldSelection').d('映射字段选择'),
  MAPPING_PATH_SELECTION: () =>
    intl.get('horc.orchestration.debug.MappingPathSelection').d('映射路径选择'),
  VALUE_SET_INFORMATION: () =>
    intl.get('horc.orchestration.model.dataMapping.ValueSetInformation').d('值集信息'),
  EXPRESS: () => intl.get('horc.orchestration.view.express').d('表达式'),
  MAPPING_OVERVIEW: () => intl.get('horc.orchestration.view.mappingOverview').d('映射概览'),
  FIELD_PATH_SELECTION: () =>
    intl.get('horc.orchestration.debug.fieldPathSelection').d('字段路径选择'),
  FIELD_NAME_SELECTION: () => intl.get('horc.orchestration.debug.fieldNameSelection').d('字段选择'),
  FIELD_PATH_SELECTION_HELP: () =>
    intl
      .get('horc.orchestration.debug.fieldPathSelectionHelp')
      .d(
        '支持简单路径或JsonPath表达式方式维护路径，路径未指定则使用数据根路径；在该路径层级执行数据映射操作，若路径为数组则遍历对象执行。'
      ),
  FIELD_NAME_SELECTION_HELP: () =>
    intl
      .get('horc.orchestration.debug.fieldNameSelectionHelp')
      .d(
        '数据映射处理的目标字段，为字段路径下的属性或子属性，只支持简单路径方式选择，如 itemKey、child.itemKey、array[0].itemKey；部分映射类型映射字段为报文已有字段，映射后覆盖该字段值；部分映射类型支持配置生成新的字段。'
      ),
  CAST_FORMULA_HELP: () =>
    intl
      .get('horc.orchestration.view.castFormulaHelp')
      .d('支持维护常量、属性字段、运算表达式，将多段内容拼接起来作为字段值。'),
  CAST_LOV_FIELD_HELP: () =>
    intl
      .get('horc.orchestration.view.castLovFieldHelp')
      .d(
        '通过该字段关联匹配值集进行转换，讲结果写入映射字段；未指定则使用映射字段进行匹配，此类情况下映射后覆盖映射字段值。'
      ),
  CAST_MODAL_HELP: () =>
    intl
      .get('horc.orchestration.view.message.castModalHelp')
      .d(
        '使用SpEL模板语法解析，其中#[]为表达式解析器，表达式解析器包裹的为SpEL表达式，支持表达式计算；若需要表达式参与计算，将参与计算的表达式用表达式解析器#[]包裹即可，例如：#[result[page] * 10]即将获取的page参数乘10。表达式支持映射路径下属性和报文根路径属性两类，只能针对前续结果(result)进行映射转换，不支持选择其他节点属性；映射路径下属性，如映射路径为$.content[*]，则获取content下userName属性，直接使用#[userName]，用于遍历时获取遍历路径下属性；报文根路径下属性，如 #[result[totalPages]]，用于从报文根路径下获取单个属性。'
      ),
  CAST_ROOT_CHANGE_TIP: () =>
    intl
      .get('horc.orchestration.view.message.castRootChangeTip')
      .d('字段路径发生变化，请注意字段名称是否需要更改。'),
};

export default Langs;
