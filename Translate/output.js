import intl from "utils/intl";


const Langs =  {
 	SYSTEM_NAME: () => intl.get("hitf.relationMapping.message.systemName").d("系统名称"),
	MAPPING_NAME: () => intl.get("hitf.relationMapping.message.mappingName").d("映射名称"),
	SYSTEM_CODE: () => intl.get("hitf.relationMapping.message.systemCode").d("系统编码"),
	CLIENT: () => intl.get("hitf.relationMapping.message.client").d("客户端"),
	SYSTEM_USER: () => intl.get("hitf.relationMapping.message.systemUser").d("系统用户"),

};


export default Langs;