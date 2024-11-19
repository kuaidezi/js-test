/**
 * 编排分类-多语言
 * @author weikang.lin@hand-china.com
 * @date 2020-11-09
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.pluginMenu',
  CUSTOM: () => intl.get('hzero.common.custom').d('自定义'),
  PREDEFINED: () => intl.get('hzero.common.predefined').d('预定义'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  OPTION: () => intl.get('hzero.common.button.action').d('操作'),
  EXPAND_ALL: () => intl.get('hzero.common.button.expandAll').d('全部展开'),
  COLLAPSE_ALL: () => intl.get('hzero.common.button.collapseAll').d('全部收起'),
  IMPORT: () => intl.get('hzero.common.button.import').d('导入'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),

  CREATE_MENU: () => intl.get('horc.pluginMenu.view.button.createMenu').d('新建节点分类'),

  CODE_UPPER: () =>
    intl
      .get('horc.pluginMenu.validation.codeUpper')
      .d('全大写及数字，必须以字母、数字开头，可包含“_”'),

  PLUGIN_MENU: () => intl.get('horc.pluginMenu.view.title.pluginMenu').d('编排分类'),
  EDIT_DIR: () => intl.get('horc.pluginMenu.view.title.editDir').d('编辑编排分类'),
  EDIT_MENU: () => intl.get('horc.pluginMenu.view.title.editMenu').d('编辑节点分类'),
  CREATE_DIR: () => intl.get('horc.pluginMenu.view.title.createDir').d('新建编排分类'),
  ADD_TAG: () => intl.get('horc.pluginMenu.view.title.addTag').d('添加标签'),
  SOURCE_TYPE: () => intl.get('horc.pluginMenu.model.pluginMenu.sourceType').d('来源类型'),
  NAME: () => intl.get('horc.pluginMenu.model.pluginMenu.name').d('分类名称'),
  CODE: () => intl.get('horc.pluginMenu.model.pluginMenu.code').d('分类编码'),
  DIR_NAME: () => intl.get('horc.pluginMenu.model.pluginMenu.dirName').d('编排分类名称'),
  DIR_CODE: () => intl.get('horc.pluginMenu.model.pluginMenu.dirCode').d('编排分类编码'),
  MENU_NAME: () => intl.get('horc.pluginMenu.model.pluginMenu.menuName').d('节点分类名称'),
  MENU_CODE: () => intl.get('horc.pluginMenu.model.pluginMenu.menuCode').d('节点分类编码'),
  ORDER_SEQ: () => intl.get('horc.pluginMenu.model.pluginMenu.orderSeq').d('顺序号'),
  TENANT: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  STATUS: () => intl.get('horc.pluginMenu.status').d('状态'),
  MENU_TYPE: () => intl.get('horc.pluginMenu.model.pluginMenu.menuType').d('分类类型'),
  ICON: () => intl.get('horc.pluginMenu.model.pluginMenu.icon').d('图标'),
  LOGO_TEXT: () => intl.get('horc.pluginMenu.model.pluginMenu.logoText').d('logo文本'),
  PRIMARY_COLOR_CODE: () =>
    intl.get('horc.pluginMenu.model.pluginMenu.primaryColorCode').d('图标颜色编码'),
  FILL_COLOR_CODE: () =>
    intl.get('horc.pluginMenu.model.pluginMenu.fillColorCode').d('填充颜色编码'),
  DYNAMIC_FORM: () => intl.get('horc.pluginMenu.model.pluginMenu.dynamicForm').d('动态表单'),
  PARENT_DIR: () => intl.get('horc.pluginMenu.model.pluginMenu.parentDir').d('所属分类'),
  BLOCK_FLAG: () => intl.get('horc.pluginMenu.model.pluginMenu.blockFlag').d('阻塞标识'),
  REMARK: () => intl.get('horc.pluginMenu.model.pluginMenu.remark').d('描述'),
  IS_VIRTUAL_NODE: () =>
    intl.get('horc.pluginMenu.model.pluginMenu.isVirtualNode').d('是否虚拟节点'),

  DISABLE_CONFIRM: () => intl.get('horc.pluginMenu.view.message.disableConfirm').d('是否禁用？'),
  ENABLE_CONFIRM: () => intl.get('horc.pluginMenu.view.message.enableConfirm').d('是否启用？'),
  VALIDATE: () => intl.get('horc.pluginMenu.view.message.validate').d('请先完善必输内容'),
  SUCCESS: () => intl.get('horc.pluginMenu.view.message.success').d('操作成功！'),
  MENU_CODE_MSG: () =>
    intl
      .get('horc.pluginMenu.view.message.menuCodeMsg')
      .d('分类编码，全局唯一，由大写英文，数字和下划线组成。'),
  ORCH_TYPE: () => intl.get('horc.pluginMenu.view.message.orchType').d('编排类型'),
};

export default Langs;
