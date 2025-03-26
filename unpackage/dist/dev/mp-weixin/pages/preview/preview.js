"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_system = require("../../hooks/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref();
    const scorePopup = common_vendor.ref();
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref();
    const currentIndex = common_vendor.ref(0);
    const currentInfo = common_vendor.ref([]);
    const readImgs = common_vendor.ref([]);
    common_vendor.onLoad((data) => {
      currentId.value = data.id;
      currentIndex.value = classList.value.findIndex((item) => {
        if (item._id == currentId.value) {
          return item._id;
        }
      });
      readImgfun();
      currentInfo.value = classList.value[currentIndex.value];
    });
    function readImgfun() {
      readImgs.value.push(currentIndex.value - 1, currentIndex.value, currentIndex.value + 1);
      readImgs.value = [...new Set(readImgs.value)];
    }
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      readImgfun();
    };
    const storageClassList = common_vendor.index.getStorageSync("storageClassList") || [];
    classList.value = storageClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    function onChange() {
    }
    function clickInfo() {
      infoPopup.value.open();
    }
    const clickInfoClose = function clickInfoClose2() {
      infoPopup.value.close();
    };
    const clickScore = function clickScore2() {
      scorePopup.value.open();
    };
    const clickScoreClose = function clickScoreClose2() {
      scorePopup.value.close();
    };
    const sumbitScore = async function sumbitScore2() {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:224", userScore.value);
      currentInfo.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const clickDownLoad = () => {
      common_vendor.index.getImageInfo({
        //获取临时地址
        src: currentInfo.value.picurl,
        success: (res) => {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.path,
            success: (res2) => {
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.unref(hooks_system.getstatusBarHeight)() + "px",
        g: common_vendor.o(goBack),
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(classList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.t(userScore.value),
        p: common_vendor.o(clickScore),
        q: common_vendor.o(clickDownLoad),
        r: common_vendor.p({
          type: "download",
          size: "28"
        })
      } : {}, {
        s: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        t: common_vendor.o(clickInfoClose),
        v: common_vendor.t(currentInfo.value._id),
        w: common_vendor.t(currentInfo.value.nickname),
        x: common_vendor.p({
          readonly: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        y: common_vendor.t(currentInfo.value.score),
        z: common_vendor.t(currentInfo.value.description),
        A: common_vendor.f(currentInfo.value.tabs, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        B: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        C: common_vendor.p({
          type: "bottom"
        }),
        D: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        E: common_vendor.o(clickScoreClose),
        F: common_vendor.o(onChange),
        G: common_vendor.o(($event) => userScore.value = $event),
        H: common_vendor.p({
          allowHalf: "true",
          modelValue: userScore.value
        }),
        I: common_vendor.t(userScore.value),
        J: common_vendor.o(sumbitScore),
        K: !userScore.value,
        L: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        M: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
