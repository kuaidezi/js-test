import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.spelFunction',
  DELETE: () => intl.get('hzero.common.button.delete').d('删除'),
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  EDIT: () => intl.get('hzero.common.button.edit').d('编辑'),
  CREATE: () => intl.get('hzero.common.create').d('新建'),
  OPERATOR: () => intl.get('hzero.common.button.action').d('操作'),
  CONFIRM_TITLE: () => intl.get('hzero.common.message.confirm.title').d('提示'),

  FUNCTION_GROUP_NAME: () =>
    intl.get('horc.spelFunction.message.functionGroupName').d('函数分组名称'),
  FUNCTION_NAME: () => intl.get('horc.spelFunction.message.functionName').d('函数名称'),
  FUNCTION_API: () => intl.get('horc.spelFunction.message.functionApi').d('函数 API'),
  IS_IT_ENABLED: () => intl.get('horc.spelFunction.message.isItEnabled').d('是否启用'),
  IS_IT_COMMONLY_USED: () => intl.get('horc.spelFunction.message.isItCommonlyUsed').d('是否常用'),
  FUNCTION_DESCRIPTION: () =>
    intl.get('horc.spelFunction.message.functionDescription').d('函数描述'),
  COMMONLY_USED: () => intl.get('horc.spelFunction.message.commonlyUsed').d('常用'),
  NOT_COMMONLY_USED: () => intl.get('horc.spelFunction.message.notCommonlyUsed').d('不常用'),
  ENABLED_TIP: () => intl.get('horc.spelFunction.message.enabledTip').d('是否启用该函数？'),
  DISABLED_TIP: () => intl.get('horc.spelFunction.message.disabledTip').d('是否禁用该函数？'),
  DELETE_TIP: () => intl.get('horc.spelFunction.message.deleteTip').d('是否删除该函数？'),
  FUNCTION_EXAMPLE: () => intl.get('horc.spelFunction.message.functionExample').d('函数示例'),
  FUNCTION_METHOD: () => intl.get('horc.spelFunction.message.functionMethod').d('函数方法'),
  FUNCTION_EXAMPLE_DESCRIPTION: () =>
    intl.get('horc.spelFunction.message.functionExampleDescription').d('函数示例结果'),
};

export default Langs;
