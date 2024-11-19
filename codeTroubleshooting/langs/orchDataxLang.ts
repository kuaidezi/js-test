/**
 * DATAX插件-多语言
 * @author baitao.huang@hand-china.com
 * @date 2022-5-25
 * @version: 0.0.1
 * @copyright: Copyright (c) 2022, Hand
 */

import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  PARSE: () => intl.get('horc.orchestration.view.button.parse').d('解析'),

  SELECT_CONFIG_METHOD: () =>
    intl.get('horc.orchestration.dataX.view.title.selectConfigMethod').d('配置方式'),
  CONFIG_METHOD: () => intl.get('horc.orchestration.dataX.model.configMethod').d('配置模式'),

  FIELD_MAPPING: () => intl.get('horc.orchestration.dataX.view.title.fieldMapping').d('字段映射'),

  SOURCE_TABLE_FIELD: () =>
    intl.get('horc.orchestration.dataX.model.sourceTableField').d('来源表字段'),
  WRITE_TABLE_FIELD: () =>
    intl.get('horc.orchestration.dataX.model.writeTableField').d('写入表字段'),
  TYPE: () => intl.get('horc.orchestration.dataX.model.type').d('类型'),

  READ_CONFIGURATION: () =>
    intl.get('horc.orchestration.dataX.view.title.readConfiguration').d('来源数据'),
  READER_TYPE: () => intl.get('horc.orchestration.dataX.model.readerType').d('来源类型'),
  READER_TYPE_TIP: () =>
    intl.get('horc.orchestration.dataX.model.readerType.tip').d('即数据从哪里来'),
  PATH: () => intl.get('horc.orchestration.dataX.model.path').d('文件路径'),
  PATH_PLACEHOLDER: () =>
    intl.get('horc.orchestration.dataX.model.path.placeholder').d('/data,/test'),
  PATH_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.pathTip')
      .d('本地文件系统的路径信息，注意这里可以支持填写多个路径'),
  WRITER_PATH_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.writePathTip')
      .d('本地文件系统的路径信息，TxtFileWriter会写入Path目录下属多个文件 '),
  FIELD_DELIMITER: () => intl.get('horc.orchestration.dataX.model.fieldDelimiter').d('列分隔符'),
  FIELD_DELIMITER_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.fieldDelimiter.tip')
      .d('读取的字段分隔符，如果分隔符不可见，请配置Unicode编码，如\\u001b'),
  COMPRESS: () => intl.get('horc.orchestration.dataX.model.compress').d('压缩格式'),
  COMPRESS_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.compress.tip')
      .d('文本压缩类型，默认不填写意味着没有压缩。支持压缩类型为zip、gzip、bzip'),
  ENCODING: () => intl.get('horc.orchestration.dataX.model.encoding').d('文件编码'),
  ENCODING_TIP: () =>
    intl.get('horc.orchestration.dataX.model.encoding.tip').d('读取文件的编码配置'),
  SKIP_HEADER: () => intl.get('horc.orchestration.dataX.model.skipHeader').d('跳过表头'),
  SKIP_HEADER_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.skipHeader.tip')
      .d('类CSV格式文件可能存在表头为标题情况，需要跳过。默认不跳过'),
  NULL_FORMAT: () => intl.get('horc.orchestration.dataX.model.nullFormat').d('null值'),
  NULL_FORMAT_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.nullFormat.tip')
      .d(
        '文本文件中无法使用标准字符串定义null(空指针)，DataX提供nullFormat定义哪些字符串可以表示为null。例如如果用户配置: () => nullFormat: () =>"\\N"，那么如果源头数据是"N",DataX视作null字段。'
      ),
  CSV_READER_CONFIG: () =>
    intl.get('horc.orchestration.dataX.model.csvReaderConfig').d('csv读取配置'),
  CSV_READER_CONFIG_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.csvReaderConfig.tip')
      .d(
        '读取CSV类型文件参数配置，Map类型。读取CSV类型文件使用的CsvReader进行读取，会有很多配置，不配置则使用默认值'
      ),
  WRITER_TYPE: () => intl.get('horc.orchestration.dataX.model.writerType').d('目标类型'),
  FILE_NAME: () => intl.get('horc.orchestration.dataX.model.fileName ').d('文件名'),
  FILE_NAME_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.fileName.tip')
      .d('TxtFileWriter写入的文件名，该文件名会添加随机的后缀作为每个线程写入实际文件名'),
  FILE_WRITE_MODE: () =>
    intl.get('horc.orchestration.dataX.model.fileWriteMode ').d('文件前缀冲突'),
  FILE_WRITE_MODE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.fileWriteMode.tip')
      .d(
        'TxtFileWriter写入前数据清理处理模式\n  - 替换原有文件：写入前清理目录下一fileName前缀的所有文件\n- 保留原有文件：写入前不做任何处理，DataX TxtFileWriter直接使用filename写入，并保证文件名不冲突\n- 退出报错：如果目录下有fileName前缀的文件，直接报错'
      ),
  DATE_FORMAT: () => intl.get('horc.orchestration.dataX.model.dateFormat').d('日期格式'),
  DATE_FORMAT_PLACEHOLDER: () =>
    intl.get('horc.orchestration.dataX.model.dateFormat.placeholder').d('yyyy-MM-dd'),
  DATE_FORMAT_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.dateFormat.tip')
      .d('日期类型的数据序列化到文件中时的格式，例如 "dateFormat": () => "yyyy-MM-dd"'),
  FILE_FORMAT: () => intl.get('horc.orchestration.dataX.model.fileFormat').d('文件格式'),
  FILE_FORMAT_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.fileFormat.tip')
      .d(
        '文件写出的格式，包括csv (http://zh.wikipedia.org/wiki/%E9%80%97%E5%8F%B7%E5%88%86%E9%9A%94%E5%80%BC) 和text两种，csv是严格的csv格式，如果待写数据包括列分隔符，则会按照csv的转义语法转义，转义符号为双引号"；text格式是用列分隔符简单分割待写数据，对于待写数据包括列分隔符情况下不做转义'
      ),
  HEADER: () => intl.get('horc.orchestration.dataX.model.header').d('表头'),
  HEADER_PLACEHOLDER: () =>
    intl.get('horc.orchestration.dataX.model.header.placeholder').d('id;name;age'),
  HEADER_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.header.tip')
      .d("txt写出时的表头，示例['id','name','age']"),
  DS_TYPE: () => intl.get('horc.orchestration.dataX.model.dsType').d('数据源类型'),
  DS_NAME: () => intl.get('horc.orchestration.dataX.model.dsName').d('数据源名称'),
  DS_DSCHEMA: () => intl.get('horc.orchestration.dataX.model.dsSchema').d('数据源schema'),
  DS_TABLE: () => intl.get('horc.orchestration.dataX.model.dsTable').d('表'),
  DS_TABLE_OR_VIEW: () => intl.get('horc.orchestration.dataX.model.dsTableOrView').d('表或视图'),
  USE_QUERY_SQL: () => intl.get('horc.orchestration.dataX.model.useQuerySql').d('使用SQL语句'),
  USE_QUERY_SQL_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.useQuerySql.tip')
      .d('开启使用SQL语句，隐藏过滤条件和来源表。'),
  QUERY_SQL: () => intl.get('horc.orchestration.dataX.model.querySql').d('SQL语句'),
  QUERY_SQL_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.querySql.tip')
      .d(
        '当用户配置querySql时，DataX直接忽略table、column、where条件的配置，querySql优先级大于table、column、where选项。'
      ),
  QUERY_SQL_PLACEHOLDER: () =>
    intl
      .get('horc.orchestration.dataX.model.querySql.placeholder')
      .d('查询SQL语句，多条语句使用;分隔。'),
  WHERE: () => intl.get('horc.orchestration.dataX.model.where').d('过滤条件'),
  WHERE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.where.tip')
      .d(
        'where条件，不需要加where关键字，DataX根据指定的column、table、where条件拼接SQL，并根据这个SQL进行数据抽取。'
      ),
  WHERE_PLACEHOLDER: () =>
    intl.get('horc.orchestration.dataX.model.where.placeholder').d('where条件，不需要加where。'),
  SPLIT_PK: () => intl.get('horc.orchestration.dataX.model.splitPk').d('数据分片字段'),
  SPLIT_PK_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.splitPk.tip')
      .d(
        'DataX进行数据抽取时，如果指定splitPk，表示用户希望使用splitPk代表的字段进行数据分片，DataX因此会启动并发任务进行数据同步，这样可以大大提供数据同步的效能。'
      ),

  CSV_READER_CONFIG_TITLE: () =>
    intl.get('horc.orchestration.dataX.view.title.csvReaderConfig').d('来源读取配置'),
  CASE_SENSITIVE: () => intl.get('horc.orchestration.dataX.model.caseSensitive').d('区分大小写'),
  TRIM_WHITESPACE: () => intl.get('horc.orchestration.dataX.model.trimWhitespace').d('去除空格'),
  USE_TEXT_QUALIFIER: () =>
    intl.get('horc.orchestration.dataX.model.useTextQualifier').d('启用转义字符'),
  TEXT_QUALIFIER: () => intl.get('horc.orchestration.dataX.model.textQualifier').d('转义字符'),
  ESCAPE_MODE: () => intl.get('horc.orchestration.dataX.model.escapeMode').d('转义符模式'),
  DELIMITER: () => intl.get('horc.orchestration.dataX.model.delimiter').d('分隔符'),
  RECORD_DELIMITER: () =>
    intl.get('horc.orchestration.dataX.model.recordDelimiter').d('记录分隔符'),
  USE_COMMENTS: () => intl.get('horc.orchestration.dataX.model.useComments').d('启用注释'),
  COMMENTS: () => intl.get('horc.orchestration.dataX.model.commment').d('注释'),
  SAFETY_SWITCH: () => intl.get('horc.orchestration.dataX.model.safetySwitch').d('限制单列长度'),
  SAFETY_SWITCH_TIP: () =>
    intl.get('horc.orchestration.dataX.model.safetySwitch.tip').d('单列长度是否限制100000字符'),
  SKIP_EMPTY_RECORDS: () =>
    intl.get('horc.orchestration.dataX.model.skipEmptyRecords').d('跳过空行'),
  CAPTURE_RAW_RECORD: () =>
    intl.get('horc.orchestration.dataX.model.captureRawRecord').d('捕获记录'),

  WRITE_CONFIGURATION: () =>
    intl.get('horc.orchestration.dataX.view.title.writeConfiguration').d('目标数据'),
  PRE_SQL: () => intl.get('horc.orchestration.dataX.model.preSql').d('目标库前置SQL'),
  PRE_SQL_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.preSql.tip')
      .d(
        "写入数据到目的表前，会先执行这里的标准语句。如果 Sql 中有你需要操作到的表名称，请使用 '@table' 表示，这样在实际执行 Sql 语句时，会对变量按照实际表名称进行替换。"
      ),
  PRE_SQL_PLACEHOLDER: () =>
    intl.get('horc.orchestration.dataX.model.preSql.placeholder').d('请输入非查询语句。'),
  POST_SQL: () => intl.get('horc.orchestration.dataX.model.postSql').d('目标库后置SQL'),
  POST_SQL_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.postSql.tip')
      .d('写入数据到目的表后，会执行这里的标准语句。（原理同目标库前置SQL）'),
  POST_SQL_PLACEHOLDER: () =>
    intl
      .get('horc.orchestration.dataX.model.postSql.placeholder')
      .d('请输入非查询语句，多条语句使用;分隔。'),
  WRITE_MODE: () => intl.get('horc.orchestration.dataX.model.writeMode').d('写入模式'),
  WRITE_MODE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.writeMode.tip')
      .d(
        "控制写入数据到目标表采用 'insert into' 或者 'replace into' 或者 'ON DUPLICATE KEY UPDATE' 语句。"
      ),
  BATCH_SIZE: () => intl.get('horc.orchestration.dataX.model.batchSize').d('批量提交记录数'),
  BATCH_SIZE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.batchSize.tip')
      .d(
        '一次性批量提交的记录数大小，该值可以极大减少DataX与数据库的网络交互次数，并提升整体吞吐量。但是该值设置过大可能会造成DataX运行进程OOM情况。'
      ),

  DATA_DRAWER_TITLE: () => intl.get('horc.orchestration.dataX.model.dataDrawerTitle').d('来源数据'),
  DATA_TYPE: () => intl.get('horc.orchestration.dataX.model.dataType').d('数据格式：JSON'),
  JSON_VALIDATE: () =>
    intl.get('horc.orchestration.dataX.model.jsonValidate.tip').d('错误的JSON格式数据'),
  ADD_SOURCE_FIELD: () =>
    intl.get('horc.orchestration.view.button.addSourceField').d('新增来源表字段'),
  IMPORT_SOURCE_FIELD: () =>
    intl.get('horc.orchestration.view.button.importSourceField').d('导入来源表字段'),
  IMPORT_WRITE_FIELD: () =>
    intl.get('horc.orchestration.view.button.importWriteField').d('导入写入表字段'),

  OPTIMIZATION: () => intl.get('horc.orchestration.dataX.view.title.optimization').d('DataX优化项'),
  CHANNEL: () => intl.get('horc.orchestration.dataX.model.channel').d('管道并发数'),
  CHANNEL_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.channel.tip')
      .d(
        "当配置了来源数据中'数据分片字段（splitPk）'后，可调整该项，因为Reader和Writer是一一对应的关系，所以管道并发数可以视为是DataX任务中数据管道的数量；Reader向管道写入数据，Writer从管道读取数据。"
      ),
  RECORD: () => intl.get('horc.orchestration.dataX.model.record').d('脏数据最大记录数'),
  RECORD_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.record.tip')
      .d('脏数据限制，当Job传输过程出现的脏数据大于用户指定的数量/百分比，DataX Job报错退出。'),
  PENCENTAGE: () => intl.get('horc.orchestration.dataX.model.percentage').d('脏数据占比（百分比）'),
  PENCENTAGE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.percentage.tip')
      .d('脏数据限制，当Job传输过程出现的脏数据大于用户指定的数量/百分比，DataX Job报错退出。'),
  XMS: () => intl.get('horc.orchestration.dataX.model.xms').d('JVM最小运行内存'),
  XMS_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.xms.tip')
      .d(
        '即Xms，当提升 DataX Job 内 Channel 并发数时，内存的占用会显著增加，因为 DataX 作为数据交换通道，在内存中会缓存较多的数据。例如 Channel 中会有一个 Buffer，作为临时的数据交换的缓冲区，而在部分 Reader 和 Writer 的中，也会存在一些 Buffer，为了防止 OOM 等错误，调大 JVM 的堆内存。'
      ),
  XMX: () => intl.get('horc.orchestration.dataX.model.xmx').d('JVM最大运行内存'),
  XMX_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.xmx.tip')
      .d(
        '即Xmx，当提升 DataX Job 内 Channel 并发数时，内存的占用会显著增加，因为 DataX 作为数据交换通道，在内存中会缓存较多的数据。例如 Channel 中会有一个 Buffer，作为临时的数据交换的缓冲区，而在部分 Reader 和 Writer 的中，也会存在一些 Buffer，为了防止 OOM 等错误，调大 JVM 的堆内存。'
      ),

  INVOKE_CONFIG: () =>
    intl.get('horc.orchestration.dataX.view.title.invokeConfig').d('DataX执行配置项'),
  INVOKE_METHOD: () => intl.get('horc.orchestration.dataX.model.invokeMethod').d('执行模式'),
  DATAX_HOME_PATH: () => intl.get('horc.orchestration.dataX.model.dataXHomePath').d('DataX HOME'),
  DATAX_HOME_PATH_TIP: () =>
    intl
      .get('horc.orchestration.dataX.dataXHomePathTip')
      .d(
        'DataX安装路径，即datax.py对应的bin目录所在位置，如datax.py地址为/home/datax/bin/datax.py，则配置该路径为/home/datax。'
      ),
  JOB_JSON_PATH: () => intl.get('horc.orchestration.dataX.model.jobJsonPath').d('脚本上传路径'),
  JOB_JSON_PATH_TIP: () =>
    intl
      .get('horc.orchestration.dataX.jobJsonPathTip')
      .d('即配置的脚本或预览的脚本上传到服务器的路径'),
  JOB_JSON_NAME: () => intl.get('horc.orchestration.dataX.model.jobJsonName').d('脚本文件名'),
  JOB_JSON_NAME_TIP: () =>
    intl
      .get('horc.orchestration.dataX.jobJsonNameTip')
      .d(
        '当上传配置成功后，回写文件名到该配置，并展示最后上传成功时间，文件名格式通常为“编排定义编码-节点编码-编排定义版本-时间戳-随机6位数字”'
      ),
  FIELD_MAPPING_EMPTY_TIP: () =>
    intl
      .get('horc.orchestration.dataX.view.title.fieldMappingEmptyTip')
      .d('选择来源和目标数据，并且获取字段列表后，显示字段映射'),
  UPLOAD_INFO: () => intl.get('horc.orchestration.dataX.model.uploadInfo').d('上传'),
  SCRIPT_CONFIG: () => intl.get('horc.orchestration.dataX.model.scriptConfig').d('脚本配置'),
  CONFIG_REVIEW: () =>
    intl.get('horc.orchestration.dataX.view.title.button.configReview').d('配置预览'),

  SERVER_CONFIG: () => intl.get('horc.orchestration.dataX.model.serverConfig').d('服务器配置'),
  TEST_CONNECT: () => intl.get('horc.orchestration.view.button.testConnect').d('测试连接'),
  SAVE_VALIDATE: () =>
    intl.get('horc.orchestration.model.shell.saveValidate').d('请先完善必输内容'),
  CONNECT_SUCCESS: () => intl.get('horc.orchestration.view.button.connectSuccess').d('连接成功'),
  CONNECT_FAILED: () => intl.get('horc.orchestration.view.button.connectFailed').d('连接失败'),

  LAST_UPLOAD_DATE_TIME: () =>
    intl.get('horc.orchestration.dataX.model.lastUploadDateTime').d('最后上传时间'),
  DATABASE: () => intl.get('horc.orchestration.dataX.view.database').d('数据库'),

  INDEX: () => intl.get('horc.orchestration.dataX.model.inex').d('下标'),
  VALUE: () => intl.get('horc.orchestration.dataX.model.value').d('值'),
  FIELD_NAME: () => intl.get('horc.orchestration.dataX.model.fieldName').d('字段名称'),
  SELF_DEFINITE: () => intl.get('horc.orchestration.dataX.model.selfDefinite').d('自定义'),
  PARAM_NAME: () => intl.get('horc.orchestration.dataX.model.paramName').d('参数名'),
  PARAM_TYPE: () => intl.get('horc.orchestration.dataX.model.paramType').d('参数类型'),
  PARAM_VALUE: () => intl.get('horc.orchestration.dataX.model.paramValue').d('参数值'),
  PRE_UPLOAD_FLAG: () => intl.get('horc.orchestration.dataX.model.preUploadFlag').d('预上传'),
  PRE_UPLOAD_FLAG_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.preUploadFlagTip')
      .d(
        '禁用表示每次执行该节点时，会重新上传脚本之后再执行DataX，启用表示在保存编排定义前必须先上传配置的脚本，执行该节点时不会再上传脚本而是直接执行DataX'
      ),

  SELF_DEFINITE_PARAM: () =>
    intl.get('horc.orchestration.dataX.model.selfDefiniteParam').d('自定义参数'),

  PARAM_PARSE: () => intl.get('horc.orchestration.view.button.paramParse').d('参数识别'),
  PARAM_PARSE_TIP: () =>
    intl
      .get('horc.orchestration.view.button.paramParseTip')
      .d(
        '识别脚本配置中的变量名，并作为自定义参数的参数名，若是识别出的变量名已在自定义参数中定义过，则保留已定义过的参数，若是在自定义参数中定义过的参数未在脚本配置中出现过，则删除该自定义参数'
      ),
  PARAM_PARSE_CONFIRM: () =>
    intl
      .get('horc.orchestration.view.button.paramParseConfirm')
      .d(
        '参数识别会导致脚本中未配置的变量但在自定义参数表格中配置过的参数被删除，是否继续参数识别'
      ),

  SAVE_TIP: () =>
    intl
      .get('horc.orchestration.dataX.model.save.tip')
      .d('内容已发生变更，请确认是否已重新上传配置文件？'),

  CHANGE_TIP: () =>
    intl.get('horc.orchestration.model.dataX.changeTip').d('切换操作将会清空原内容，确定切换吗'),
  DELETE: () => intl.get('horc.orchestration.model.dataX.delete').d('删除'),
  ADD: () => intl.get('horc.orchestration.model.dataX.add').d('新增'),
};

export default Langs;
