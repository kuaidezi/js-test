import intl from 'utils/intl';

const Langs = {
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  MAPPING_SET: () => intl.get('horc.orchestration.model.ruleMapping.mappingSet').d('映射值集'),
  MAPPING_LOV: () => intl.get('horc.orchestration.model.ruleMapping.mappingLov').d('值集名称'),
  SOURCE_DATA: () => intl.get('horc.orchestration.model.ruleMapping.sourceData').d('来源数据'),
  SET_PARAM: () => intl.get('horc.orchestration.model.ruleMapping.setParam').d('关联字段'),
  SOURCE_FIELD: () => intl.get('horc.orchestration.model.ruleMapping.sourceField').d('来源字段'),
  LOV_FIELD: () => intl.get('horc.orchestration.model.ruleMapping.lovField').d('值集字段'),
  MAPPING_OUTPUT: () =>
    intl.get('horc.orchestration.model.ruleMapping.mappingOutput').d('输出字段'),
  TARGET_FIELD_NAME: () =>
    intl.get('horc.orchestration.model.ruleMapping.targetFieldName').d('字段名称'),
  TARGET_FIELD_TYPE: () =>
    intl.get('horc.orchestration.model.ruleMapping.targetFieldType').d('字段类型'),
  MASK_CODE: () => intl.get('horc.orchestration.model.ruleMapping.maskCode').d('日期掩码'),
  CANNOT_DUPLICATED: () => intl.get('horc.orchestration.text.cannotDuplicated').d('名称不可重复'),
};

export default Langs;
