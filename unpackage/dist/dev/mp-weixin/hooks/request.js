"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://tea.qingnian8.com";
function request(config = {}) {
  let {
    url,
    method = "GET",
    header = {},
    data = {}
  } = config;
  url = BASE_URL + url;
  header["assess-key"] = "476320";
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      header,
      method,
      data,
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/hooks/request.js.map
