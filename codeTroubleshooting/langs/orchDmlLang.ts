/**
 * dml插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-11-19
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  DATASOURCE_DML_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceDmlOperator').d('数据源DML操作'),
  DATASOURCE_UPDATE_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceUpdateOperator').d('数据源更新操作'),
  DATASOURCE_INSERT_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceInsertOperator').d('数据源插入操作'),
  DATASOURCE_DELETE_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceDeleteOperator').d('数据源删除操作'),
  DATASOURCE_SELECT_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceSelectOperator').d('数据源查询操作'),
  DATASOURCE_BAULK_UPDATE_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceBaulkUpdateOperator').d('数据源批量更新操作'),
  DATASOURCE_BAULK_INSERT_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceBaulkInsertOperator').d('数据源批量插入操作'),
  DATASOURCE_BAULK_DELETE_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.datasourceBaulkDeleteOperator').d('数据源批量删除操作'),
  DATASOURCE_NAME: () => intl.get('horc.orchestration.model.dml.datasourceName').d('数据源名称'),
  DATASOURCE_CODE: () => intl.get('horc.orchestration.model.dml.datasourceCode').d('数据源编码'),
  DB_TYPE: () => intl.get('horc.orchestration.model.dml.dbType').d('数据源类型'),
  SCHEMA: () => intl.get('horc.orchestration.model.dml.schema').d('数据源schema'),
  SQL_TEXT: () => intl.get('horc.orchestration.model.dml.sqlText').d('sql文本'),
  EXEC_RESULT: () => intl.get('horc.orchestration.model.dml.execResult').d('执行结果'),
  ARRAY_PATH: () => intl.get('horc.orchestration.model.dml.arrayPath').d('数组变量路径'),

  DB_EXECUTE_OPERATOR: () =>
    intl.get('horc.orchestration.view.title.dbExecuteOperator').d('SQL执行操作'),
};

export default Langs;
