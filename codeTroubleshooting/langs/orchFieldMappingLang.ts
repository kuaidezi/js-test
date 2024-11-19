/**
 * 字段映射-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-7-8
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  SAVE: () => intl.get('hzero.common.button.save').d('保存'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  VIEW: () => intl.get('hzero.common.button.view').d('查看'),
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  SURE: () => intl.get('hzero.common.button.ok').d('确定'),
  CLOSE: () => intl.get('hzero.common.button.close').d('关闭'),
  EXECUTE: () => intl.get('horc.fieldMapping.view.button.exec').d('执行'),
  VIEW_HISTORY: () => intl.get('horc.fieldMapping.view.button.viewHistory').d('查看历史版本'),
  REVERT: () => intl.get('horc.fieldMapping.view.button.revert').d('版本回退至'),
  RELEASE: () => intl.get('horc.fieldMapping.view.button.release').d('发布'),
  OFFLINE: () => intl.get('horc.fieldMapping.view.button.offline').d('下线'),
  SAME_NAME_REL: () => intl.get('horc.fieldMapping.view.button.sameNameRel').d('同名关联'),
  SAME_LINE_REL: () => intl.get('horc.fieldMapping.view.button.sameLineRel').d('同行关联'),
  CANCEL_REL: () => intl.get('horc.fieldMapping.view.button.cancelRel').d('取消关联'),
  IMPORT_JSON: () => intl.get('horc.fieldMapping.view.button.importJSON').d('导入JSON文件'),

  HEADER: () => intl.get('horc.fieldMapping.view.title.header').d('字段映射'),
  DETAIL: () => intl.get('horc.fieldMapping.view.title.detail').d('字段映射明细'),
  BASIC_INFO: () => intl.get('horc.fieldMapping.view.baseInfo').d('基本信息'),
  DETAIL_INFO: () => intl.get('horc.fieldMapping.view.title.detailInfo').d('字段映射维护'),
  VERSION_HISTORY: () => intl.get('horc.fieldMapping.view.title.versionHistory').d('历史版本'),
  STATUS: () => intl.get('horc.fieldMapping.status').d('状态'),

  SEQ_NUMBER: () => intl.get('horc.fieldMapping.view.serialNumber').d('序号'),
  TRANSFORM_CODE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.transformCode').d('字段映射代码'),
  TRANSFORM_NAME: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.transformName').d('字段映射名称'),
  TRANSFORM_TYPE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.transformType').d('字段映射类型'),
  VERSION: () => intl.get('horc.fieldMapping.model.fieldMapping.version').d('版本'),
  FROM_VERSION: () => intl.get('horc.fieldMapping.model.fieldMapping.fromVersion').d('来源版本'),
  TRANSFORM_SCRIPT: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.transformScript').d('映射转化脚本'),
  SOURCE_STRUCTURE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.sourceStructure').d('映射来源结构'),
  TARGET_STRUCTURE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.targetStructure').d('映射目标结构'),

  SOURCE_TITLE: () => intl.get('horc.fieldMapping.model.fieldMapping.sourceTitle').d('来源结构'),
  SOURCE_TITLE_TIP: () =>
    intl
      .get('horc.fieldMapping.model.fieldMapping.sourceTitle.tip')
      .d(
        '来源结构，设定来源数据结构，通过JSON结构体表达数据结构。通过与目标结构连线构造出DW脚本，可实现JSON与JSON、XML与XML、JSON与XML之间的互相转换。'
      ),
  TARGET_TITLE: () => intl.get('horc.fieldMapping.model.fieldMapping.targetTitle').d('目标结构'),
  TARGET_TITLE_TIP: () =>
    intl
      .get('horc.fieldMapping.model.fieldMapping.targetTitle.tip')
      .d(
        '来源结构，设定目标数据结构，通过JSON结构体表达数据结构。通过与来源结构连线构造出DW脚本，可实现JSON与JSON、XML与XML、JSON与XML之间的互相转换。'
      ),
  ALL_TITLE: () => intl.get('horc.fieldMapping.model.fieldMapping.allTitle').d('来源及目标结构'),
  FIELD_DATA: () => intl.get('horc.fieldMapping.view.modal.fieldData').d('字段数据'),

  DEBUG: () => intl.get('horc.fieldMapping.button.debug').d('调试'),
  DEBUG_LOG: () => intl.get('horc.fieldMapping.button.debugLog').d('调试日志'),
  RESULT_DATA: () => intl.get('horc.fieldMapping.model.resultData').d('调试结果'),
  TRANSFORM_TYPE_REQUIRED: () =>
    intl.get('horc.fieldMapping.validation.required.transformType').d('请输入字段映射类型'),
  SOURCE_CONFIG_REQUIRED: () =>
    intl.get('horc.fieldMapping.validation.required.sourceConfigRequired').d('来源结构不能为空'),
  SCRIPT_REQUIRED: () =>
    intl.get('horc.fieldMapping.validation.required.script').d('DW脚本脚本不能为空'),

  FILE_SOURCE: () => intl.get('horc.fieldMapping.view.modal.fileSource').d('文件来源'),

  EXEC_CONFIRM: () => intl.get('horc.fieldMapping.view.modal.execConfirm').d('确定执行映射转化吗'),

  SAVE_VALIDATE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.saveValidate').d('请先完善必输内容'),
  SAVE_EMPTY: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.saveEmpty').d('无修改内容,无需保存'),
  JSON_VALIDATE: () =>
    intl.get('horc.fieldMapping.model.fieldMapping.jsonValidate').d('错误的JSON格式数据'),

  MODAL_EDIT_INFO: () =>
    intl.get('horc.fieldMapping.view.message.editInfo').d('关联接口已上线，不允许编辑当前配置'),

  STRUCTURE_NAME: () =>
    intl.get('horc.fieldMapping.model.orchestration.structureName').d('最外层结构名称'),

  MAPPING_CONFIG: () => intl.get('horc.fieldMapping.button.mappingConfig').d('映射配置'),
  IMPORT_MAPPING_CONFIG: () =>
    intl.get('horc.fieldMapping.button.importMappingConfig').d('导入映射配置'),
  IMPORT_MAPPING_CONFIG_TIP: () =>
    intl.get('horc.fieldMapping.tip.importMappingConfig').d('导入JSON文件或者输入JSON格式数据'),
  JSON_FORMATTER: () =>
    intl.get('horc.fieldMapping.debug.validation.formatter.json').d('JSON格式有误'),
  ERROR_IMPORT_JSON: () =>
    intl
      .get('horc.fieldMapping.debug.validation.errorImportJson')
      .d('导入JSON格式有误，请参考原导入JSON格式'),
  MISS_CONFIG_VO: () =>
    intl.get('horc.fieldMapping.debug.validation.missConfigVo').d('导入配置错误，缺失configVO字段'),
  MISS_DATA_TYPE: () =>
    intl
      .get('horc.fieldMapping.debug.validation.missDatatype')
      .d('导入配置错误，configVO下缺失dataType字段'),
  MISS_FIELD_MAPPING_CONFIG: () =>
    intl
      .get('horc.fieldMapping.debug.validation.missFieldMappingConfig')
      .d('导入配置错误，configVO下缺失fieldMappingConfig字段'),
  MISS_TRANSFORM_SCRIPT: () =>
    intl
      .get('horc.fieldMapping.debug.validation.missTransformScript')
      .d('导入配置错误，fieldMappingConfig下缺失transformScript字段'),
  MISS_VALUE_MAPPING_CONFIG: () =>
    intl
      .get('horc.fieldMapping.debug.validation.missValueMappingConfig')
      .d('导入配置错误，configVO下下缺失valueMappingConfig字段'),
  MISS_VALUE_MAPPING_LINE_CONFIG: () =>
    intl
      .get('horc.fieldMapping.debug.validation.missValueMappingLineConfigs')
      .d('导入配置错误，valueMappingConfig下缺失valueMappingLineConfigs字段'),
};

export default Langs;
