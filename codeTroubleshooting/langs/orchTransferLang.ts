/**
 * 编排-文件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-09
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  SOURCE_PARAM: () => intl.get('horc.orchestration.view.title.sourceParam').d('来源参数'),
  TARGET_PARAM: () => intl.get('horc.orchestration.view.title.targetParam').d('目标参数'),
  SERVICE_CONFIG: () => intl.get('horc.orchestration.view.title.serviceConfig').d('服务器配置'),
  TRANSFER_TYPE: () => intl.get('horc.orchestration.model.file.transferType').d('传输类型'),
  SOURCE_FOLDER: () => intl.get('horc.orchestration.model.file.sourceFolder').d('文件目录'),
  ENABLE_SUB_PATH: () => intl.get('horc.orchestration.model.file.enableSubPath').d('是否递归'),
  ARCHIVED_FLAG: () => intl.get('horc.orchestration.model.file.archivedFlag').d('是否归档'),
  DELETE_FLAG: () => intl.get('horc.orchestration.model.file.deleteFlag').d('是否删除'),
  ARCHIVED_DIR: () => intl.get('horc.orchestration.model.file.archivedDir').d('归档文件夹'),
  TARGET_FOLDER: () => intl.get('horc.orchestration.model.file.targetFolder').d('目标文件夹'),
  OVER_WRITE: () => intl.get('horc.orchestration.model.file.overWrite').d('是否覆盖'),
  ANTECEDENT_NODE: () => intl.get('horc.orchestration.model.file.antecedentNodes').d('源文件节点'),
  PATTERN: () => intl.get('horc.orchestration.model.file.pattern').d('文件名正则'),
  PATTERN_TIP: () =>
    intl
      .get('horc.orchestration.model.file.patternTip')
      .d(
        '选输，将源文件夹下的文件名与该正则匹配，筛选满足条件的文件传输；为空时表示传输源文件夹下所有文件；'
      ),
  URL_PARAM: () => intl.get('horc.orchestration.model.file.urlParam').d('文件集'),
  BATCH_ID: () => intl.get('horc.orchestration.model.file.batchId').d('文件批号'),
  SOURCE_BATCH_ID_TIP: () =>
    intl.get('horc.orchestration.model.file.sourceBatchIdTip').d('上传文件服务器时设置的批次号'),
  TARGET_BATCH_ID_TIP: () =>
    intl
      .get('horc.orchestration.model.file.targetBatchIdTip')
      .d('标记此批文件，用于获取此批文件，批次号在一个桶名下要保证唯一'),
  BUCKET_NAME: () => intl.get('horc.orchestration.model.file.bucketName').d('文件分组'),
  SOURCE_BUCKET_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.file.sourceBucketNameTip')
      .d('文件存储配置的桶名；用于区分各个服务，例如horc标识编排服务'),
  TARGET_BUCKET_NAME_TIP: () =>
    intl
      .get('horc.orchestration.model.file.targetBucketNameTip')
      .d('文件存储配置的桶名；用于区分各个服务，例如horc标识编排服务'),
  STORE_TYPE: () => intl.get('horc.orchestration.model.file.storeType').d('存储类型'),
  STORE_CODE: () => intl.get('horc.orchestration.model.file.storeCode').d('存储编码'),
  STORE_CODE_TIP: () =>
    intl.get('horc.orchestration.model.file.storeCodeTip').d('文件存储配置的存储编码'),
  ANTECEDENT_NODE_TIP: () =>
    intl
      .get('horc.orchestration.model.file.antecedentNodesTip')
      .d(
        '当传输类型为前序节点时必输，选择当前节点的前序节点，将选择的前序节点传输的文件作为当前节点的源文件。'
      ),
  SOURCE_FOLDER_TIP: () =>
    intl.get('horc.orchestration.model.file.sourceFolderTip').d('需要传输的文件所在目录地址'),
  ARCHIVED_DIR_TIP: () =>
    intl
      .get('horc.orchestration.model.file.archivedDirTip')
      .d('文件归档路径，系统会在该路径下创建success和failed文件夹，分别存放传输成功和失败的文件。'),
};

export default Langs;
