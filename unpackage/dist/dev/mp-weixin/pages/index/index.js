"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + commonTitle + _easycom_theme_item)();
}
const commonTitle = () => "../../components/common-title/common-title.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goPreview = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    const bannerList = common_vendor.ref([]);
    const getBanner = async () => {
      let res = await api_apis.apiGetBanner({ size: "5" });
      bannerList.value = res.data;
    };
    getBanner();
    const selectList = common_vendor.ref([]);
    const getDayselect = async () => {
      let res = await api_apis.apigetDayselect();
      selectList.value = res.data;
    };
    getDayselect();
    const noticeList = common_vendor.ref([]);
    const getNoticeList = async () => {
      let res = await api_apis.apiGetNotice({ size: "5" });
      noticeList.value = res.data;
    };
    getNoticeList();
    const classifyList = common_vendor.ref([]);
    const getClassifyList = async () => {
      let res = await api_apis.apiGetClassifytList({
        select: true
      });
      classifyList.value = res.data;
      common_vendor.index.__f__("log", "at pages/index/index.vue:144", classifyList.value);
    };
    getClassifyList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.keyword),
            b: item.rank
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "26"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        h: common_vendor.f(selectList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: common_vendor.o(($event) => goPreview(), item._id),
            c: item._id
          };
        }),
        i: common_vendor.f(classifyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              isMore: false,
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
