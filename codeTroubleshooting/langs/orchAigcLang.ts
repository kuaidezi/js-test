import intl from 'utils/intl';

const Langs = {
  MODEL_COMBINING: () => intl.get('horc.orchestration.view.ModelCombining').d('模型组合'),
  MODEL_TYPE: () => intl.get('horc.orchestration.view.ModelType').d('模型类型'),
  MODEL_ACCOUNT: () => intl.get('horc.orchestration.view.ModelAccount').d('模型账号'),
  STREAMING_RESPONSE: () => intl.get('horc.orchestration.view.StreamingResponse').d('流式响应'),
  CONTENT_TO_TESTED: () => intl.get('horc.orchestration.view.ContentToTested').d('待测内容'),
  TEXT_CONTENT: () => intl.get('horc.orchestration.view.TextContent').d('文本内容'),
  SENSITIVE_VOCABULARY: () => intl.get('horc.orchestration.view.SensitiveVocabulary').d('敏感词库'),
  CONTENT: () => intl.get('horc.orchestration.view.Content').d('内容'),
  ROLE: () => intl.get('horc.orchestration.view.role').d('角色'),
  ROLE_MESSAGE_TIP: () =>
    intl
      .get('horc.orchestration.view.roleMessageTip')
      .d('待发送请求消息内容对应作者扮演的角色，帮助模型理解对话的上下文'),
  CHAT_CONFIGURATION: () => intl.get('horc.orchestration.view.chatConfiguration').d('对话配置'),
  VOICE_CONFIGURATION: () =>
    intl.get('horc.orchestration.view.VoiceConfiguration').d('语音识别配置'),
  WORD_D_CONFIGURATION: () =>
    intl.get('horc.orchestration.view.WordDConfiguration').d('敏感词检测配置'),
  VECTOR_CONFIGURATION: () => intl.get('horc.orchestration.view.VectorConfiguration').d('向量配置'),
  REQUEST: () => intl.get('horc.orchestration.view.message.request').d('请求消息'),
  VOICE_FILES: () => intl.get('horc.orchestration.view.message.Voicefiles').d('语音文件'),
  QUESTION_CONTENT: () => intl.get('horc.orchestration.view.message.QuestionContent').d('问题内容'),
  KNOWLEDGE_BASEQA: () =>
    intl.get('horc.orchestration.view.message.KnowledgeBaseQA').d('知识库问答配置'),

  Q_AType: () => intl.get('horc.orchestration.view.message.Q&AType').d('问答类型'),
  BLOCK_SIZE_LIMIT: () => intl.get('horc.orchestration.view.BlockSizeLimit').d('块大小限制'),
  KNOWLEDGE_LIST: () => intl.get('horc.orchestration.view.knowledgeList').d('知识库'),
  AIGC_ORCHESTRATION_PROCESS: () =>
    intl.get('horc.orchestration.view.AIGCOrchestrationProcess').d('AIGC编排流程'),
  EXEC_METHOD: () => intl.get('horc.orchestration.model.orchestration.execMethod').d('执行方式'),
  AIGC_ORCHESTRATION_INSTANCE_ID: () =>
    intl.get('horc.orchestration.view.AIGCOrcheInstanceID').d('AIGC编排实例标识'),
  WAITING_FOR_PROCESS_EXECUTION: () =>
    intl.get('horc.orchestration.view.WaitingForExecution').d('等待流程执行'),
  OTHER_PARAMS: () => intl.get('horc.orchestration.view.otherParams').d('其他参数'),
  FILE_CONFIGURATION: () => intl.get('horc.orchestration.view.fileConfiguration').d('文件配置'),
  INTERVAL: () => intl.get('horc.orchestration.model.block.interval').d('循环间隔'),
  TIMEOUT_PERIOD: () => intl.get('horc.orchestration.model.timeoutPeriod').d('超时周期'),
  FLOW_CONFIGURATION: () => intl.get('horc.orchestration.model.flowConfiguration').d('流程配置'),
};

export default Langs;
