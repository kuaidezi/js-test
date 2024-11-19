/**
 * 接口透传插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-19
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPTION: () => intl.get('hzero.common.button.action').d('操作'),
  MAINTAIN_FILE: () => intl.get('horc.orchestration.view.button.maintainFile').d('维护文件配置'),
  FILE_CONFIG_TYPE: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.fileConfigType').d('配置类型'),
  FILE_URL: () => intl.get('horc.orchestration.model.interfaceInvoke.fileUrl').d('文件URL'),
  STORE_TYPE: () => intl.get('horc.orchestration.model.interfaceInvoke.storeType').d('存储类型'),
  STORE_CODE: () => intl.get('horc.orchestration.model.interfaceInvoke.storeCode').d('存储编码'),
  STORE_CODE_TIP: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.storeCodeTip').d('文件存储配置的存储编码'),
  BUCKET_NAME: () => intl.get('horc.orchestration.model.interfaceInvoke.bucketName').d('文件分组'),
  ATTACHMENT_UUID: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.attachmentUuid').d('文件批号'),
  FILE_NAME_FILTER_REGEXP: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.fileNameFilterRegexp').d('文件名正则'),
  DIRECTORY: () => intl.get('horc.orchestration.model.interfaceInvoke.directory').d('文件目录'),
  INTERFACE_INVOKE_INFO: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.interfaceInvokeInfo').d('透传接口信息'),
  INTERFACE_INVOKE: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.interfaceInvoke').d('透传接口'),
  INVOKE_PAYLOAD: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.invokePayload').d('透传报文'),
  INVOKE_PARAMS: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.invokeParams').d('透传参数'),
  BODY_TYPE: () => intl.get('horc.orchestration.model.interfaceInvoke.bodyType').d('报文类型'),
  INTERFACE_NAME: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.interfaceName').d('接口名称'),
  INTERFACE_URL: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.interfaceUrl').d('接口地址'),
  HTTP_METHOD: () => intl.get('horc.orchestration.model.interfaceInvoke.httpMethod').d('请求方法'),
  HTTP_METHOD_TIP: () =>
    intl
      .get('horc.orchestration.model.interfaceInvoke.httpMethodTip')
      .d(
        '请求方法仅针对数据源接口或业务对象接口生效。不同的请求方法对应该接口的不同的逻辑：GET: 查询；POST: 新增；PUT: 更新；DELETE: 删除'
      ),
  NAMESPACE: () => intl.get('horc.orchestration.model.interfaceInvoke.namespace').d('命名空间'),
  SERVER_CODE: () => intl.get('horc.orchestration.model.interfaceInvoke.serverCode').d('服务代码'),
  SERVER_NAME: () => intl.get('horc.orchestration.model.interfaceInvoke.serverName').d('服务名称'),
  TYPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),
  KEY: () => intl.get('horc.orchestration.model.interfaceInvoke.key').d('键'),
  VALUE: () => intl.get('horc.orchestration.model.interfaceInvoke.value').d('值'),
  SELECT_PLA: () => intl.get('horc.orchestration.view.message.selectPla').d('请选择'),
  ENABLE_FILE_FLAG: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.enableFileFlag').d('启用响应文件配置'),
  ENABLE_FILE_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.interfaceInvoke.enableFileFlag.tip')
      .d(
        '启用响应文件配置后,当响应为文件类型时,使用该配置存储文件,并以JSON格式返回文件存储后的分组,批次等信息'
      ),
  FILE_NAME: () => intl.get('horc.orchestration.model.interfaceInvoke.fileName').d('文件名'),
  RESPONSE_FILE: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.responseFile').d('响应文件'),
  FILE_NAME_REG_VALIDATE: () =>
    intl.get('horc.orchestration.model.interfaceInvoke.enableFileFlag.tip').d('请输入合法的文件名'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  INTERFACE_INVOKE_PARAMS_TIP: () =>
    intl
      .get('horc.orchestration.model.interfaceInvoke.interfaceInvokeParams.tip')
      .d(
        "透传参数-文件类型参数[键]格式：直接输入参数名即可。透传参数-文本类型参数[键]格式如下：请求头参数：headerParamMap['xxxx']；请求参数：requestParamMap['xxxx']；路径参数：pathVariableMap['xxxx']；表单参数：bodyParamMap['xxxx']。"
      ),
};

export default Langs;
