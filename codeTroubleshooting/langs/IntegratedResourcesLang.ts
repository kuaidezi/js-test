import intl from 'utils/intl';

const Langs = {
  PREFIX: () => 'horc.integrated',
  DISABLE: () => intl.get('hzero.common.disable').d('禁用'),
  ENABLE: () => intl.get('hzero.common.enable').d('启用'),
  STATUS: () => intl.get('hzero.common.status').d('状态'),
  ALL: () => intl.get('hzero.common.status.all').d('全部'),
  PLEASE_INPUT_NAME: () =>
    intl.get('horc.integrated.view.placeholder.pleaseInputName').d('请输入资源名称搜索'),
  APPLICATION_CONNECTOR_RESOURCES: () =>
    intl.get('horc.integrated.view.applicationConnector.Resources').d('应用连接器资源'),
  TECHNICAL_CONNECTOR_RESOURCES: () =>
    intl.get('horc.integrated.view.technicalConnector.Resources').d('技术连接器资源'),
  SEE_MORE: () => intl.get('horc.integrated.view.text.seeMore').d('查看更多'),
};

export default Langs;
