/**
 * JS-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-28·
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PARAM_CONFIG: () =>
    intl.get('horc.orchestration.model.transactionFlow.paramConfig').d('设置参数值'),
  HEADER: () => intl.get('horc.orchestration.model.transactionFlow.typeHeader').d('事务处理流'),
  FLOW_CODE: () => intl.get('horc.orchestration.model.transactionFlow.flowCode').d('流编码'),
  FLOW_NAME: () => intl.get('horc.orchestration.model.transactionFlow.flowName').d('流名称'),
  FLOW_CODE_TIP: () =>
    intl
      .get('horc.orchestration.model.transactionFlow.flowCodeTip')
      .d('选择模型服务-事务处理-事务处理流中配置的流'),
  PARAM_NAME: () => intl.get('horc.orchestration.model.transactionFlow.paramName').d('参数名'),
  PARAM_TYPE: () => intl.get('horc.orchestration.model.transactionFlow.paramType').d('参数类型'),
  PARAM_VALUE: () => intl.get('horc.orchestration.model.transactionFlow.paramValue').d('参数值'),
};

export default Langs;
