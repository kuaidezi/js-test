/**
 * 连接器-多语言
 */

import intl from 'utils/intl';

const Langs = {
  CONNECT_CONFIG: () => intl.get('horc.orchestration.model.template.connectConfig').d('连接设置'),
  PARAM_CONFIG: () => intl.get('horc.orchestration.model.template.paramConfig').d('参数设置'),
  CHOOSE_CONNECT: () => intl.get('horc.orchestration.model.template.chooseConnect').d('选择连接'),
  CREATE_CONNECT: () => intl.get('horc.orchestration.model.template.createConnect').d('新建连接'),

  CONNECT_CONFIG_NOT_EMPTY: () =>
    intl.get('horc.orchestration.model.template.connectConfigNotEmpty').d('连接配置不允许为空'),
  CONNECT_CONFIG_TIP: () =>
    intl
      .get('horc.orchestration.model.template.connectConfigTip')
      .d('当连接设置为空，调用时使用具有默认标识的连接配置'),
  CURRENT_DEFAULT_CONNECTCONFIG: () =>
    intl.get('horc.orchestration.model.currentDefaultConnectConfig').d('当前默认连接设置'),
};

export default Langs;
