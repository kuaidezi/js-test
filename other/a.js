const fn = (obj1, obj2) => {
  const keyList = Object.keys(obj2.properties);
  requiredList = keyList.filter((i) => obj1.required?.includes(i));
   
  if(requiredList.length>0){
    obj2.required = requiredList
  }
  Object.keys(obj1.properties).forEach((key) => {
    if (obj1.properties[key]?.type === obj2.properties[key]?.type) {
      if (
        obj1.properties[key]?.type === "array" &&
        obj1.properties[key]?.items?.type === "object"
      ) {
        fn(obj1.properties[key]?.items, obj2.properties[key]?.items);
      } else if (obj1.properties[key].type === "object") {
        fn(obj1.properties[key], obj2.properties[key]);
      } else {
        Object.assign(obj2.properties[key], obj1.properties[key]);
      }
    }
  });
};

let a = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    d: {
      type: "number",
      minimum: 1,
      maximum: 4,
      default: "fd",
    },
    arr: {
      type: "array",
      items: {
        type: "object",
        properties: {
          c: {
            type: "number",
          },
          agv: {
            type: "array",
            items: {
              type: "string",
              enum: ["d"],
              enumDesc: "d",
              format: "date-time",
              default: "sd",
              minLength: 4,
              maxLength: 4,
              pattern: "34",
            },
          },
        },
      },
    },
  },
};
let b = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    d: {
      type: "number",
    },
    dddddddd: {
      type: "number",
    },
    arr: {
      type: "array",
      items: {
        type: "object",
        properties: {
          c: {
            type: "number",
          },
          ccccccccccc: {
            type: "number",
          },
          agv: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
  },
};
fn(a, b);
console.log(b);
