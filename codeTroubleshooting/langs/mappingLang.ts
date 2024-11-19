/**
 * 编排映射-多语言
 * @author baitao.huang@hand-china.com
 * @date 2021-6-29
 * @version: 0.0.1
 * @copyright: Copyright (c) 2021, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.mapping',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),

  HEADER: () => intl.get('horc.mapping.view.title.header').d('编排映射'),
  DETAIL: () => intl.get('horc.mapping.view.title.detail').d('编排映射明细'),
  BASIC_INFO: () => intl.get('horc.mapping.view.title.basicInfo').d('基本信息'),
  MAPPING_TARGET: () => intl.get('horc.mapping.view.title.mappingTarget').d('映射目标'),
  MAPPING_CONFIG: () => intl.get('horc.mapping.view.title.mappingConfig').d('条件配置'),

  TENANT: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  MAPPING_SETTING: () => intl.get('horc.mapping.view.button.mappingSetting').d('配置映射'),
  MAPPING_CODE: () => intl.get('horc.mapping.model.mapping.mappingCode').d('映射编码'),
  MAPPING_NAME: () => intl.get('horc.mapping.model.mapping.mappinghName').d('映射名称'),
  ORCH_NAME: () => intl.get('horc.mapping.model.mapping.orchName').d('编排名称'),
  ORCH_CODE: () => intl.get('horc.mapping.model.mapping.orchCode').d('编排编码'),
  ENABLED_FLAG: () => intl.get('horc.mapping.model.mapping.enabledFlag').d('是否启用'),
  REMARK: () => intl.get('horc.mapping.model.mapping.remark').d('描述'),
  MAPPING_ORCH: () => intl.get('horc.mapping.model.mapping.mappingOrch').d('映射编排'),
  ORCH_VERSION: () => intl.get('horc.mapping.model.mapping.orchVersion').d('编排版本'),
  ORCH_VERSION_TIP: () =>
    intl
      .get('horc.mapping.model.mapping.orchVersionTip')
      .d('编排版本号；Latest version表示只对该编排的最新版本有效。'),

  SAVE_VALIDATE: () => intl.get('horc.mapping.model.mapping.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.mapping.model.preposedMachine.saveEmpty').d('无修改内容,无需保存'),

  COVER_CONFITION_CONFIRM: () =>
    intl
      .get('horc.mapping.model.confirm.coverCondition')
      .d('该版本的编排定义存在全局参数，是否覆盖现有的条件配置？'),
};

export default Langs;
