/**
 * 模型操作-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-31
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),

  MODELER_SETTING: () =>
    intl.get('horc.orchestration.modeler.view.title.modelerSetting').d('模型配置'),

  ADD_PARAM: () => intl.get('horc.orchestration.modeler.view.button.addParam').d('新增参数'),
  MODELER_APP: () => intl.get('horc.orchestration.modeler.model.modelerApp').d('模型应用'),
  MODELER_VIEW: () => intl.get('horc.orchestration.modeler.model.modelerView').d('模型视图'),
  MODELER_ACTION: () => intl.get('horc.orchestration.modeler.model.modelerAction').d('模型操作'),
  ALIAS_NAME: () => intl.get('horc.orchestration.modeler.model.aliasName').d('参数'),
  DISPLAY_NAME: () => intl.get('horc.orchestration.modeler.model.displayName').d('参数描述'),
  LOGIC_OPERATION: () => intl.get('horc.orchestration.modeler.model.logicOperation').d('逻辑操作'),
  PARAM_VALUE: () => intl.get('horc.orchestration.modeler.model.paramValue').d('参数值'),

  JSON_VALIDATE: () => intl.get('horc.orchestration.modeler.validate.json').d('错误的JSON格式数据'),
};

export default Langs;
