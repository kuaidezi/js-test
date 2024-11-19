/**
 * 子流程-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-8
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  FUSION_TITLE: () => intl.get('horc.orchestration.model.subProcess.fusionTitle').d('子编排维护'),
  SUB_DEFINITION: () => intl.get('horc.orchestration.model.subProcess.subDefinition').d('子编排'),
  VERSION: () => intl.get('horc.orchestration.subProcess.model.version').d('版本'),
};

export default Langs;
