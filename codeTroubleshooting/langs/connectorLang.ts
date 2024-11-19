/**
 * 连接器-多语言
 * @author baitao.huang@hand-china.com
 * @date 2022-9-1
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.connector',
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  STATUS: () => intl.get('hzero.common.status').d('状态'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  CANCEL: () => intl.get('hzero.common.button.cancel').d('取消'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  ONLINE: () => intl.get('hzero.common.button.online').d('上线'),
  IMPORT: () => intl.get('hzero.common.button.import').d('导入'),
  EXPORT: () => intl.get('hzero.common.button.export').d('导出'),

  DETAIL: () => intl.get('hzero.common.model.detail').d('详情'),
  DESCRIPTION: () => intl.get('hzero.common.model.description').d('描述'),
  BELONG_TENANT: () => intl.get('hzero.common.model.common.belongTenant').d('所属租户'),
  ENABLE_FLAG: () => intl.get('hzero.common.model.common.enableFlag').d('是否启用'),

  PATTERN_CODE: () =>
    intl
      .get('hzero.common.validation.code')
      .d('大小写及数字，必须以字母、数字开头，可包含“-”、“_”、“.”、“/”'),

  PATTERN_CODE_REGULAR: () =>
    intl
      .get('hzero.connector.validation.patternCodeRegular')
      .d('大小写及数字，必须以字母、数字、下划线开头，可包含“-”、“_”、“.”、“/”'),

  PATTERN_REGULAR: () => intl.get('horc.connector.validation.regular').d('请输入正确的正则表达式'),

  CONNECTOR: () => intl.get('horc.connector.view.title.connector').d('生态连接器'),
  CONNECTOR_DETAIL: () => intl.get('horc.connector.view.title.connectorDetail').d('生态连接器详情'),
  BASIC_INFO: () => intl.get('horc.connector.view.title.basicInfo').d('基础信息'),
  OPERATION_LIST: () => intl.get('horc.connector.view.title.operationList').d('操作列表'),
  CONNECTOR_DOCUMENT: () => intl.get('horc.connector.view.title.connectorDocument').d('连接器文档'),
  CONNECT_CONFIG: () => intl.get('horc.connector.view.title.connectConfig').d('连接配置'),
  CONNECT_CONFIG_TIP: () =>
    intl.get('horc.connector.view.title.connectConfigTip').d('连接器发布后，才能编辑连接配置信息'),
  CONNECTOR_CONFIG: () => intl.get('horc.connector.view.title.connectorConfig').d('连接器配置'),
  CONNECTOR_OPERATION: () =>
    intl.get('horc.connector.view.title.connectorOperation').d('连接器操作'),
  CONNECTOR_ATTR: () => intl.get('horc.connector.view.title.connectorAttr').d('连接器属性'),
  OPERATION_PARAM: () => intl.get('horc.connector.view.title.operationParam').d('操作参数'),
  CONFIG_INFO: () => intl.get('horc.connector.view.title.configInfo').d('配置信息'),
  CONNECTOR_OPERATION_DEFINE: () =>
    intl.get('horc.connector.view.title.connectorOperationDefine').d('生态连接器操作流程定义'),

  DELETE_CONFIRM: () => intl.get('horc.connector.view.title.deleteConfirm').d('确认删除吗'),
  RELEASE_CONFIRM: () => intl.get('horc.connector.view.title.releaseConfirm').d('确定发布吗'),
  OFFLINE_CONFIRM: () => intl.get('horc.connector.view.title.offlineConfirm').d('确定下线吗'),
  BATCH_RELEASE_CONFIRM: () =>
    intl.get('horc.connector.view.title.batchReleaseConfirm').d('确定批量发布选中连接器吗'),

  HISTORY_VERSION: () => intl.get('horc.connector.view.title.historyVersion').d('历史版本'),

  EDIT_FLOW: () => intl.get('horc.connector.view.button.editFlow').d('编辑流程'),
  VIEW_FLOW: () => intl.get('horc.connector.view.button.viewFlow').d('查看流程'),
  DUPLICATE: () => intl.get('horc.connector.view.button.duplicate').d('克隆'),
  RELEASE: () => intl.get('horc.connector.view.button.release').d('发布'),
  ROLLBACK: () => intl.get('horc.connector.view.button.rollback').d('版本回退'),
  JSON_IMPORT: () => intl.get('horc.connector.view.button.jsonImport').d('Json导入'),
  JSON_EXPORT: () => intl.get('horc.connector.view.button.jsonExport').d('Json导出'),
  EXCEL_IMPORT: () => intl.get('horc.connector.view.button.excelImport').d('Excel导入'),
  EXCEL_EXPORT: () => intl.get('horc.connector.view.button.excelExport').d('Excel导出'),
  ADD_GROUP: () => intl.get('horc.connector.view.button.addGroup').d('新增分组'),
  EXPAND_ALL: () => intl.get('horc.connector.view.button.Allexpand').d('全部展开'),
  CONTRACT_ALL: () => intl.get('horc.connector.view.button.Allcontract').d('全部收起'),
  NEW_SUBGROUP: () => intl.get('horc.connector.view.button.NewSubgroup').d('新建子分组'),

  BELONG_COMPANY: () => intl.get('horc.connector.model.connector.belongCompany').d('所属公司'),
  BELONG_PRODUCT: () => intl.get('horc.connector.model.connector.belongProduct').d('所属产品'),
  CONNECTOR_NAME: () => intl.get('horc.connector.model.connector.connectorName').d('连接器名称'),
  CONNECTOR_CODE: () => intl.get('horc.connector.model.connector.connectorCode').d('连接器编码'),
  CONNECTOR_TYPE: () => intl.get('horc.connector.model.connector.connectorType').d('连接器类型'),
  HELP_DOCUMENT: () => intl.get('horc.connector.model.connector.helpDocument').d('帮助文档'),
  OFFICIAL_WEBSITE: () => intl.get('horc.connector.model.connector.officialWebSite').d('应用官网'),
  INTERFACE_DOCUMENT: () =>
    intl.get('horc.connector.model.connector.interfaceDocument').d('接口文档'),
  ICON: () => intl.get('horc.connector.model.connector.icon').d('图标'),
  CURRENT_VERSION: () => intl.get('horc.connector.model.connector.currentVersion').d('当前版本'),
  MODIFYING: () => intl.get('horc.connector.model.connector.modifying').d('编辑中'),
  TRADE: () => intl.get('horc.connector.model.connector.trade').d('行业'),
  SCENE: () => intl.get('horc.connector.model.connector.scene').d('场景'),
  PRIMARY_COLOR: () => intl.get('horc.connector.model.connector.primaryColor').d('主颜色编码'),

  OPERATION_NAME: () => intl.get('horc.connector.model.connector.operationName').d('操作名称'),
  OPERATION_CODE: () => intl.get('horc.connector.model.connector.operationCode').d('操作编码'),
  PRIVATE_FLAG: () => intl.get('horc.connector.model.connector.privateFlag').d('是否私有'),
  RESPONSE_RESULT: () => intl.get('horc.connector.model.connector.responseResult').d('响应结果'),
  RECORD_INSTANCE_FLAG: () =>
    intl.get('horc.connector.model.connector.recordInstanceFlag').d('记录实例详情'),
  RECORD_INSTANCE_FLAG_TIP: () =>
    intl
      .get('horc.connector.model.connector.recordInstanceFlagTip')
      .d('配置启用：记录当前操作对应流程中节点执行完成后生成的任务实例及任务结果'),
  BELONG_GROUP: () => intl.get('horc.connector.model.connector.belongGroup').d('所属分组'),
  GROUP_NAME: () => intl.get('horc.connector.view.title.groupName').d('分组名称'),
  ORDER_SEQ: () => intl.get('horc.connector.view.title.orderSeq').d('排序号'),
  ENABLED_FLAG: () => intl.get('horc.connector.view.title.enabledFlag').d('是否启用'),
  PARENT_GROUP_NAME: () => intl.get('horc.connector.view.title.parentGroupName').d('父分组名称'),
  PARAM_CODE: () => intl.get('horc.connector.model.connector.paramCode').d('参数编码'),
  PARAM_NAME: () => intl.get('horc.connector.model.connector.paramName').d('参数名称'),
  PARAM_TYPE: () => intl.get('horc.connector.model.connector.paramType').d('参数类型'),
  ORDER_NUM: () => intl.get('horc.connector.model.connector.orderNum').d('排序号'),
  DEFAULT_VALUE: () => intl.get('horc.connector.model.connector.defaultValue').d('默认值'),
  CONSTRAINT_VALUE: () => intl.get('horc.connector.model.connector.constraintValue').d('约束值'),
  PARAM_DESC: () => intl.get('horc.connector.model.connector.paramDesc').d('参数说明'),
  LOV_CODE: () => intl.get('horc.connector.model.connector.lovCode').d('值集/视图编码'),
  REQUIRED_FLAG: () => intl.get('horc.connector.model.connector.requiredFlag').d('是否必输'),
  SOURCE_TYPE: () => intl.get('horc.connector.model.connector.sourceType').d('来源类型'),
  NEW_OPERATION: () => intl.get('horc.connector.model.connector.NewOperation').d('新建操作'),

  CONNECT_CONFIG_NAME: () =>
    intl.get('horc.connector.model.connector.connectConfigName').d('连接配置名称'),
  CONNECT_CONFIG_CODE: () =>
    intl.get('horc.connector.model.connector.connectConfigCode').d('连接配置编码'),

  SAVE_VALIDATE: () =>
    intl.get('horc.connector.model.connector.saveValidate').d('请先完善必输内容'),
  CHANGE_TAB_TIP: () =>
    intl.get('horc.connector.model.connector.changeTabTip').d('当前页面信息尚未保存'),
  CAN_UPGRADE_TIP: () =>
    intl
      .get('horc.connector.model.connector.canUpgradeTip')
      .d('该操作中编辑流程画布关联的其他操作版本可升级。'),
  PARAM_CODE_TIP: () =>
    intl.get('horc.connector.model.connector.paramCodeTip').d('请确保参数编码唯一'),

  BATCH_DISABLE: () => intl.get('horc.connector.model.connector.batchDisable').d('批量禁用'),
  BATCH_ENABLE: () => intl.get('horc.connector.model.connector.batchEnable').d('批量启用'),
  BATCH_RELEASE: () => intl.get('horc.connector.model.connector.batchRelease').d('批量发布'),
  BATCH_OPERATION: () => intl.get('horc.connector.model.connector.batchOperation').d('批量操作'),
  PERSONAL_CENTER_MAINTENANCE: () =>
    intl.get('horc.connector.message.personalCenterMaintenance').d('个人认证配置'),
  PERSONAL_CENTER_MAINTENANCE_TIP: () =>
    intl
      .get('horc.connector.message.personalCenterMaintenanceTip')
      .d(
        ' 若开启个人认证配置，则连接器属性中启用了个人配置的属性字段支持在个人中心维护，连接配置处可使用#[personal[xxx]]获取用户个人的认证信息'
      ),
  IS_PERSONAL_CONFIGURATION: () =>
    intl.get('horc.connector.message.isPersonalConfiguration').d('是否个人配置'),
  DEFAULT_IDENTIFICATION: () =>
    intl.get('horc.connector.message.defaultIdentification').d('默认标识'),
  PLATFORM_USER: () => intl.get('horc.connector.message.platformUser').d('平台用户'),
  PERSONAL_AUTHENTICATION_CONFIGURATION: () =>
    intl.get('horc.connector.message.personalAuthenticationC').d('个人认证配置'),
  PERSONAL_CONFIGURATION: () =>
    intl.get('horc.connector.message.personalConfiguration').d('个人配置'),
  ASSOCIATION_AUTHENTICATION_SYSTEM: () =>
    intl.get('horc.connector.view.associationAuthenticationSystem').d('关联集成系统'),
  ASSOCIATION_AUTHENTICATION_FIELD: () =>
    intl.get('horc.connector.view.associationAuthenticationField').d('关联认证字段'),
  ASSOCIATION_AUTHENTICATION_SYSTEM_TIP: () =>
    intl
      .get('horc.connector.view.associationAuthenticationFieldTip')
      .d(
        '若选择关联集成系统，用户个人中心仅能绑定该系统的账号信息，连接器的个人认证信息通过连接器属性列表中的关联认证字段获取'
      ),
};

export default Langs;
