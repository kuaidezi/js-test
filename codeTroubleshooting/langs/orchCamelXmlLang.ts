/**
 * camel-xml-多语言
 * @author baitao.huang@hand-china.com
 * @date 2024-7-19
 * @version: 0.0.1
 * @copyright: Copyright (c) 2024, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CONFIG_INFO: () => intl.get('horc.orchestration.model.camelXml.configInfo').d('配置信息'),
  CAMELXML_EXPRESSION: () => intl.get('horc.orchestration.model.camelXml.expression').d('xml片段'),
  CAMELXML_EXPRESSION_TIP: () =>
    intl
      .get('horc.orchestration.model.camelXml.expressionTip')
      .d(
        '此xml片段将按照编排定义流程图的顺序拼接在整个Camel路由定义的xml中，以此实现Camel路由逻辑的自定义扩展'
      ),
};

export default Langs;
