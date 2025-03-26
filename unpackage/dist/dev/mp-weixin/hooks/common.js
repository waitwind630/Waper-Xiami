"use strict";
function formatTimeDifference(timestamp) {
  const now = Date.now();
  const diff = (now - timestamp) / 1e3;
  if (diff < 60) {
    return "小于一分钟";
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)}分钟`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}小时`;
  } else if (diff < 2592e3) {
    return `${Math.floor(diff / 86400)}天`;
  } else if (diff < 7776e3) {
    return "更新时间已超过3个月";
  } else {
    return "更新时间已超过3个月";
  }
}
exports.formatTimeDifference = formatTimeDifference;
//# sourceMappingURL=../../.sourcemap/mp-weixin/hooks/common.js.map
