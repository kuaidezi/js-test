/**
 * 脚本执行 - Shell脚本
 * @author weili.liang@hand-china.com
 * @date 2022/5/25
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  SCRIPT_CONFIG: () => intl.get('horc.orchestration.model.shell.scriptConfig').d('脚本配置'),
  SHELL_EXECUTE_STRATEGY: () =>
    intl.get('horc.orchestration.model.shell.shellExecuteStrategy').d('执行模式'),
  SHELL_SCRIPT_TYPE: () => intl.get('horc.orchestration.model.shell.shellScriptType').d('脚本类型'),
  SHELL_SCRIPT_CONTENT: () =>
    intl.get('horc.orchestration.model.shell.scriptContent').d('脚本内容'),
  SHELL_SCRIPT_CONTENT_TIP: () =>
    intl
      .get('horc.orchestration.model.shell.scriptContentTip')
      .d(
        "若本节点需返回结果参数供后续节点获取, 请在脚本中填写echo '{setValue(key=value)}', 后续节点根据key获取结果参数值。"
      ),
  SCRIPT_FILE_PATH: () => intl.get('horc.orchestration.model.shell.scriptFilePath').d('脚本文件'),

  FORMATTER: () => intl.get('horc.orchestration.model.shell.formatter').d('格式化'),
  DATA_NOT_EXISTS: () =>
    intl.get('horc.orchestration.model.shell.data.not.exists').d('JSON数据不存在'),
  JSON_FORMATTER_ERROR: () =>
    intl.get('horc.orchestration.model.shell.formatter.error').d('JSON不合法'),
  JSON_FORMATTER_SUCCESS: () =>
    intl.get('horc.orchestration.model.shell.formatter.success').d('格式化成功'),
  DEBUG: () => intl.get('horc.orchestration.model.shell.debug').d('调试'),
  DEBUG_PARAM: () => intl.get('horc.orchestration.model.shell.debugParam').d('调试参数'),
  DEBUG_RESULT: () => intl.get('horc.orchestration.model.shell.debugResult').d('调试结果'),
  DEBUG_WARNING: () => intl.get('horc.orchestration.model.shell.debugWarning').d('调试警告'),
  DEBUG_WARNING_CONTENT: () =>
    intl
      .get('horc.orchestration.model.shell.debugWarningContent')
      .d('调试会实际调用脚本，可能会影响业务数据，是否调试？'),

  NOT_FOUND_FILE: () =>
    intl.get('horc.orchestration.model.shell.notFoundFile').d('未找到文件？点击上传'),
  UPLOAD_FILE_SUCCESS: () =>
    intl.get('horc.orchestration.model.shell.uploadFileSuccess').d('上传文件成功！'),
  UPLOAD_FILE_TIP: () =>
    intl.get('horc.orchestration.model.shell.uploadFileTip').d('服务器配置参数未完善！'),
  SERVER_CONFIG_ERROR: () =>
    intl.get('horc.orchestration.model.shell.serverConfigError').d('服务器配置参数错误！'),
  UPLOAD_FILE_ERROR: () =>
    intl.get('horc.orchestration.model.shell.uploadFileError').d('上传文件失败！'),
  SERVER_CONFIG: () => intl.get('horc.orchestration.model.shell.serverConfig').d('服务器配置'),
  TEST_CONNECT: () => intl.get('horc.orchestration.view.button.testConnect').d('测试连接'),
  SAVE_VALIDATE: () =>
    intl.get('horc.orchestration.model.shell.saveValidate').d('请先完善必输内容'),
  CONNECT_SUCCESS: () => intl.get('horc.orchestration.view.button.connectSuccess').d('连接成功'),
  CONNECT_FAILED: () => intl.get('horc.orchestration.view.button.connectFailed').d('连接失败'),

  PARAM_VALUE_CONFIG_HELP: () =>
    intl
      .get('horc.orchestration.view.title.shell.paramValueConfigHelp')
      .d('linux中使用 $参数名 获取参数值；windows中使用 %参数名% 获取参数值'),
  SCRIPT_FILE_PATH_TIP: () =>
    intl
      .get('horc.orchestration.model.shell.scriptFilePathTip')
      .d('上传文件前需填写好服务器地址、认证信息等配置'),
};

export default Langs;
