import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.orchestration',
  COPY: () => intl.get('hzero.common.button.copy').d('复制'),
  DEBUG: () => intl.get('horc.orchestration.codeEditor.model.debug').d('调试'),
  SUCCESSFUL: () => intl.get('horc.orchestration.codeEditor.model.successful').d('成功'),
  FAILED: () => intl.get('horc.orchestration.codeEditor.model.failed').d('失败'),
  EXECUTION_CONTEXT: () =>
    intl.get('horc.orchestration.codeEditor.model.executionContext').d('执行上下文'),
  EXECUTION_CONTEXT_TIP: () =>
    intl
      .get('horc.orchestration.codeEditor.model.executionContextTip')
      .d('调试时的上下文执行租户、角色'),
  SELECT_TENANT: () => intl.get('horc.orchestration.codeEditor.model.selectTenant').d('请选择租户'),
  SELECT_ROLE: () => intl.get('horc.orchestration.codeEditor.model.selectRole').d('请选择角色'),
  EXPRESSION: () => intl.get('horc.orchestration.codeEditor.model.expression').d('表达式'),
  TEST_INPUT: () => intl.get('horc.orchestration.codeEditor.model.testInput').d('输入参数'),
  TEST_OUTPUT: () => intl.get('horc.orchestration.codeEditor.model.testOutput').d('输出结果'),
  EXECUTION_TIME: () =>
    intl.get('horc.orchestration.codeEditor.model.executionTime').d('执行耗时：'),
  END_TIME: () => intl.get('horc.orchestration.codeEditor.model.endTime').d('完成时间：'),
  SELECT_TEMPLATE: () =>
    intl.get('horc.orchestration.codeEditor.model.selectTemplate').d('选择模板'),
  CHANGE_TEMPLATE: () =>
    intl.get('horc.orchestration.codeEditor.model.changeTemplate').d('更换模板'),
  CONTINUE: () => intl.get('horc.orchestration.codeEditor.model.continue').d('继续'),
  SELECT_TEMPLATE_TIP: () =>
    intl
      .get('horc.orchestration.codeEditor.model.selectTemplateTip')
      .d('使用模板将会覆盖当前脚本，请注意及时手动备份当前脚本内容。确认请继续。'),
  FULL_SCREEN: () => intl.get('horc.orchestration.codeEditor.model.fullScreen').d('全屏编辑'),
  FULL_SCREEN_EXIT: () =>
    intl.get('horc.orchestration.codeEditor.model.fullScreenExit').d('退出全屏'),
  INIT_TEST_INPUT: () =>
    intl.get('horc.orchestration.codeEditor.model.initTestInput').d('初始化参数'),
  INIT_TEST_INPUT_TIP: () =>
    intl
      .get('horc.orchestration.codeEditor.model.initTestInputTip')
      .d('初始化入参操作将覆盖已有输入参数，确认请继续。'),
  INIT_TEST_INPUT_VALIDATE: () =>
    intl.get('horc.orchestration.codeEditor.model.initTestInputValidate').d('请先完善必输内容'),
  FORMATTER: () => intl.get('horc.orchestration.view.button.formatter').d('格式化'),
  COPY_SUCCESS: () => intl.get('horc.orchestration.view.message.copySuccess').d('复制成功'),
  FORMAT_SUCCESS: () => intl.get('horc.orchestration.view.message.formatSuccess').d('格式化成功'),
  FORMAT_FAILED: () =>
    intl.get('horc.orchestration.view.message.formatFailed').d('格式化失败，语法错误'),
  CONTENT_NOT_EMPTY: () =>
    intl.get('horc.orchestration.view.message.contentNotEmpty').d('请先填写表达式再进行调试'),
  DEBUG_TIP: () =>
    intl.get('horc.orchestration.codeEditor.model.debugTip').d('对上方维护的表达式进行调试'),
};

export default Langs;
