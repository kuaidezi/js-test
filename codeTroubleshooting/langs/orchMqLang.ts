/**
 * mq生产者、消费者-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-18
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  MQ_EVENT_SELECT: () => intl.get('horc.orchestration.mq.view.title.mqEventSelect').d('事件选择'),
  MQ_IOT_THING: () => intl.get('horc.orchestration.mq.view.title.iotThingSelect').d('设备选择'),
  MQ_IOT_ALI_THING: () =>
    intl.get('horc.orchestration.mq.view.title.iotAliThingSelect').d('云账户选择'),
  MQ_BASIC_INFO: () => intl.get('horc.orchestration.mq.view.title.eventInfo').d('事件信息'),
  MQ_EXTRA_INFO: () => intl.get('horc.orchestration.mq.view.title.mqExtraInfo').d('事件额外信息'),
  MQ_PAYLOAD: () => intl.get('horc.orchestration.mq.view.title.mqPayload').d('消息'),
  MQ_EVENT_NAME: () =>
    intl.get('horc.orchestration.mq.modal.orchestration.mqEventName').d('事件名称'),
  MQ_ACTION_TYPE: () =>
    intl.get('horc.orchestration.mq.modal.orchestration.mqActionType').d('动作类型'),
  MQ_SOURCE_TYPE: () =>
    intl.get('horc.orchestration.mq.modal.orchestration.mqSourceType').d('事件源类型'),
  MQ_SOURCE_ADDRESS: () =>
    intl.get('horc.orchestration.mq.modal.orchestration.mqSourceAddress').d('事件源地址'),
  PARAM_NAME: () => intl.get('horc.orchestration.mq.modal.orchestration.paramName').d('参数名称'),
  PARAM_VALUE: () => intl.get('horc.orchestration.mq.modal.orchestration.paramValue').d('参数值'),
  MQ_TOPIC: () => intl.get('horc.orchestration.mq.modal.orchestration.mqTopic').d('Topic'),
  MQ_MESSAGE_CONTENT: () =>
    intl.get('horc.orchestration.mq.modal.orchestration.mqMessageContent').d('消息内容'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.mq.model.mq.subDefinition').d('子编排'),
  GROUP: () => intl.get('horc.orchestration.mq.model.mq.group').d('分组'),
  GROUP_TIP: () => intl.get('horc.orchestration.mq.model.mq.groupTip').d('默认分组为Topic名称'),
  SUB_DEFINITION_TIP: () =>
    intl
      .get('horc.orchestration.mq.model.mq.subDefinitionTip')
      .d('子编排中开始节点后续的一级节点可通过result关键字获取MQ消费者监听到的消息'),
  VERSION: () => intl.get('horc.orchestration.mq.foreach.model.version').d('版本'),
  EVENT_PARAM_CONFIG: () =>
    intl.get('horc.orchestration.mq.view.title.eventParamConfig').d('事件参数配置'),
  MESSAGE_KEY_HELP: () =>
    intl.get('horc.orchestration.mq.view.title.messageKeyHelp').d('获取消息数据的参数名'),
  MESSAGE_VALUE_HELP: () =>
    intl
      .get('horc.orchestration.mq.view.title.messageValueHelp')
      .d(
        '自动赋值，监听的消息数据，可在监听消息模板中维护其数据结构，然后在设置参数值的时候可通过预置变量选取对应的值。'
      ),
  LISTEN_MESSAGE_TEMPLATE: () =>
    intl.get('horc.orchestration.mq.view.title.listenMessageTemplate').d('监听消息模板'),
};

export default Langs;
