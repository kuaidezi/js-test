/**
 * Dubbo-多语言
 * @author baitao.huang@hand-china.com
 * @date 2024-5-16
 * @version: 0.0.1
 * @copyright: Copyright (c) 2024, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONNECT_INFO: () => intl.get('horc.orchestration.view.title.dubbo.connectInfo').d('连接信息'),
  SERVICE_INFO: () => intl.get('horc.orchestration.view.title.dubbo.serviceInfo').d('服务信息'),
  PARAM_INFO: () => intl.get('horc.orchestration.view.title.dubbo.paramInfo').d('参数信息'),

  CONNECT_TYPE: () => intl.get('horc.orchestration.model.dubbo.connectType').d('连接类型'),
  PROTOCOL: () => intl.get('horc.orchestration.model.dubbo.protocol').d('请求协议'),
  HOST: () => intl.get('horc.orchestration.model.dubbo.host').d('域名'),
  PORT: () => intl.get('horc.orchestration.model.dubbo.port').d('端口号'),
  CLASS_PATH: () => intl.get('horc.orchestration.model.dubbo.classPath').d('类路径'),
  CLASS_PATH_TIP: () =>
    intl.get('horc.orchestration.model.dubbo.classPathTip').d('interfaceClass，服务的接口类全路径'),
  GROUP_NAME: () => intl.get('horc.orchestration.model.dubbo.groupName').d('分组名称'),
  GROUP_NAME_TIP: () =>
    intl.get('horc.orchestration.model.dubbo.groupNameTip').d('group，服务的分组名称'),
  VERSION: () => intl.get('horc.orchestration.model.dubbo.version').d('版本号'),
  VERSION_TIP: () =>
    intl.get('horc.orchestration.model.dubbo.versionTip').d('version，服务的版本号'),
  INVOKE_METHOD: () => intl.get('horc.orchestration.model.dubbo.invokeMethod').d('调用方法'),
  RESPONSE_TIMEOUT: () => intl.get('horc.orchestration.model.dubbo.responseTimeout').d('超时时间'),
  RESPONSE_TIMEOUT_TIP: () =>
    intl.get('horc.orchestration.model.dubbo.responseTimeoutTip').d('timeout，调用服务的超时时间'),

  SEQ: () => intl.get('horc.orchestration.view.title.dubbo.serialNumber').d('序号'),
  PARAM_NAME: () =>
    intl.get('horc.orchestration.model.orchestration.dubbo.paramName').d('参数名称'),
  PARAM_TYPE: () =>
    intl.get('horc.orchestration.model.orchestration.dubbo.paramType').d('参数类型'),
  PARAM_VALUE: () =>
    intl.get('horc.orchestration.model.orchestration.dubbo.paramValue').d('参数值'),
  PARAM_REMARK: () =>
    intl.get('horc.orchestration.model.orchestration.dubbo.paramRemark').d('参数说明'),
};

export default Langs;
