"use strict";
const common_vendor = require("./common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "./uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + userItem)();
}
const userItem = () => "./components/user-item/user-item.js";
const customStyle = "border-bottom: 0;";
const _sfc_main = {
  __name: "user-toplist",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        b: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        c: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        d: common_vendor.p({
          customStyle,
          isShowdata: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6847755f"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/user-toplist.js.map
