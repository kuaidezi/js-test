/**
 * 规则引擎-数据入库
 * @author baitao.huang@hand-china.com
 * @date 2022-5-20
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),

  LOAD: () => intl.get('horc.orchestration.view.button.load').d('加载'),

  DATA_STORAGE: () =>
    intl.get('horc.orchestration.ruleDataStorage.title.dataStorage').d('数据入库'),
  DATA_STORAGE_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.title.dataStorageTip')
      .d('将前序处理的数据进行入库'),
  RULE_STORAGE: () =>
    intl.get('horc.orchestration.ruleDataStorage.title.ruleStorage').d('入库规则'),
  TARGET_TABLE_FIELD: () =>
    intl.get('horc.orchestration.ruleDataStorage.title.targetTableField').d('入库表字段'),

  SOURCE_DATA: () => intl.get('horc.orchestration.ruleDataStorage.model.sourceData').d('来源数据'),
  DATASOURCE: () => intl.get('horc.orchestration.ruleDataStorage.model.dataSource').d('数据源名称'),
  DB_TYPE: () => intl.get('horc.orchestration.ruleDataStorage.model.dbType').d('数据源类型'),
  SCHEMA: () => intl.get('horc.orchestration.ruleDataStorage.model.schema').d('数据源schema'),
  RULE_NAME: () => intl.get('horc.orchestration.ruleDataStorage.model.ruleName').d('规则名称'),
  TARGET_TABLE_NAME: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.targetTableName').d('入库表名'),
  BLOOD_LEVEL: () => intl.get('horc.orchestration.ruleDataStorage.model.bloodLevel').d('血缘层级'),
  NO_REPEAT: () => intl.get('horc.orchestration.ruleDataStorage.model.noRepeat').d('是否去重'),
  STORAGE_CONDITION: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.storageCondition').d('入库条件'),
  BATCH_NUM_FIELD: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.batchNumField').d('入库批次字段'),
  TARGET_FIELD: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.targetField').d('目标字段'),
  FIELD_DESC: () => intl.get('horc.orchestration.ruleDataStorage.model.fieldDesc').d('字段描述'),
  FIELD_TYPE: () => intl.get('horc.orchestration.ruleDataStorage.model.fieldType').d('字段类型'),
  REQUIRED_FLAG: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.requiredFlag').d('是否必输'),
  REPEAT_FLAG: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.repeatFlag').d('去重索引字段'),
  VALUE_TYPE: () => intl.get('horc.orchestration.ruleDataStorage.model.valueType').d('取值类型'),
  VALUE_CONFIG: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.valueConfig').d('取值配置'),
  AGG_STRATEGY: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.aggStrategy').d('聚合策略'),
  ERROR_STRATEGY: () =>
    intl.get('horc.orchestration.ruleDataStorage.model.errorStrategy').d('错误策略'),
  DISABLE_VALUE_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.model.disableValueTypeTip')
      .d('第一层不支持维护外键'),
  REQUIRED_FIELD_LOADING: () =>
    intl.get('horc.orchestration.view.title.requiredFieldLoading').d('正在加载入库表必输字段'),

  DATASOURCE_VALIDATE: () =>
    intl.get('horc.orchestration.view.validate.dataSource').d('请先维护数据源相关信息'),
  RULE_VALIDATE: () => intl.get('horc.orchestration.view.validate.rule').d('请先维护规则相关信息'),

  NO_REPEAT_FIELD_VALIDATE: () =>
    intl
      .get('horc.orchestration.view.validate.noRepeatFieldValidate')
      .d('字段必须配置去重索引字段或配置聚合策略'),
  DELETE_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.deleteTip')
      .d('是否从表格中删除该入库表不存在的字段？'),
  RELOAD: () => intl.get('horc.orchestration.ruleDataStorage.reload').d('重新加载'),
  PRIMARY_KEY_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.model.primaryKeyTip')
      .d('主键必须在数据库中设置自增'),
  CHANGE_SCHEMA_WARNING: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.changeSchemaWarning')
      .d('切换schema可能会导致入库规则失效'),
  SOURCE_DATA_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.model.sourceDataTip')
      .d('选择将要插入数据库的数据，字段类型需要为数组'),
  TARGET_TABLE_CHANGE_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.tableChangeTip')
      .d('入库表切换将会清空入库规则，是否切换？'),
  BATCH_NUMFIELD_CHANGE_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.batchNumfieldTip')
      .d('的取值类型和取值配置将会被默认编码规则覆盖'),
  REFRESH_TARGET_TABLE: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.refreshTargetTable')
      .d('将会根据选定的数据库表重新加载入库字段'),
  CLOSE_CONFIRM: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.closeConfirm')
      .d('数据已变更，关闭弹窗则会丢失该未保存数据。'),
  TARGET_FIELD_TIP: () =>
    intl
      .get('horc.orchestration.ruleDataStorage.targetFieldTip')
      .d('数据库表中为必输的目标字段不能删除'),
};

export default Langs;
