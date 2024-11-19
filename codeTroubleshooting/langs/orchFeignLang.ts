/**
 * Feign插件-多语言
 * @author wenwen.ye@hand-china.com
 * @date 2022-11-11
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  TYPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),

  INTERFACE_CONFIG: () =>
    intl.get('horc.orchestration.feign.view.title.interfaceConfig').d('接口配置'),
  SERVICE_NAME: () => intl.get('horc.orchestration.model.feign.serviceName').d('服务名'),
  METHOD: () => intl.get('horc.orchestration.model.feign.method').d('请求方法'),
  PATH: () => intl.get('horc.orchestration.model.feign.path').d('接口地址'),
  DESCRIPTION: () => intl.get('horc.orchestration.model.feign.description').d('接口描述'),

  CONNECT_TIMEOUT: () => intl.get('horc.orchestration.model.feign.connectTimeout').d('连接超时'),
  CONNECT_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.feign.connectTimeoutTip')
      .d(
        '连接超时时间，即connectionTimeout，连接上服务器(握手成功)的时间，单位（ms），超出该时间抛出connecttimeout，默认2s超时'
      ),
  READ_TIMEOUT: () => intl.get('horc.orchestration.model.feign.readTimeout').d('读超时'),
  READ_TIMEOUT_TIP: () =>
    intl
      .get('horc.orchestration.model.feign.readTimeoutTip')
      .d(
        '读超时时间，即readTimeout，服务器返回数据(response)的时间，单位（ms），超过该时间抛出readtimeout，默认5s超时'
      ),

  PATH_PARAM: () => intl.get('horc.orchestration.feign.view.title.pathParam').d('路径参数'),
  QUERY_PARAM: () => intl.get('horc.orchestration.feign.view.title.queryParam').d('查询参数'),
  REQUEST_HEADER: () => intl.get('horc.orchestration.feign.view.title.requestHeader').d('请求头'),
  REQUEST_BODY: () => intl.get('horc.orchestration.feign.view.title.requestBody').d('请求体'),
  ASSERTION: () => intl.get('horc.orchestration.model.feign.assertion').d('断言'),
  ASSERTION_TIP: () =>
    intl
      .get('horc.orchestration.model.feign.assertion.tip')
      .d(
        '断言，即通过下列选项设定判定条件，设定多个条件时共为"与"的逻辑关系。不满足条件则终止当前任务，最终编排实例的结果需通过失败策略决定。'
      ),
  RESPONSE_FILE: () => intl.get('horc.orchestration.model.feign.responseFile').d('响应文件'),

  SUCCESS_ASSERTION: () =>
    intl.get('horc.orchestration.view.button.successAssertion').d('调用成功'),
  FAIL_ASSERTION: () => intl.get('horc.orchestration.view.button.failAssertion').d('调用失败'),
  INTERFACE_CHANGE_TIP: () =>
    intl
      .get('horc.orchestration.view.button.interfaceChangeTip')
      .d('切换接口成功，是否刷新接口参数？'),
};

export default Langs;
