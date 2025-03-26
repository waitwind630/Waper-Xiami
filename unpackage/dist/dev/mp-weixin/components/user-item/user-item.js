"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user-item",
  props: {
    customStyle: {
      type: String,
      //默认类型使object
      default: " border-bottom: 10rpx solid #eee;"
      //这里为什么使用箭头函数？
      //设置 customStyle prop 的默认值为一个空对象。
      //这里使用了一个函数来返回默认值，这是因为在 Vue 中，
      //对象类型的默认值需要是一个函数，
      //以避免所有组件实例共享同一个对象实例。
    },
    isShowdata: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    let all = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(all).isShowdata,
        b: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        c: common_vendor.s(common_vendor.unref(all).customStyle)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1041c623"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/user-item/user-item.js.map
