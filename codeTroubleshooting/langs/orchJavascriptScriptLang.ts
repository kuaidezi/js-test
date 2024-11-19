/**
 * JS-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-28·
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  TYPE_HEADER: () => intl.get('horc.orchestration.model.javascript.typeHeader').d('脚本类型'),
  TYPE: () => intl.get('horc.orchestration.model.javascript.type').d('脚本类型'),
  PARAM_CONFIG: () => intl.get('horc.orchestration.model.javascript.paramConfig').d('设置参数值'),
  MODELER_SCRIPT: () => intl.get('horc.orchestration.model.javascript.modelerScript').d('脚本编码'),
  MODELER_SCRIPT_NAME: () =>
    intl.get('horc.orchestration.model.javascript.modelerScriptName').d('脚本名称'),
  MODELER_SCRIPT_TIP: () =>
    intl
      .get('horc.orchestration.model.javascript.modelerScriptTip')
      .d('选择模型服务-事务处理-脚本事件中配置的脚本'),
  HEADER: () => intl.get('horc.orchestration.model.javascript.header').d('自定义脚本'),
  JAVASCRIPT_CONTENT: () => intl.get('horc.orchestration.model.javascript.content').d('脚本内容'),
  FORMATTER: () => intl.get('horc.orchestration.model.javascript.formatter').d('格式化'),
  DATA_NOT_EXISTS: () =>
    intl.get('horc.orchestration.model.javascript.data.not.exists').d('JSON数据不存在'),
  JSON_FORMATTER_ERROR: () =>
    intl.get('horc.orchestration.model.javascript.formatter.error').d('JSON不合法'),
  JSON_FORMATTER_SUCCESS: () =>
    intl.get('horc.orchestration.model.javascript.formatter.success').d('格式化成功'),
  DEBUG: () => intl.get('horc.orchestration.model.javascript.debug').d('调试'),
  DEBUG_PARAM: () => intl.get('horc.orchestration.model.javascript.debugParam').d('调试参数'),
  DEBUG_RESULT: () => intl.get('horc.orchestration.model.javascript.debugResult').d('调试结果'),
  GROOVY_SCRIPT: () => intl.get('horc.orchestration.model.javascript.groovyScript').d('groovy脚本'),
  DEBUG_WARNING: () => intl.get('horc.orchestration.model.javascript.debugWarning').d('调试警告'),
  DEBUG_WARNING_CONTENT: () =>
    intl
      .get('horc.orchestration.model.javascript.debugWarningContent')
      .d('调试会实际调用脚本，可能会影响业务数据，是否调试？'),
  PARAM_NAME: () => intl.get('horc.orchestration.model.javascript.paramName').d('参数名'),
  PARAM_TYPE: () => intl.get('horc.orchestration.model.javascript.paramType').d('参数类型'),
  PARAM_VALUE: () => intl.get('horc.orchestration.model.javascript.paramValue').d('参数值'),

  RELOAD_PARAM: () => intl.get('horc.orchestration.view.button.reloadParam').d('重新加载参数'),
  BATCH_ASSIGN: () => intl.get('horc.orchestration.view.button.batchAssign').d('批量赋值'),
};

export default Langs;
