 export default function formatTimeDifference(timestamp) {
    const now = Date.now();
    const diff = (now - timestamp) / 1000; // 将时间差转换为秒

    if (diff < 60) {
        return "小于一分钟";
    } else if (diff < 3600) { // 一小时=3600秒
        return `${Math.floor(diff / 60)}分钟`;
    } else if (diff < 86400) { // 一天=86400秒
        return `${Math.floor(diff / 3600)}小时`;
    } else if (diff < 2592000) { // 一个月约等于30天, 30*86400=2592000秒
        return `${Math.floor(diff / 86400)}天`;
    } else if (diff < 7776000) { // 三个月约等于90天, 90*86400=7776000秒
        return "更新时间已超过3个月";
    } else {
        return "更新时间已超过3个月";
    }
}

// 示例用法：
// const timestamp = Date.now() - (5 * 60 * 1000); // 五分钟前的时间戳
// console.log(formatTimeDifference(timestamp)); // 输出: 5分钟