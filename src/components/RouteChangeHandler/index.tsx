'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {useConfigStore} from '@/stores'
import {Web} from '@/types/app/config'
import GrayscaleController from '@/utils/ grayscale-mode'

// 监听路由变化
const RouteChangeHandler: React.FC = () => {
    const web: Web = useConfigStore(state => state.web)
    const pathname = usePathname();

    if (typeof document !== 'undefined') {
        // 网站变灰
        new GrayscaleController()
        // 保存原始标题
        const originalTitle = document.title;
        const favicon: HTMLLinkElement | null = document.querySelector('link[rel="icon"]');
        const originalFavicon = favicon ? (favicon as HTMLLinkElement).href : '';

        // 配置选项
        const titleConfig = {
            awayPrefix: '🔙 ',
            awayText: web?.leaveTitle,
            blinkInterval: 800, // 闪烁间隔时间(ms)
            notificationFavicon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmY1MDAwIiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0MzJoLTg0bDY0IDEwNGwtMzIgMzJoMTA0bDMtMzJsNjQgMTA0aC04NGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ2LTEyOGMwLTE3LjctMTQuMy0zMi0zMi0zMkg4MGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDE3NmM4LjkgMCAxNi40LTMuNSAyMi43LTkuOGw2NC42LTY0LjZjNi4zLTYuMyA5LjgtMTMuOCA5LjgtMjIuN3YtMTI4YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0xMjggMTU2aC00OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg0OGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNHoiLz48L3N2Zz4='
        };

        let blinkTimer: string | number | NodeJS.Timeout | null | undefined = null;
        let isAway = !web?.dynamicTitle;

        // 切换到离开状态的标题
        function setAwayTitle() {
            if (isAway) return;

            isAway = true;
            let isBlinkState = false;

            // 改变favicon作为视觉提示
            if (favicon) {
                favicon.href = titleConfig.notificationFavicon;
            }

            // 清除可能存在的计时器
            if (blinkTimer) clearInterval(blinkTimer);

            // 设置闪烁效果
            blinkTimer = setInterval(() => {
                isBlinkState = !isBlinkState;
                document.title = isBlinkState
                    ? `${titleConfig.awayPrefix}${titleConfig.awayText}`
                    : titleConfig.awayText;
            }, titleConfig.blinkInterval);
        }

        // 恢复原始标题
        function restoreOriginalTitle() {
            if (!isAway) return;

            isAway = false;
            // 清除计时器
            if (blinkTimer) {
                clearInterval(blinkTimer);
                blinkTimer = null;
            }

            // 恢复标题和favicon
            document.title = originalTitle;
            if (favicon && originalFavicon) {
                favicon.href = originalFavicon;
            }
        }

        // 监听页面可见性变化
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                setAwayTitle();
            } else {
                restoreOriginalTitle();
            }
        });

        // 监听窗口焦点变化（作为补充）
        window.addEventListener('blur', setAwayTitle);
        window.addEventListener('focus', restoreOriginalTitle);
    }


    // 每次切换页面滚动到顶部
    useEffect(() => {
        // 尊重开源，禁止删除此版权信息！！！
        console.log(`%c 博客系统 %c ThriveX `, 'background: #35495e; padding: 4px; border-radius: 3px 0 0 3px; color: #fff', 'background: #539dfd; padding: 4px; border-radius: 0 3px 3px 0; color: #fff');
        console.log('🚀 欢迎使用 ThriveX 现代化博客管理系统');
        console.log('🎉 开源地址：https://github.com/LiuYuYang01/ThriveX-Blog');
        console.log('🏕 作者主页：https://liuyuyang.net');
        console.log('🌟 觉得好用的话记得点个 Star 哦 🙏');

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default RouteChangeHandler;
