/**
 * 规则引擎-分组聚合
 * @author weili.liang@hand-china.com
 * @date 2022/5/19
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  GROUP_AGGREGATION: () =>
    intl.get('horc.orchestration.model.ruleGroup.groupAggregation').d('分组聚合'),
  GROUP_AGGREGATION_TIP: () =>
    intl
      .get('horc.orchestration.model.ruleGroup.groupAggregation.tip')
      .d('用于将数据分组并进行计算'),
  TRAVERSE_OBJECT: () =>
    intl.get('horc.orchestration.model.ruleFormula.traverseObject').d('来源数据'),
  TRAVERSE_OBJECT_TIP: () =>
    intl.get('horc.orchestration.model.ruleFormula.traverseObjectTip').d('选择参数并计算结果'),
  GROUP_CONFIG: () => intl.get('horc.orchestration.model.ruleGroup.groupConfig').d('分组聚合配置'),
  GROUP_CONFIG_TIP: () =>
    intl
      .get('horc.orchestration.model.ruleGroup.groupConfig.tip')
      .d('由来源数据带出进行渲染，可参考业务对象'),

  FIELD_NAME: () => intl.get('horc.orchestration.model.ruleGroup.fieldName').d('字段名称'),
  FIELD_TYPE: () => intl.get('horc.orchestration.model.ruleGroup.fieldType').d('字段类型'),
  GROUP_FIELD: () => intl.get('horc.orchestration.model.ruleGroup.groupField').d('分组字段'),
  AGGREGATION_TYPE: () =>
    intl.get('horc.orchestration.model.ruleGroup.aggregationType').d('聚合方式'),
};

export default Langs;
