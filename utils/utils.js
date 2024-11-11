/**
 * 内容大小进制转换
 */
const formatSizeUnits = (kbNumber) => {
  let units = ["KB", "MB", "GB", "TB", "PB"];
  let unitIndex = 0;

  let num = kbNumber;
  while (num >= 1024 && unitIndex <= units.length) {
    num = num / 1024;
    unitIndex++;
  }
  return `${num.toFixed(2)} ${units[unitIndex]}`;
};

const formatTimeUnits = (msNumber) => {
  const units = ["ms", "s", "min", "hours", "days", "weeks", "months", "years"];

  // 创建一个映射对象，将时间单位映射到它们对应的毫秒数
  const unitToMilliseconds = {
    ms: 1,
    s: 1000,
    min: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    weeks: 7 * 24 * 60 * 60 * 1000,
    months: 30 * 24 * 60 * 60 * 1000, // 注意：这里假设一个月是30天，实际可能需要根据具体情况调整
    years: 365 * 24 * 60 * 60 * 1000, // 注意：这里假设一年是365天，实际可能需要根据闰年等情况调整
  };

  let size = msNumber;
  const resultList = [];

  for (let index = units.length - 1; index >= 0; index--) {
    const ele = units[index];
    const sum = unitToMilliseconds[ele];
    if (size >= sum) {
      resultList.push(`${Math.floor(size / sum)} ${ele}`);
      size = size % sum;
    }
  }
  return resultList.join(" ");
};
