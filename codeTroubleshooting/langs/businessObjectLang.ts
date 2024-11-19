/**
 * 业务对象-插入记录
 * @author baitao.huang@hand-china.com
 * @date 2021-10-13
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  BUSINESS_DOMAIN: () =>
    intl.get('horc.orchestration.businessObject.title.businessDomain').d('业务领域'),
  FIELD_PARAM: () => intl.get('horc.orchestration.businessObject.title.fieldParam').d('字段赋值'),
  UPDATE_CONDITION: () =>
    intl.get('horc.orchestration.businessObject.title.updateCondition').d('修改条件'),
  DELETE_CONDITION: () =>
    intl.get('horc.orchestration.businessObject.title.deleteCondition').d('删除条件'),
  QUERY_CONDITION: () =>
    intl.get('horc.orchestration.businessObject.title.queryCondition').d('查询条件'),

  EXECUTE_PARAM: () =>
    intl.get('horc.orchestration.businessObject.model.executeParam').d('执行参数'),
  BUSINESS_OBJECT: () =>
    intl.get('horc.orchestration.businessObject.model.businessObject').d('业务对象'),
  SOURCE_DATA_TYPE: () =>
    intl.get('horc.orchestration.businessObject.model.sourceDataType').d('来源数据类型'),
  TRAVERSE_OBJECT: () =>
    intl.get('horc.orchestration.businessObject.model.traverseObject').d('来源数据'),
  TRAVERSE_OBJECT_TIP: () =>
    intl
      .get('horc.orchestration.businessObject.model.traverseObjectTip')
      .d(
        '来源数据，即需要遍历的集合对象，来源数据会将前序节点结果汇聚，展示形式为 【节点名称/节点下集合A名称/集合A子集合名称/...】，来源数据只能选取到类型为集合的字段，不能选到集合以外的字段。'
      ),
  FIELD_NAME: () => intl.get('horc.orchestration.businessObject.model.fieldName').d('字段名称'),
  FIELD_TYPE: () => intl.get('horc.orchestration.businessObject.model.fieldType').d('来源类型'),
  FIELD_VALUE: () => intl.get('horc.orchestration.businessObject.model.fieldValue').d('字段值'),
  PRIMARY_KEY: () => intl.get('horc.orchestration.businessObject.model.primaryKey').d('主键'),
  CONDITION: () => intl.get('horc.orchestration.businessObject.model.condition').d('条件'),
  AUTO_CREATE: () =>
    intl.get('horc.orchestration.businessObject.view.title.autoCreate').d('正在自动创建必输参数'),
  DISABLE_MATCH_CODE_TIP: () =>
    intl
      .get('horc.orchestration.model.businessObject.disableMatchCodeTip')
      .d('主键字段、关联字段或主从字段无法直接使用固定值进行赋值，建议通过表达式进行赋值。'),
  FIELD_CODE: () => intl.get('horc.orchestration.businessObject.model.fieldCode').d('字段编码'),
  CHANGE_CONFIRM_TIP: () =>
    intl
      .get('horc.orchestration.businessObject.changeConfirmTip')
      .d('切换业务对象将会清空字段赋值列表'),
};

export default Langs;
