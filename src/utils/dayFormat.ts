const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const localeData = require('dayjs/plugin/localeData');
const updateLocale = require('dayjs/plugin/updateLocale');

dayjs.extend(relativeTime);
dayjs.extend(localeData);
dayjs.extend(updateLocale);

// 更新 locale 配置以自定义显示
dayjs.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s前',
        s: '几秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    }
});

export default function dayFormat(timestamp: number | string) {
    const now = dayjs();
    const target = dayjs(+timestamp);

    if (now.isSame(target, 'day')) {
        return '今天';
    } else if (now.subtract(1, 'day').isSame(target, 'day')) {
        return '昨天';
    } else if (now.subtract(2, 'day').isSame(target, 'day')) {
        return '前天';
    } else {
        return target.fromNow();
    }
}