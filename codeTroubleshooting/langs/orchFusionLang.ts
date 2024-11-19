/**
 * 融合节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-20
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  FUSION_TITLE: () => intl.get('horc.orchestration.model.fusion.fusionTitle').d('子编排维护'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.model.fusion.subDefinition').d('子编排'),
  VERSION: () => intl.get('horc.orchestration.foreach.model.version').d('版本'),
};

export default Langs;
