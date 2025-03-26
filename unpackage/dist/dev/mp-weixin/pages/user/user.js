"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_user_toplist2 = common_vendor.resolveComponent("user-toplist");
  const _easycom_user_underlist2 = common_vendor.resolveComponent("user-underlist");
  (_easycom_user_toplist2 + _easycom_user_underlist2)();
}
const _easycom_user_toplist = () => "../../components/user-toplist/user-toplist2.js";
const _easycom_user_underlist = () => "../../components/user-underlist/user-underlist.js";
if (!Math) {
  (_easycom_user_toplist + _easycom_user_underlist)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
