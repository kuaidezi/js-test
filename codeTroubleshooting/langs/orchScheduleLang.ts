/**
 * 定时节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-8-4
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  EMPTY_DATA: () => intl.get('hzero.common.components.noticeIcon.null').d('暂无数据'),

  SCHEDULE_INFO: () =>
    intl.get('horc.orchestration.schedule.view.title.scheduleInfo').d('调度信息'),
  SUB_ORCH_INFO: () =>
    intl.get('horc.orchestration.schedule.view.title.subOrchInfo').d('子编排信息'),

  SUB_ORCH: () => intl.get('horc.orchestration.schedule.model.subOrch').d('子编排'),
  VERSION: () => intl.get('horc.orchestration.schedule.model.version').d('版本'),
  SCHEDULE_TYPE: () => intl.get('horc.orchestration.schedule.type').d('定时类型'),
  SCHEDULE_TIME: () => intl.get('horc.orchestration.schedule.time').d('定时时间'),
};

export default Langs;
