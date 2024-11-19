import intl from 'utils/intl';

const Langs = {
  NOT_CHANGE: () => intl.get('hzero.common.validation.notChange').d('未更改'),

  SENDER_CONFIG: () =>
    intl.get('horc.orchestration.ediAs2Client.view.title.senderConfig').d('发送配置'),
  PARTNER_CONFIG: () =>
    intl.get('horc.orchestration.ediAs2Client.view.title.partnerConfig').d('接收配置'),
  MESSAGE_CONFIG: () =>
    intl.get('horc.orchestration.ediAs2Client.view.title.messageConfig').d('消息配置'),
  PASSWORD_CONFIG: () =>
    intl.get('horc.orchestration.ediAs2Client.view.title.passwordConfig').d('密钥配置'),

  FROM: () => intl.get('horc.orchestration.model.ediAs2Client.from').d('邮箱'),
  FROM_TIP: () =>
    intl.get('horc.orchestration.model.ediAs2Client.fromTip').d('from，AS2发送方的RFC2822地址'),
  DISPOSITION_NOTIFICATION_TO: () =>
    intl.get('horc.orchestration.model.ediAs2Client.dispositionNotificationTo').d('收件回执地址'),
  DISPOSITION_NOTIFICATION_TO_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.dispositionNotificationToTip')
      .d('dispositionNotificationTo，用于请求回执的RFC2822地址'),
  SUBJECT: () => intl.get('horc.orchestration.model.ediAs2Client.subject').d('主题'),
  SUBJECT_TIP: () =>
    intl.get('horc.orchestration.model.ediAs2Client.subjectTip').d('subject，发送的消息主题'),
  AS2_FROM: () => intl.get('horc.orchestration.model.ediAs2Client.as2From').d('发件人'),
  AS2_FROM_TIP: () =>
    intl.get('horc.orchestration.model.ediAs2Client.as2FromTip').d('as2From，AS2发送方名称'),
  AS2_TO: () => intl.get('horc.orchestration.model.ediAs2Client.as2To').d('收件人'),
  AS2_TO_TIP: () =>
    intl.get('horc.orchestration.model.ediAs2Client.as2ToTip').d('as2To，AS2接收方名称'),

  REQUEST_URL: () => intl.get('horc.orchestration.model.ediAs2Client.requestUrl').d('收件地址'),
  REQUEST_URL_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.requestUriTip')
      .d('requestUri，传递消息的资源位置'),
  EDI_MESSAGE: () => intl.get('horc.orchestration.model.ediAs2Client.ediMessage').d('消息内容'),
  EDI_MESSAGE_TIP: () =>
    intl.get('horc.orchestration.model.ediAs2Client.ediMessageTip').d('ediMessage，传输的EDI消息'),
  ATTACHED_FILE_NAME: () =>
    intl.get('horc.orchestration.model.ediAs2Client.attachedFileName').d('附件名称'),
  ATTACHED_FILE_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.attachedFileNameTip')
      .d('attachedFileName，附加文件的名称，如果用户不想指定，则为空'),
  AS2_MESSAGE_STRUCTURE: () =>
    intl.get('horc.orchestration.model.ediAs2Client.as2MessageStructure').d('安全配置'),
  AS2_MESSAGE_STRUCTURE_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.as2MessageStructureTip')
      .d('as2MessageStructure，AS2发送消息的结构'),
  COMPRESS_ALGORITHM: () =>
    intl.get('horc.orchestration.model.ediAs2Client.compressionAlgorithm').d('压缩算法'),
  COMPRESS_ALGORITHM_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.compressionAlgorithmTip')
      .d('compressionAlgorithm，用于压缩消息的算法，如果发送未压缩的EDI消息则为空'),
  ENCRYPTING_ALGORITHM: () =>
    intl.get('horc.orchestration.model.ediAs2Client.encryptingAlgorithm').d('加密算法'),
  ENCRYPTING_ALGORITHM_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.encryptingAlgorithmTip')
      .d('encryptingAlgorithm，用于对消息进行加密的算法，如果发送未加密的EDI消息则为空'),
  SIGNING_ALGORITHM: () =>
    intl.get('horc.orchestration.model.ediAs2Client.signingAlgorithm').d('签名算法'),
  SIGNING_ALGORITHM_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.signingAlgorithmTip')
      .d('signingAlgorithm，用于对消息进行签名的算法，如果发送未签名的EDI消息则为空'),
  KEY_STORE_PATH: () =>
    intl.get('horc.orchestration.model.ediAs2Client.keyStorePath').d('密钥库地址'),
  KEY_STORE_PATH_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.keyStorePathTip')
      .d(
        '即JKS密钥对文件，该文件至少包含一个私钥和一个可信任的证书，私钥用于对消息进行签名，证书用于对消息进行加密'
      ),
  KET_STORE_PASSWORD: () =>
    intl.get('horc.orchestration.model.ediAs2Client.keyStorePassword').d('密钥库密码'),
  SELF_PRIVATE_KEY_ALIAS: () =>
    intl.get('horc.orchestration.model.ediAs2Client.selfPrivateKeyAlias').d('私钥别名'),
  SELF_PRIVATE_KEY_ALIAS_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.selfPrivateKeyAliasTip')
      .d('存放在JKS文件中的私钥别名'),
  SELF_PASSWORD: () => intl.get('horc.orchestration.model.ediAs2Client.selfPassword').d('私钥密码'),
  RECEIVER_CERTIFICATE_ALIAS: () =>
    intl.get('horc.orchestration.model.ediAs2Client.receiverCertificateAlias').d('证书别名'),
  RECEIVER_CERTIFICATE_ALIAS_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.receiverCertificateAliasTip')
      .d('存放在JKS文件中的证书别名'),
  SIGNED_RECEIPT_MIC_ALGORITHM: () =>
    intl.get('horc.orchestration.model.ediAs2Client.signedReceiptMicAlgorithms').d('回执签名算法'),
  SIGNED_RECEIPT_MIC_ALGORITHM_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.signedReceiptMicAlgorithmsTip')
      .d(
        'signedReceiptMicAlgorithms，用于签名收据的签名算法的发件人列表（按首选顺序），如果请求未签名的收据则为空'
      ),
  SUB_DEFINITION: () => intl.get('horc.orchestration.model.ediAs2Client.subDefinition').d('子编排'),
  VERSION: () => intl.get('horc.orchestration.model.ediAs2Client.version').d('版本'),
  SUB_DEFINITION_TIP: () =>
    intl
      .get('horc.orchestration.model.ediAs2Client.subDefinitionTip')
      .d(
        '该子编排用来处理AS2服务端接收到的消息，在该子编排中，通过全局参数 `payload` 标签获取，形式如#[global[payload]]'
      ),
};

export default Langs;
