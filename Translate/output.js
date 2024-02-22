import intl from "utils/intl";

const Langs = {
  USER_RELATIONSHIP_MAPPING: () =>
    intl
      .get("hitf.relationMapping.message.userRelationshipMapping")
      .d("用户关系映射"),
  CONSUMER_USER_MAPPING: () =>
    intl
      .get("hitf.relationMapping.message.consumerUserMapping")
      .d("消费方用户映射"),
  PROVIDER_USER_MAPPING: () =>
    intl
      .get("hitf.relationMapping.message.providerUserMapping")
      .d("提供方用户映射"),
  SYSTEM_NAME: () =>
    intl.get("hitf.relationMapping.message.systemName").d("系统名称"),
  SYSTEM_USER: () =>
    intl.get("hitf.relationMapping.message.systemUser").d("系统用户"),
  SYSTEM_CODE: () =>
    intl.get("hitf.relationMapping.message.systemCode").d("系统编码"),
  CLIENT: () => intl.get("hitf.relationMapping.message.client").d("客户端"),
  MAPPING_NAME: () =>
    intl.get("hitf.relationMapping.message.mappingName").d("映射名称"),
  CONSUMER: () => intl.get("hitf.relationMapping.message.consumer").d("消费方"),
  FIXED_VALUE: () =>
    intl.get("hitf.relationMapping.message.fixedValue").d("固定值"),
  SYSTEM_USER_LIST: () =>
    intl.get("hitf.relationMapping.message.systemUserList").d("系统用户列表"),
  PLEASE_ADD_AT_LEAST_ONE_CONDITION: () =>
    intl
      .get("hitf.relationMapping.message.pleaseAddAtLeastOneCondition")
      .d("请至少添加一个条件！"),
};

export default Langs;
