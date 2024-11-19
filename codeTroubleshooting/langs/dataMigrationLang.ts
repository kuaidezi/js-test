/**
 * 数据迁移-多语言
 * @author baitao.huang@hand-china.com
 * @date 2024-08-13
 * @version: 0.0.1
 * @copyright: Copyright (c) 2024, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.dataMigration',

  IMPORT_DATA: () => intl.get('horc.dataMigration.view.button.importData').d('导入数据'),
  EXPORT_DATA: () => intl.get('horc.dataMigration.view.button.exportData').d('导出数据'),
  IMPORT_HISTORY: () => intl.get('horc.dataMigration.view.button.importHistory').d('导入历史'),
  ADD_DATA: () => intl.get('horc.dataMigration.view.button.addData').d('添加数据'),
  DATA_MAPPING: () => intl.get('horc.dataMigration.view.button.dataMapping').d('数据映射'),
  NEXT_STEP: () => intl.get('horc.dataMigration.view.button.nextStep').d('下一步'),
  PREV_STEP: () => intl.get('horc.dataMigration.view.button.prevStep').d('上一步'),

  EXPORT_MIGRATION_DATA: () =>
    intl.get('horc.dataMigration.view.title.exportMigrationData').d('导出迁移数据'),

  FILTER_CONDITION: () => intl.get('horc.dataMigration.view.title.filterCondition').d('筛选条件'),

  SERVICE_REGISTER: () => intl.get('horc.dataMigration.view.title.serviceRegister').d('服务注册'),
  ORCH_DEFINITION: () => intl.get('horc.dataMigration.view.title.orchDefinition').d('编排定义'),

  MIGRATION_MODULE_TYPE: () =>
    intl.get('horc.dataMigration.model.dataMigration.migrationModuleType').d('迁移功能类型'),
  TENANT: () => intl.get('horc.dataMigration.model.dataMigration.tenant').d('租户'),
  SERVICE_FILTER_DESC: () =>
    intl
      .get('horc.dataMigration.model.dataMigration.serviceFilterDesc')
      .d(
        '将导出满足筛选条件下的服务注册数据，以及服务注册依赖的基础数据，包括领域、服务提供方等。'
      ),
  ORCH_FILTER_DESC: () =>
    intl
      .get('horc.dataMigration.model.dataMigration.orchFilterDesc')
      .d('将导出满足筛选条件下的编排定义数据，以及编排定义依赖的基础数据，包括领域等。'),
  MIGRATION_POST_DATA: () =>
    intl.get('horc.dataMigration.model.dataMigration.migrationPostData').d('迁移后置数据'),
  MIGRATION_POST_DATA_DESC: () =>
    intl
      .get('horc.dataMigration.model.dataMigration.migrationPostDataDesc')
      .d('将导出业务数据关联的后置数据。'),

  UPLOAD_FILE_TIP_1: () =>
    intl
      .get('horc.dataMigration.model.dataMigration.uploadFileTip1')
      .d('点击或将文件拖拽到这里上传'),
  UPLOAD_FILE_TIP_2: () =>
    intl.get('horc.dataMigration.model.dataMigration.uploadFileTip2').d('仅支持文件格式 .zip'),

  BASIC_MAPPING: () => intl.get('horc.dataMigration.view.title.basicMapping').d('基础映射'),
  RESOURCE_MAPPING: () => intl.get('horc.dataMigration.view.title.resourceMapping').d('资源映射'),

  SOURCE: () => intl.get('horc.dataMigration.model.dataMigration.source').d('来源'),
  TARGET: () => intl.get('horc.dataMigration.model.dataMigration.target').d('目标'),

  IS_MAPPING: () => intl.get('horc.dataMigration.model.dataMigration.isMapping').d('是否映射'),
  DOMAIN: () => intl.get('horc.dataMigration.model.dataMigration.domain').d('服务领域'),
  SYSTEM: () => intl.get('horc.dataMigration.model.dataMigration.system').d('服务提供方'),

  SYSTEM_NAME: () =>
    intl.get('horc.dataMigration.model.dataMigration.systemName').d('服务提供方名称'),
  DOMAIN_NAME: () => intl.get('horc.dataMigration.model.dataMigration.domainName').d('领域名称'),

  ADDRESS: () => intl.get('horc.dataMigration.model.dataMigration.address').d('服务地址'),
  SERVER_AUTH: () => intl.get('horc.dataMigration.model.dataMigration.serverAuth').d('服务认证'),
  BUSINESS_OBJECT: () =>
    intl.get('horc.dataMigration.model.dataMigration.businessObject').d('业务对象'),

  HTTP_RESOURCE: () =>
    intl.get('horc.dataMigration.model.dataMigration.httpResource').d('HTTP资源'),
  AUTH_RESOURCE: () => intl.get('horc.dataMigration.model.dataMigration.httpResource').d('认证'),
  DATASOURCE_RESOURCE: () =>
    intl.get('horc.dataMigration.model.dataMigration.dataSourceResource').d('数据源'),
  FTP_RESOURCE: () => intl.get('horc.dataMigration.model.dataMigration.ftpResource').d('(S)FTP源'),
  EVENT_RESOURCE: () => intl.get('horc.dataMigration.model.dataMigration.eventResource').d('事件'),

  SERVER_NAME: () => intl.get('horc.dataMigration.model.dataMigration.serverName').d('服务名称'),
  SERVER_CODE: () => intl.get('horc.dataMigration.model.dataMigration.serverCode').d('服务代码'),
  INTERFACE_NAME: () =>
    intl.get('horc.dataMigration.model.dataMigration.interfaceName').d('接口名称'),
  INTERFACE_CODE: () =>
    intl.get('horc.dataMigration.model.dataMigration.interfaceCode').d('接口编码'),
  UPDATE_POLICY: () =>
    intl.get('horc.dataMigration.model.dataMigration.updatePolicy').d('更新策略'),

  IMPORT_TIP_1: () =>
    intl
      .get('horc.dataMigration.view.title.importTip1')
      .d('若数据量较多导入将花费较久时间，可点击【导入历史】查询导入的状态。'),
  IMPORT_TIP_2: () => intl.get('horc.dataMigration.view.title.importTip2').d('注意：'),
  IMPORT_TIP_3: () =>
    intl
      .get('horc.dataMigration.view.title.importTip3')
      .d('1、请确认数据迁移文件类型与所选目标类型一致，否则将不能成功导入；'),
  IMPORT_TIP_4: () =>
    intl
      .get('horc.dataMigration.view.title.importTip4')
      .d(
        '2、初始环境的原配置数据更新后并再次迁移，在新环境将覆盖并更新配置数据，不会创建新的数据，请谨慎操作。'
      ),

  DATA_MIGRATION_STEP: () =>
    intl.get('horc.dataMigration.view.title.dataMigrationStep').d('数据迁移步骤'),
  STEP1_TITLE: () =>
    intl.get('horc.dataMigration.view.title.step1Title').d('1、导出【数据迁移文件】'),
  STEP1_DESC: () =>
    intl
      .get('horc.dataMigration.view.title.step1Desc')
      .d(
        '来源环境选择业务数据，将自动关联前置依赖数据，设置关联的后置衍生数据，点击导出，保存数据迁移文件。'
      ),
  STEP2_TITLE: () =>
    intl.get('horc.dataMigration.view.title.step2Title').d('2、导入【数据迁移文件】'),
  STEP2_DESC: () =>
    intl
      .get('horc.dataMigration.view.title.step2Desc')
      .d('目标环境上传数据迁移文件，设置更新数据以及更新策略，程序开始进行校验。'),
  STEP3_TITLE: () => intl.get('horc.dataMigration.view.title.step3Title').d('3、校验通过/失败'),
  STEP3_DESC: () =>
    intl
      .get('horc.dataMigration.view.title.step3Desc')
      .d('校验通过，根据更新策略更新数据；校验失败，请根据报错提示操作。'),

  DATA_MIGRATION_DESC: () =>
    intl
      .get('horc.dataMigration.view.title.dataMigrationDesc')
      .d('请点击下方的 导入数据 或者 导出数据 按钮，开始数据迁移操作吧！'),

  NO_DATA: () =>
    intl.get('horc.dataMigration.view.message.noData').d('暂无数据，将导出已选租户下所有数据。'),

  NO_DATA_TENANT: () =>
    intl
      .get('horc.dataMigration.view.message.noDataTenant')
      .d('暂无数据，将导出当前租户下所有数据。'),

  EXPORT_CONFIRM_TITLE: () =>
    intl.get('horc.dataMigration.view.message.exportConfirmTitle').d('确定导出所有数据'),
  EXPORT_CONFIRM_CONTENT: () =>
    intl
      .get('horc.dataMigration.view.message.exportConfirmContent')
      .d('未添加待迁移功能数据，将导出已选租户下所有数据'),
};

export default Langs;
