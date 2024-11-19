/**
 * 消息节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-8-3
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  EMPTY_DATA: () => intl.get('hzero.common.components.noticeIcon.null').d('暂无数据'),

  MESSAGE_CONFIG: () => intl.get('horc.orchestration.message.view.title.message').d('消息配置'),
  PARAM_LIST: () => intl.get('horc.orchestration.message.view.title.paramList').d('参数列表'),
  TEST_SEND: () => intl.get('horc.orchestration.message.view.button.testSend').d('测试发送'),

  MESSAGE_NAME: () => intl.get('horc.orchestration.message.model.messageName').d('消息名称'),
  MESSAGE_CODE: () => intl.get('horc.orchestration.message.model.messageCode').d('消息代码'),
  RECEIVER_GROUP_NAME: () =>
    intl.get('horc.orchestration.message.model.receiverGroupName').d('接收组名称'),
  RECEIVER_GROUP_CODE: () =>
    intl.get('horc.orchestration.message.model.receiverGroupCode').d('接收组代码'),
  MESSAGE_LANG: () => intl.get('horc.orchestration.message.model.messageLang').d('消息语言'),

  TEST_SEND_SUCCESS: () =>
    intl.get('horc.orchestration.message.notification.testSendSuccess').d('测试发送成功'),
};

export default Langs;
