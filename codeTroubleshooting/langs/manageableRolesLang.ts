/**
 * 编排分类授权-多语言
 * @author weikang.lin@hand-china.com
 * @date 2020-11-09
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.manageableRoles',
  BASIC_INFORMATION: () => intl.get('horc.manageableRoles.view.title.baseInfo').d('基本信息'),
  ASSIGN_PERMISSIONS: () =>
    intl.get('horc.manageableRoles.view.button.assignPermissions').d('分配权限'),
  ASSIGN_PERMISSIONS_FOR: () =>
    intl.get('horc.manageableRoles.view.title.assignPermissionsFor').d('分配权限给'),
  MANAGEABLE_ROLES: () =>
    intl.get('horc.manageableRoles.view.title.manageableRoles').d('编排分类授权'),
  CURRENT_ROLE: () => intl.get('horc.manageableRoles.view.title.currentRole').d('当前角色'),
  CURRENT_ROLE_TIP: () =>
    intl
      .get('horc.manageableRoles.view.title.currentRoleTip')
      .d('可模拟切换至当前角色进行角色管理'),
  COPY_CONFIRM: () =>
    intl
      .get('horc.manageableRoles.view.button.copyConfirm')
      .d('将弹窗列表选择的角色的权限复制给勾选角色'),
  MENU_NAME: () => intl.get('horc.manageableRoles.model.manageableRoles.menuName').d('权限名称'),
  MENU_TYPE: () => intl.get('horc.manageableRoles.model.manageableRoles.menuType').d('权限类型'),
  STATUS: () => intl.get('horc.manageableRoles.model.manageableRoles.status').d('授权'),
  NAME: () => intl.get('hzero.common.model.common.roleName').d('角色名称'),
  CODE: () => intl.get('horc.manageableRoles.model.manageableRoles.code').d('角色编码'),
  LEVEL: () => intl.get('horc.manageableRoles.model.manageableRoles.level').d('角色层级'),
  PARENT_ROLE_NAME: () =>
    intl.get('horc.manageableRoles.model.manageableRoles.parentRoleName').d('上级角色'),
  ROLE_SOURCE: () =>
    intl.get('horc.manageableRoles.model.manageableRoles.roleSource').d('角色来源'),
  TENANT_NAME: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  INHERITED_ROLE_NAME: () =>
    intl.get('horc.manageableRoles.model.manageableRoles.inheritedRoleName').d('继承自'),
  ENABLED: () => intl.get('horc.manageableRoles.status').d('状态'),
  LEVEL_PATH: () => intl.get('horc.manageableRoles.model.manageableRoles.levelPath').d('角色路径'),
  COPY_AUTH: () => intl.get('horc.manageableRoles.view.button.copyAuth').d('复制授权'),
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  OPTION: () => intl.get('hzero.common.button.action').d('操作'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  SELECT_ALL: () => intl.get('horc.manageableRoles.view.button.selectAll').d('全选授权'),
  CANCEL_SELECT_ALL: () =>
    intl.get('horc.manageableRoles.view.button.cancelSelectAll').d('取消全选'),
  HAS_AUTH_TIP: () =>
    intl
      .get('horc.manageableRoles.view.title.hasAuthTip')
      .d('当前角色已具备编排分类权限，无需授权。'),
};

export default Langs;
