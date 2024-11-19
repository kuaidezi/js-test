/**
 * 结束节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-7-1
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  TITLE: () => intl.get('horc.orchestration.end.model.title').d('响应结果配置'),
  RETURN_TYPE: () => intl.get('horc.orchestration.end.model.returnType').d('返回类型'),
  TASK_NAME: () => intl.get('horc.orchestration.end.model.taskName').d('任务名称'),
  TASK_NAME_TIP: () =>
    intl
      .get('horc.orchestration.end.model.taskNameTip')
      .d('指定任务名称的节点任务结果作为编排实例的响应结果，仅编排同步执行时生效'),
  RESPONSE_CONTENT_TYPE: () =>
    intl.get('horc.orchestration.end.model.ResponseContentType').d('响应内容类型'),
};

export default Langs;
