"use strict";
const hooks_request = require("../hooks/request.js");
function apiGetBanner(data = {}) {
  return hooks_request.request({
    url: "/tools/petShow",
    data
  });
}
function apigetDayselect(data = {}) {
  return hooks_request.request({
    url: "/api/bizhi/randomWall"
  });
}
function apiGetNotice(data = {}) {
  return hooks_request.request({
    url: "/tools/baiduHot",
    data
  });
}
function apiGetClassifytList(data = {}) {
  return hooks_request.request({
    url: "/api/bizhi/classify",
    data
  });
}
function apiGetClassList(data = {}) {
  return hooks_request.request({
    url: "/api/bizhi/wallList",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassifytList = apiGetClassifytList;
exports.apiGetNotice = apiGetNotice;
exports.apigetDayselect = apigetDayselect;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
