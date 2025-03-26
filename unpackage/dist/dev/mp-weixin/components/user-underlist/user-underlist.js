"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + userItem)();
}
const userItem = () => "../user-item/user-item.js";
const customStyle = "border-bottom: 0;";
const _sfc_main = {
  __name: "user-underlist",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        b: common_vendor.p({
          isShowdata: false
        }),
        c: common_vendor.p({
          type: "flag-filled",
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efb879be"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/user-underlist/user-underlist.js.map
