/**
 * 阻塞节点-多语言
 * @author baitao.huang@hand-china.com
 * @date 2020-12-4
 * @version: 0.0.1
 * @copyright: Copyright (c) 2020, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.tsdb',
  TSDB_SELECT_TITLE: () => intl.get('horc.tsdb.view.tsdb.TsdbSelectTitle').d('时序数据库查询操作'),
  TSDB_INSERT_TITLE: () => intl.get('horc.tsdb.view.tsdb.TsdbInsertTitle').d('时序数据库插入操作'),
  TSDB_DELETE_TITLE: () => intl.get('horc.tsdb.view.tsdb.TsdbDeleteTitle').d('时序数据库删除操作'),
  TSDB_BATCH_INSERT_TITLE: () =>
    intl.get('horc.tsdb.view.tsdb.TsdbBatchInsertTitle').d('时序数据库批量插入操作'),
  DATA_SOURCE_NAME: () => intl.get('horc.tsdb.model.tsdb.dataSourceName').d('数据源名称'),
  TSDB_TYPE: () => intl.get('horc.tsdb.model.tsdb.tsdbType').d('数据源类型'),
  URL: () => intl.get('horc.tsdb.model.tsdb.url').d('URL地址'),
  USERNAME: () => intl.get('horc.tsdb.model.tsdb.username').d('用户名'),
  PASSWORD: () => intl.get('horc.tsdb.model.tsdb.password').d('密码'),
  DATABASE: () => intl.get('horc.tsdb.model.tsdb.database').d('数据源schema'),
  SQL_TEXT: () => intl.get('horc.tsdb.model.tsdb.sqlText').d('sql文本'),
  ARRAY_PATH: () => intl.get('horc.tsdb.model.tsdb.arrayPath').d('数组变量路径'),
  TAGS: () => intl.get('horc.tsdb.model.tsdb.tags').d('tags'),
  FIELDS: () => intl.get('horc.tsdb.model.tsdb.fields').d('fields'),
  KEY: () => intl.get('horc.tsdb.model.http.key').d('键'),
  VALUE: () => intl.get('horc.tsdb.model.http.value').d('值'),
  EXPR_ENABLED: () => intl.get('horc.tsdb.model.http.exprEnable').d('启用表达式'),
};

export default Langs;
