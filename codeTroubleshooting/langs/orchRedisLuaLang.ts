/**
 * JS-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-28·
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  DATASOURCE_NAME: () =>
    intl.get('horc.orchestration.model.redisLua.datasourceName').d('数据源名称'),
  CONTENT_TYPE: () => intl.get('horc.orchestration.model.redisLua.contentType').d('响应文本类型'),
  CONTENT_TYPE_TIP: () =>
    intl.get('horc.orchestration.model.redisLua.contentTypeTip').d('Lua脚本的操作结果的返回格式'),
  LUA_SCRIPT_CONTENT: () => intl.get('horc.orchestration.model.redisLua.content').d('脚本内容'),
  SCRIPT_CONFIG: () => intl.get('horc.orchestration.view.redisLua.scriptConfig').d('脚本配置'),
  DEBUG: () => intl.get('horc.orchestration.button.redisLua.debug').d('调试'),
  DEBUG_PARAM: () => intl.get('horc.orchestration.model.redisLua.debugParam').d('调试参数'),
  RESULT_DATA: () => intl.get('horc.orchestration.model.redisLua.resultData').d('调试结果'),
  FORMATTER: () => intl.get('horc.orchestration.button.redisLua.formatter').d('格式化'),
  JSON_FORMATTER: () =>
    intl.get('horc.orchestration.redisLua.validation.formatter.json').d('JSON格式有误'),
  DEBUG_PARAM_REQUIRED: () =>
    intl.get('horc.orchestration.redisLua.validation.required.debugParam').d('请输入调试参数'),
  SCRIPT_PARAMS: () => intl.get('horc.orchestration.view.redisLua.scriptParams').d('脚本参数'),
  ADD_PARAMS: () => intl.get('horc.orchestration.button.redisLua.addParams').d('新增'),
};

export default Langs;
