/**
 * 依赖节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-12-15
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  DEPANDENT: () => intl.get('horc.orchestration.model.dependent.dependent').d('依赖条件'),
  ALL: () => intl.get('horc.orchestration.model.dependent.all').d('所有'),
};

export default Langs;
