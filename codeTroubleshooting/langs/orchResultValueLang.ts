/**
 * 结果取值-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONFIG_INFO: () => intl.get('horc.orchestration.model.resultValue.configInfo').d('配置信息'),
  EXPRESSION: () => intl.get('horc.orchestration.model.resultValue.expression').d('表达式'),
  SETTING_TYPE: () => intl.get('horc.orchestration.model.resultValue.settingType').d('配置类型'),
};

export default Langs;
