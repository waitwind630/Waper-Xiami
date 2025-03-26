"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getstatusBarHeight = function() {
  return SYSTEM_INFO.statusBarHeight || 15;
};
const getTitleBarHeight = function() {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    let titleBarHeight = height + (top - getstatusBarHeight()) * 2;
    return titleBarHeight;
  } else {
    return 40;
  }
};
const getFillHeight = common_vendor.computed(() => {
  return getstatusBarHeight() + getTitleBarHeight() + "px";
});
exports.getFillHeight = getFillHeight;
exports.getTitleBarHeight = getTitleBarHeight;
exports.getstatusBarHeight = getstatusBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/hooks/system.js.map
