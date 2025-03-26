"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const queryParams = {
      pageNum: 1,
      pageSize: 12
    };
    common_vendor.onLoad((data) => {
      let { id = null, name = null } = data;
      queryParams.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    const noData = common_vendor.ref(true);
    common_vendor.onReachBottom(() => {
      if (noData.value === false) {
        return;
      }
      queryParams.pageNum++, getClassList();
    });
    const classList = common_vendor.ref([]);
    const getClassList = async () => {
      let res = await api_apis.apiGetClassList(queryParams);
      classList.value = [...classList.value, ...res.data];
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:62", res.data);
      if (queryParams.pageSize > res.data.length) {
        noData.value = false;
      }
      common_vendor.index.setStorageSync("storageClassList", classList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && noData.value === true
      }, !classList.value.length && noData.value === true ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: `/pages/preview/preview?id=${item._id}`,
            c: item._id
          };
        }),
        d: classList.value.length === true
      }, classList.value.length === true ? {
        e: common_vendor.p({
          status: "noData?'loading':'noMore'"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classlist/classlist.js.map
