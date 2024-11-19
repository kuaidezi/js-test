/**
 * Websocket节点-多语言
 * @author wenwen.ye@hand-china.com
 * @date 2023-05-10
 * @version: 0.0.1
 * @copyright: Copyright (c) 2023, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONFIG_INFO: () => intl.get('horc.orchestration.websocket.view.configInfo').d('配置信息'),
  CONFIG_SERVER_CONNECT: () =>
    intl.get('horc.orchestration.websocket.view.configServerConnect').d('服务连接配置'),
  CONFIG_MESSAGE_SEND: () =>
    intl.get('horc.orchestration.websocket.view.configMessageSend').d('消息推送配置'),
  CONFIG_MESSAGING: () =>
    intl.get('horc.orchestration.websocket.view.configMessaging').d('消息处理配置'),
  CONFIG_CONNECT: () => intl.get('horc.orchestration.websocket.view.configConnect').d('连接配置'),
  CONFIG_SEND: () => intl.get('horc.orchestration.websocket.view.configSend').d('发送配置'),
  CONFIG_LISTEN: () => intl.get('horc.orchestration.websocket.view.configListen').d('监听配置'),

  PROTOCOL: () => intl.get('horc.orchestration.websocket.model.protocol').d('协议'),
  PATH: () => intl.get('horc.orchestration.websocket.model.path').d('路径'),
  HOST: () => intl.get('horc.orchestration.websocket.model.host').d('主机/IP'),
  PORT: () => intl.get('horc.orchestration.websocket.model.port').d('监听端口'),
  RELATIVE_PATH: () => intl.get('horc.orchestration.websocket.model.relativePath').d('监听地址'),
  SEND_TO_ALL: () => intl.get('horc.orchestration.websocket.model.sendToAll').d('是否广播消息'),
  SEND_TO_ALL_TIP: () =>
    intl
      .get('horc.orchestration.websocket.model.sendToAllTip')
      .d('子编排返回的结果是否响应给所有客户端'),
  BODY: () => intl.get('horc.orchestration.websocket.model.body').d('消息'),
  VERSION: () => intl.get('horc.orchestration.websocket.model.version').d('版本'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.websocket.model.subDefinition').d('子编排'),
  SUB_DEFINITION_TIP: () =>
    intl
      .get('horc.orchestration.websocket.model.subDefinitionTip')
      .d(
        '该子编排用来处理监听到的消息，在该子编排中，通过全局参数 `payload` 标签获取，形式如#[global[payload]]'
      ),
  CHARSET: () => intl.get('horc.orchestration.websocket.model.Charset').d('字符集'),

  WEBSOCKET_PATH: () =>
    intl.get('horc.orchestration.websocket.model.websocketPath').d('WebSocket连接地址'),
  LISTEN_ENABLED: () => intl.get('horc.orchestration.websocket.model.listenEnabled').d('是否监听'),
  LISTEN_ENABLED_TIP: () =>
    intl
      .get('horc.orchestration.websocket.model.listenEnabledTip')
      .d('是否监听来自服务端的响应消息'),
  SSL_ENABLED: () => intl.get('horc.orchestration.websocket.model.sslEnabled').d('启用证书'),
  TEST: () => intl.get('horc.orchestration.websocket.model.test').d('测试连接'),
  TEST_SUCCESS_TIP: () => intl.get('horc.orchestration.websocket.model.testSuccess').d('连接成功'),
};

export default Langs;
