/**
 * 脚本插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-19·
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  DEBUG: () => intl.get('horc.orchestration.view.button.debug').d('调试'),
  CODE_EDITING: () => intl.get('horc.orchestration.model.groovyScript.codeEditing').d('代码编辑'),
  GROOVY_SCRIPT: () =>
    intl.get('horc.orchestration.model.groovyScript.groovyScript').d('groovy脚本'),
  DEBUG_RESULT: () => intl.get('horc.orchestration.model.groovyScript.debugResult').d('调试结果'),
  JSON_FORMATTER_ERROR: () =>
    intl.get('horc.orchestration.model.groovyScript.formatter.error').d('JSON不合法'),
  GROOVY_SCRIPT_CONTENT: () =>
    intl.get('horc.orchestration.model.groovyScript.content').d('脚本内容'),
};

export default Langs;
