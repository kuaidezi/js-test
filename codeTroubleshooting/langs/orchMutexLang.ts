/**
 * 互斥节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2022-11-14
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  BASIC_INFO: () => intl.get('horc.orchestration.mutex.view.baseInfo').d('基本信息'),

  LOCK_KEY: () => intl.get('horc.orchestration.mutex.model.lockKey').d('互斥键'),
  WAIT_TIME: () => intl.get('horc.orchestration.mutex.model.waitTime').d('等待时间(s)'),
  LEASE_TIME: () => intl.get('horc.orchestration.mutex.model.leaseTime').d('超时时间(s)'),
};

export default Langs;
