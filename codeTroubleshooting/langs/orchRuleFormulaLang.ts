/**
 * 规则引擎-公式计算
 * @author weili.liang@hand-china.com
 * @date 2022/5/18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */
import intl from 'utils/intl';

const Langs = {
  FORMULA_CALCULATION: () =>
    intl.get('horc.orchestration.model.ruleFormula.formulaCalculation').d('公式计算'),
  FORMULA_CALCULATION_TIP: () =>
    intl
      .get('horc.orchestration.model.ruleFormula.formulaCalculation.tip')
      .d('选择参数进行公式计算并得到结果'),
  FORMULA_FIELD: () => intl.get('horc.orchestration.model.ruleFormula.ruleField').d('公式字段'),
  AUTO_CREATE_TIP: () =>
    intl
      .get('horc.orchestration.model.ruleFormula.autoCreateTip')
      .d('正在自动创建下一步参数，请稍等'),
  TRAVERSE_OBJECT: () =>
    intl.get('horc.orchestration.model.ruleFormula.traverseObject').d('来源数据'),
  TRAVERSE_OBJECT_TIP: () =>
    intl.get('horc.orchestration.model.ruleFormula.traverseObjectTip').d('选择参数并计算结果'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  FIELD_NAME: () => intl.get('horc.orchestration.model.ruleFormula.fieldName').d('字段名称'),
  FIELD_TYPE: () => intl.get('horc.orchestration.model.ruleFormula.fieldType').d('字段类型'),
  FORMULA_Type: () => intl.get('horc.orchestration.model.ruleFormula.formulaContent').d('公式内容'),
};

export default Langs;
