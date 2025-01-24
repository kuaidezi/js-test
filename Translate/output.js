import intl from "utils/intl";


const Langs =  {
 	CONNECTION_TYPE: () => intl.get("hitf.resourceCenter.message.connectionType").d("连接类型"),
	RFC_TARGET: () => intl.get("hitf.resourceCenter.message.rfcTarget").d("RFC目标"),
	SAP_INSTANCE_NUMBER: () => intl.get("hitf.resourceCenter.message.sapInstanceNumber").d("SAP实例编号"),
	SAP_GROUP_NUMBER: () => intl.get("hitf.resourceCenter.message.sapGroupNumber").d("SAP集团号"),
	USERNAME: () => intl.get("hitf.resourceCenter.message.username").d("用户名"),
	PASSWORD: () => intl.get("hitf.resourceCenter.message.password").d("密码"),
	DEFAULT_LANGUAGE: () => intl.get("hitf.resourceCenter.message.defaultLanguage").d("默认语言"),
	SAP_ROUTING: () => intl.get("hitf.resourceCenter.message.sapRouting").d("SAP路由"),
	MAXIMUM_NUMBER_OF_CONNECTIONS: () => intl.get("hitf.resourceCenter.message.maximumNumberOfConnections").d("最大连接数"),
	MAXIMUM_NUMBER_OF_IDLE_CONNECTIONS: () => intl.get("hitf.resourceCenter.message.maximumNumberOfIdleConnections").d("空闲连接最大数量"),
	"GET_CONNECTION_TIMEOUT_TIME_(MILLISECONDS)": () => intl.get("???Too long Warning!!!!hitf.resourceCenter.message.getConnectionTimeoutTimeMilliseconds").d("获取连接超时时间（毫秒）"),
	"CONNECTION_POOL_CONNECTION_EXPIRATION_TIME_(MILLISECONDS)": () => intl.get("???Too long Warning!!!!hitf.resourceCenter.message.connectionPoolConnectionExpirationTimeMilliseconds").d("连接池连接过期时间（毫秒）"),
	"CONNECTION_CHECK_INTERVAL_(MILLISECONDS)": () => intl.get("???Too long Warning!!!!hitf.resourceCenter.message.connectionCheckIntervalMilliseconds").d("连接检查间隔（毫秒）"),
	SAP_SERVER_IP_ADDRESS: () => intl.get("hitf.resourceCenter.message.sapServerIpAddress").d("SAP服务器IP地址"),
	MESSAGE_SERVER_IP_OR_DOMAIN_NAME: () => intl.get("hitf.resourceCenter.message.messageServerIpOrDomainName").d("消息服务器IP或域名"),
	MESSAGE_SERVICE_PORT: () => intl.get("hitf.resourceCenter.message.messageServicePort").d("消息服务端口"),
	SYSTEM_ID: () => intl.get("hitf.resourceCenter.message.systemId").d("系统ID"),
	CLIENT_GROUP: () => intl.get("hitf.resourceCenter.message.clientGroup").d("客户端组"),

};


export default Langs;