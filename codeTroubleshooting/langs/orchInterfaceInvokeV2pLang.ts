/**
 * 接口透传V2P插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2024-05-24
 * @version: 0.0.1
 * @copyright: Copyright (c) 2024, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONNECT_TIMEOUT: () =>
    intl.get('horc.orchestration.model.interfaceInvokeV2p.connectTimeout').d('连接超时'),
  CONNECT_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.interfaceInvokeV2p.connectTimeoutTip')
      .d(
        '连接超时时间，即connectionTimeout，连接上服务器(握手成功)的时间，单位（ms），超出该时间抛出connecttimeout，默认2s超时'
      ),
  READ_TIMEOUT: () =>
    intl.get('horc.orchestration.model.interfaceInvokeV2p.readTimeout').d('读超时'),
  READ_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.interfaceInvokeV2p.readTimeoutTip')
      .d(
        '读超时时间，即readTimeout，服务器返回数据(response)的时间，单位（ms），超过该时间抛出readtimeout，默认5s超时'
      ),
};

export default Langs;
