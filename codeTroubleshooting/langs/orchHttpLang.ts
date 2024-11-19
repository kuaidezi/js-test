/**
 * http插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  REQUEST_METHOD: () => intl.get('horc.orchestration.model.http.requestMethod').d('请求方法'),
  REQUEST_METHOD_TIP: () =>
    intl
      .get('horc.orchestration.model.http.requestMethod.tip')
      .d(
        '请求方法，支持GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS。仅当POST、PUT、PATCH时可设置请求体。'
      ),
  REQUEST_ADDRESS: () => intl.get('horc.orchestration.model.http.requestAddress').d('请求地址'),
  REQUEST_CHARSET: () => intl.get('horc.orchestration.model.http.requestCharset').d('请求字符集'),
  RESPONSE_CHARSET: () => intl.get('horc.orchestration.model.http.responseCharset').d('响应字符集'),
  CHARSET_TIP: () =>
    intl
      .get('horc.orchestration.model.orchestration.charset_tip')
      .d(
        '字符集。若需扩展异步移步至相应值集拓展即可，值集的值请确保为正确且真实的字符集编码。默认UTF-8'
      ),
  READ_TIMEOUT: () => intl.get('horc.orchestration.model.http.readTimeout').d('读超时'),
  READ_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.http.readTimeout.tip')
      .d(
        '读超时时间，即readTimeout，服务器返回数据(response)的时间，单位（ms），超过该时间抛出read timeout，默认30s超时'
      ),
  CONNECTION_TIMEOUT: () =>
    intl.get('horc.orchestration.model.http.connectionTimeout').d('连接超时'),
  CONNECTION_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.http.connectionTimeout.tip')
      .d(
        '连接超时时间，即connectionTimeout，连接上服务器(握手成功)的时间，单位（ms），超出该时间抛出connect timeout，默认30s超时'
      ),
  REQUEST_HEADER: () => intl.get('horc.orchestration.model.http.requestHeader').d('请求头'),
  REQUEST_BODY: () => intl.get('horc.orchestration.model.http.requestBody').d('请求体'),
  COOKIE_PARAM: () => intl.get('horc.orchestration.model.http.cookieParam').d('cookie参数'),
  Certificate_ENABLED: () => intl.get('horc.orchestration.model.http.certificate').d('启用证书'),
  ASSERTION: () => intl.get('horc.orchestration.model.http.assertion').d('断言'),
  ASSERTION_TIP: () =>
    intl
      .get('horc.orchestration.model.http.assertionTip')
      .d(
        '断言，即通过下列选项设定判定条件，多个条件时共同组成"与"的逻辑关系，不满足条件则当前任务节点以失败状态结束。'
      ),
  JSON_BODY: () => intl.get('horc.orchestration.model.http.assertion.jsonBody').d('JSON Path'),
  JSON_BODY_TIP: () =>
    intl
      .get('horc.orchestration.assertion.model.jsonBodyTip')
      .d('JSON响应体需要通过JSON Path语法匹配对应值,可参考：'),
  XML_BODY: () => intl.get('horc.orchestration.model.http.assertion.xmlBody').d('XPath 1.0'),
  XML_BODY_TIP: () =>
    intl
      .get('horc.orchestration.model.http.assertion.xmlBody.tip')
      .d('XML响应体需要通过XPath 1.0语法匹配对应值,可参考：'),
  SUBJECT: () => intl.get('horc.orchestration.model.http.subject').d('对象'),
  CONDITION: () => intl.get('horc.orchestration.model.http.condition').d('条件'),
  FIELD: () => intl.get('horc.orchestration.model.http.field').d('字段'),
  KEY: () => intl.get('horc.orchestration.model.http.key').d('参数名'),
  VALUE: () => intl.get('horc.orchestration.model.http.value').d('参数值'),
  PATH: () => intl.get('horc.orchestration.model.http.path').d('路径'),
  TYPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),
  EXPECTATION: () => intl.get('horc.orchestration.model.http.expectation').d('期望值'),
  AUTH_TYPE: () => intl.get('horc.orchestration.model.http.authType').d('认证模式'),
  AUTH_CATEGORY: () => intl.get('horc.orchestration.model.http.authCategory').d('认证分类'),
  AUTH_CREATE_MODE: () => intl.get('horc.orchestration.model.http.authCreateMode').d('创建模式'),
  AUTH_CODE: () => intl.get('horc.orchestration.model.http.authCode').d('认证编码'),
  AUTH_NAME: () => intl.get('horc.orchestration.model.http.authName').d('认证名称'),

  REQUEST_SETTING: () => intl.get('horc.orchestration.model.http.requestSetting').d('请求设置'),
  REQUEST_SETTING_TIP: () =>
    intl
      .get('horc.orchestration.model.http.requestSetting.tip')
      .d(
        '请求基本信息设置，设置请求客户端(Http Client)的相关参数。仅当请求方法为PUT、POST、PATCH时，可设置请求体'
      ),
  REQUEST_QUERY: () => intl.get('horc.orchestration.model.http.requestQuery').d('url参数'),

  ADD_REQUEST_HEADER: () =>
    intl.get('horc.orchestration.view.button.addRequestHeader').d('添加请求头'),
  CLEAR_REQUEST_HEADER: () =>
    intl.get('horc.orchestration.view.button.clearRequestHeader').d('清空请求头'),

  UPLOAD_FILE: () => intl.get('horc.orchestration.view.button.uploadFile').d('上传文件'),
  ADD_ASSERTION: () => intl.get('horc.orchestration.view.button.addAssertion').d('添加断言'),
  CLEAR_ASSERTION: () => intl.get('horc.orchestration.view.button.clearAssertion').d('清空断言'),

  HTTP_METHOD_CHANGE_CONFIRM: () =>
    intl.get('horc.orchestration.view.title.httpMethodChangeConfirm').d('切换请求方法将清空请求体'),
  MILLI: () => intl.get('horc.orchestration.model.http.milli').d('毫秒'),

  CLEAR_HTTP_BODY_CONFIRM: () =>
    intl
      .get('horc.orchestration.view.message.clearHttpBodyConfirm')
      .d('切换操作将会清空请求体的内容，确定切换吗'),

  MAINTAIN_FILE: () => intl.get('horc.orchestration.view.button.maintainFile').d('维护文件配置'),
  FILE_CONFIG_TYPE: () => intl.get('horc.orchestration.model.http.fileConfigType').d('配置类型'),
  FILE_URL: () => intl.get('horc.orchestration.model.http.fileUrl').d('文件URL'),
  STORE_TYPE: () => intl.get('horc.orchestration.model.http.storeType').d('存储类型'),
  STORE_CODE: () => intl.get('horc.orchestration.model.http.storeCode').d('存储编码'),
  STORE_CODE_TIP: () =>
    intl.get('horc.orchestration.model.http.storeCodeTip').d('文件存储配置的存储编码'),
  BUCKET_NAME: () => intl.get('horc.orchestration.model.http.bucketName').d('文件分组'),
  ATTACHMENT_UUID: () => intl.get('horc.orchestration.model.http.attachmentUuid').d('文件批号'),
  FILE_NAME_FILTER_REGEXP: () =>
    intl.get('horc.orchestration.model.http.fileNameFilterRegexp').d('文件名正则'),
  FILE_NAME_FILTER_REGEXP_TIP: () =>
    intl
      .get('horc.orchestration.model.http.fileNameFilterRegexpTip')
      .d(
        '对文件进行正则筛选，为空时不进行筛选，匹配正则表达式的文件将被获取，表达式需要使用左右正斜杠进行包裹，示例如下：/.[A-z]+/'
      ),
  FILE_NAME: () => intl.get('horc.orchestration.model.http.fileName').d('文件名'),
  FILE_NAME_TIP: () =>
    intl.get('horc.orchestration.model.http.fileNameTip').d('文件名需带上文件类型后缀'),
  RESPONSE_FILE: () => intl.get('horc.orchestration.model.http.responseFile').d('响应文件'),
  FILE_NAME_REG_VALIDATE: () =>
    intl.get('horc.orchestration.model.http.fileNameRegValidate').d('请输入合法的文件名'),
  DIRECTORY: () => intl.get('horc.orchestration.model.http.directory').d('文件目录'),
  ENABLE_FILE_FLAG: () =>
    intl.get('horc.orchestration.model.http.enableFileFlag').d('启用响应文件配置'),
  ENABLE_FILE_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.model.http.enableFileFlag.tip')
      .d(
        '启用响应文件配置后，当响应为文件类型时，使用该配置存储文件，并以JSON格式返回文件存储后的分组，批次等信息'
      ),

  HTTPS_AUTH_TYPE: () => intl.get('horc.orchestration.model.http.httpsAuthType').d('认证方式'),
  HTTPS_AUTH_TYPE_TIP: () =>
    intl
      .get('horc.orchestration.model.http.httpsAuthTypeTip')
      .d(
        '单向认证：客户端认证服务端提供的类型为(cer/crt/pem)的trust store。\n' +
          '双向认证：客户端认证服务端提供的类型为(cer/crt/pem)的trust store; 服务端认证客户端提供的类型为(p12)的key store。\n' +
          '双向认证-简化模式：客户端信任服务端,即忽略trust store的校验; 服务端认证客户端提供的类型为(p12)的key store。'
      ),
  TRUST_STORE: () => intl.get('horc.orchestration.model.http.trustStore').d('trust store'),
  KET_STORE: () => intl.get('horc.orchestration.model.http.keyStore').d('key store'),
  ACCESS_DURATION: () => intl.get('horc.orchestration.model.AccessDuration').d('访问授权时长'),
  DISABLE_REDIRECT: () => intl.get('horc.orchestration.model.disableRedirect').d('禁止重定向'),
  CONFIGURATION: () => intl.get('horc.orchestration.model.configuration').d('参数配置'),
  IMPORT_CURL: () => intl.get('horc.orchestration.model.importcURL').d('导入cURL'),
  OUTPUT_CURL: () => intl.get('horc.orchestration.model.outputcURL').d('导出cURL'),
  PARSER_CODE_PREVIEW_TIP: () =>
    intl.get('horc.orchestration.model.parserCodePreviewTip').d('将移除已维护的数据，确定导入？'),
  CODE_PREVIEW_TIP: () => intl.get('horc.orchestration.model.CodePreviewTip').d('请先填写cURL'),
};

export default Langs;
