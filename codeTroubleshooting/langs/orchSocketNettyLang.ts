/**
 * Netty节点-多语言
 * @author wenwen.ye@hand-china.com
 * @date 2023-02-10
 * @version: 0.0.1
 * @copyright: Copyright (c) 2023, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONFIG_INFO: () => intl.get('horc.orchestration.mutex.view.configInfo').d('配置信息'),
  CONFIG_ENCODER: () => intl.get('horc.orchestration.mutex.view.configEncoder').d('编码配置'),
  CONFIG_DECODER: () => intl.get('horc.orchestration.mutex.view.configDecoder').d('解码配置'),
  CONFIG_SSL: () => intl.get('horc.orchestration.mutex.view.configSsl').d('SSL配置'),

  PROTOCOL: () => intl.get('horc.orchestration.mutex.model.protocol').d('协议'),
  HOST: () => intl.get('horc.orchestration.mutex.model.host').d('主机/IP'),
  PORT: () => intl.get('horc.orchestration.mutex.model.port').d('端口'),
  BODY: () => intl.get('horc.orchestration.mutex.model.body').d('消息'),
  COSTUMER_SYNC: () => intl.get('horc.orchestration.mutex.model.costumerSync').d('同步响应'),
  PRODUCER_SYNC: () => intl.get('horc.orchestration.mutex.model.producerSync').d('同步等待响应'),
  ENCODER: () => intl.get('horc.orchestration.mutex.model.encoder').d('编码'),
  DECODER: () => intl.get('horc.orchestration.mutex.model.decoder').d('解码'),
  CHARSET: () => intl.get('horc.orchestration.mutex.model.Charset').d('字符集'),
  ENCODER_SCRIPT: () =>
    intl.get('horc.orchestration.mutex.model.encoderScript').d('自定义编码脚本'),
  DECODER_SCRIPT: () =>
    intl.get('horc.orchestration.mutex.model.decoderScript').d('自定义解码脚本'),
  COSTUMER_SYNC_TIP: () =>
    intl
      .get('horc.orchestration.mutex.model.costumerSync.tip')
      .d('接收到报文后，同步响应一个成功接收消息给客户端（即Socket发送方）'),
  PRODUCER_SYNC_TIP: () =>
    intl
      .get('horc.orchestration.mutex.model.producerSync.tip')
      .d('发送报文后，同步等待服务端（即Socket监听方）响应消息'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.mutex.model.subDefinition').d('子编排'),
  SOCKET_NETTY_SUB_DEFINITION_TIP: () =>
    intl
      .get('horc.orchestration.model.socketNetty.subDefinitionTip')
      .d(
        '该子编排用来处理监听到的消息，在该子编排中，通过全局参数 `payload` 标签获取，形式如#[global[payload]]'
      ),
  VERSION: () => intl.get('horc.orchestration.mutex.model.version').d('版本'),
  IS_SSL: () => intl.get('horc.orchestration.mutex.model.isSSL').d('启用SSL'),
  KEY_STORE_PATH: () => intl.get('horc.orchestration.mutex.model.keyStorePath').d('密钥库地址'),
  KEY_STORE_PATH_TIP: () =>
    intl
      .get('horc.orchestration.mutex.model.keyStorePathTip')
      .d(
        '即JKS密钥对文件，该文件至少包含一个私钥和一个可信任的证书，私钥用于对消息进行签名，证书用于对消息进行加密'
      ),
  PASSPHRASE: () => intl.get('horc.orchestration.mutex.model.passphrase').d('密钥库密码'),
};

export default Langs;
