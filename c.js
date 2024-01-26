let a = ` [
    !isTenant && {
      name: 'tenantName',
      width: 150,
    },
    {
      name: 'invokeKey',
      width: 280,
    },
    {
      name: 'interfaceName',
      width: 180,
    },
    {
      name: 'interfaceCode',
      width: 180,
    },
    {
      name: 'formatInterfaceVersion',
      width: 100,
    },
    {
      name: 'serverName',
      width: 180,
    },
    {
      name: 'serverCode',
      width: 180,
    },
    {
      name: 'formatInterfaceServerVersion',
      width: 100,
    },
    {
      name: 'requestTime',
      width: 160,
    },
    {
      name: 'clientId',
      width: 150,
    },
    {
      name: 'interfaceUrl',
      width: 350,
    },
    {
      name: 'invokeType',
      width: 120,
      align: 'center',
      renderer: ({ value, record }) =>
        TagRender(value, INVOKE_TYPE_TAGS, record.get('invokeTypeMeaning')),
    },
    {
      name: 'asyncFlag',
      width: 100,
      align: 'center',
      renderer: ({ value, record }) =>
        TagRender(value, ASYNC_FLAG_TAGS, record?.get('asyncFlagMeaning')),
    },
    { name: 'sourceSystem',
     width: 100 },
    { name: 'interfaceProvider',
     width: 150 },
    { name: 'interfaceConsumer',
     width: 150 },
    { name: 'sourceDocumentNum',
     width: 150 },
    { name: 'sourceDocumentIdStr',
     width: 150 },
    {
      name: 'responseStatus',
      width: 130,
      align: 'center',
      renderer: ({ value, record }) =>
        TagRender(value, RESPONSE_STATUS_TAGS, record?.get('responseStatusMeaning')),
    },
    {
      name: 'businessState',
      width: 100,
      align: 'center',
      renderer: ({ value, record }) =>
        TagRender(value, BUSINESS_STATUS_TAGS, record?.get('businessStateMeaning')),
    },
    {
      name: 'responseTime',
      width: 160,
    },
    {
      name: 'interfaceResponseTime',
      width: 120,
    },
    !isTenant && {
      name: 'sourceTenantName',
      width: 180,
    },
    isTenant && {
      name: 'interfaceSource',
      width: 100,
      align: 'center',
      renderer: ({ value, record }) =>
        TagRender(value, SOURCE_TYPE_TAG, record.get('interfaceSourceMeaning')),
    },
    {
      name: 'invokeKeyValue',
      width: 150,
    },
    {
      name: 'sdkInvokeFlag',
      width: 120,
      renderer: ({ value }) => yesOrNoRender(value),
      align: 'center',
    },

    {
      header: INTERFACE_LOG_LANG.OPERATOR(),
      width: 100,
      lock: 'right',
      renderer: ({ record }) => {
        const actions = [
          {
            ele: (
              <ButtonPermission
                type="text"
                onClick={() => handleGotoDetail(record.get('interfaceLogId'))}
              >
                {INTERFACE_LOG_LANG.VIEW_DETAIL()}
              </ButtonPermission>
            ),
            key: 'detail',
            len: 2,
            title: INTERFACE_LOG_LANG.VIEW_DETAIL(),
          },
          {
            ele: (
              <ButtonPermission type="text" onClick={() => handleRetry(record)}>
                {INTERFACE_LOG_LANG.RETRY()}
              </ButtonPermission>
            ),
            key: 'retry',
            len: 2,
            title: INTERFACE_LOG_LANG.RETRY(),
          },
        ];
        return c7nOperatorRender(actions, record);
      },
    },
  ]`;
const targetList = [
  "requestTime",
  "sourceSystem",
  "sourceDocumentNum",
  "responseStatus",
  "businessState",
  "responseTime",
  "responseCode",
];
let arr = a.split("\n").map((i) => i.trim());
let c = arr.map((ele) => {
  if (ele.indexOf("name:") > -1) {
    const name = ele.split(`'`)[1];
    if (targetList.includes(name)) {
      //   console.log(ele);
      return ele + "sortable: true,";
    }
    // console.log(name);
  }
  return ele;
});
let data = c.join("\n");
console.log(data);
