/**
 * 编排-文件操作-多语言
 * @author baitao.huang@hand-china.com
 * @date 2023-12-04
 * @version: 0.0.1
 * @copyright: Copyright (c) 2023, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPERATION_PARAM: () => intl.get('horc.orchestration.view.title.operationParam').d('操作参数'),

  SERVICE_CONFIG: () => intl.get('horc.orchestration.view.title.serviceConfig').d('服务器配置'),

  FILE_FOLDER_PATH: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.fileFolderPath').d('文件夹路径'),
  PATTERN: () => intl.get('horc.orchestration.model.commonFtpOperation.pattern').d('文件名正则'),
  ENABLE_LOCK: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.enableLock').d('是否加锁'),

  FILE_PATH: () => intl.get('horc.orchestration.model.commonFtpOperation.filePath').d('文件路径'),
  ENCODING: () => intl.get('horc.orchestration.model.commonFtpOperation.encoding').d('文件编码'),
  WRITE_MODE: () => intl.get('horc.orchestration.model.commonFtpOperation.writeMode').d('写模式'),
  CONTENT: () => intl.get('horc.orchestration.model.commonFtpOperation.content').d('内容'),

  SOURCE_PATH: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.sourcePath').d('来源文件'),
  SINK_PATH: () => intl.get('horc.orchestration.model.commonFtpOperation.sinkPath').d('目标文件'),
  ENABLE_CREATE_PARENT_DIR: () =>
    intl
      .get('horc.orchestration.model.commonFtpOperation.enableCreateParentDir')
      .d('是否创建父目录'),
  OVER_WRITE: () => intl.get('horc.orchestration.model.commonFtpOperation.overWrite').d('是否覆盖'),
  NEW_FILE_NAME: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.newFileName').d('新文件名'),
  RENAME: () => intl.get('horc.orchestration.model.commonFtpOperation.rename').d('重命名为'),
  DIR_PATH: () => intl.get('horc.orchestration.model.commonFtpOperation.dirPath').d('目录路径'),
  FILE_OR_DIR: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.fileOrDir').d('文件/文件夹'),

  SSL_FLAG: () => intl.get('horc.orchestration.model.commonFtpOperation.sslFlag').d('开启SSL'),
  FTPS_MODE: () => intl.get('horc.orchestration.model.commonFtpOperation.ftpsMode').d('FTPS模式'),
  TRUST_LIB_FILE: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.trustLibFile').d('信任库文件'),
  PASSWORD: () => intl.get('horc.orchestration.model.commonFtpOperation.password').d('密码'),
  TRUST_LIB_TYPE: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.trustLibType').d('信任库类型'),
  ENCRYPTION_ALGORITHM: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.encryptionAlgorithm').d('加密算法'),
  KEY_FILE: () => intl.get('horc.orchestration.model.commonFtpOperation.keyFile').d('秘钥文件'),
  KEY_PASSWORD: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.keyPassword').d('秘钥密码'),
  KEY_TYPE: () => intl.get('horc.orchestration.model.commonFtpOperation.keyType').d('秘钥类型'),
  ALIAS: () => intl.get('horc.orchestration.model.commonFtpOperation.alias').d('别名'),
  PRIVATE_KEY_PASSWORD: () =>
    intl.get('horc.orchestration.model.commonFtpOperation.privateKeyPassword').d('私钥密码'),
  SSL_CONFIG: () =>
    intl.get('horc.orchestration.view.title.commonFtpOperation.sslConfig').d('SSL配置'),
};

export default Langs;
