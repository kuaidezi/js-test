/**
 * 网关插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-19
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  EMPTY: () => intl.get('hzero.common.components.noticeIcon.null').d('暂无数据'),

  CONFIG_INFO: () =>
    intl.get('horc.orchestration.modal.orchestration.condition.gateway.configInfo').d('配置信息'),
  GATEWAY_TITLE: () =>
    intl.get('horc.orchestration.modal.orchestration.condition.gateway.title').d('网关信息'),
  GATEWAY: () => intl.get('horc.orchestration.modal.orchestration.condition.gateway').d('条件'),
  CONDITION_RESULT: () =>
    intl.get('horc.orchestration.modal.orchestration.condition.result').d('网关'),
  CONDITION_SUCCESS_NODE: () => intl.get('horc.orchestration.status.success').d('成功'),
  CONDITION_FAILED_NODE: () => intl.get('horc.orchestration.status.failure').d('失败'),
  GATEWAY_TIP: () =>
    intl
      .get('horc.orchestration.modal.orchestration.condition.gateway.tip')
      .d('条件判定结果作为网关条件节点的执行结果。判定结果失败时会优先触发失败策略'),
  DEPENDENCY_TIP: () =>
    intl
      .get('horc.orchestration.modal.orchestration.condition.dependency.tip')
      .d(
        '前置节点运行结果作为条件，未维护条件则判定失败。前置节点为多个时，未运行的节点，其运行结果默认失败。前置节点包含异步节点时，将忽略异步节点'
      ),
  CONDITION_RESULT_TIP: () =>
    intl
      .get('horc.orchestration.modal.orchestration.condition.result.tip')
      .d('通过执行结果决定运行哪些节点,不指定则成功继续，失败终止'),
  CONDITION_SUCCESS_NODE_TIP: () =>
    intl
      .get('horc.orchestration.modal.orchestration.condition.success.tip')
      .d('执行结果为成功时运行的节点'),
  CONDITION_FAILED_NODE_TIP: () =>
    intl
      .get('horc.orchestration.modal.orchestration.condition.failed.tip')
      .d('执行结果为失败时运行的节点'),

  TYPE: () => intl.get('horc.orchestration.model.common.type').d('类型'),
  NODES: () => intl.get('horc.orchestration.modal.orchestration.condition.type').d('节点集合'),
  EXPRESSION: () =>
    intl.get('horc.orchestration.modal.orchestration.condition.expression').d('表达式'),

  ADD: () => intl.get('horc.orchestration.modal.orchestration.condition.add').d('添加网关'),
};

export default Langs;
