'use client';

import {useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import {useConfigStore} from '@/stores'
import {Web} from '@/types/app/config'
import GrayscaleController from '@/utils/grayscale-mode'

// 监听路由变化
const RouteChangeHandler: React.FC = () => {
    const web: Web = useConfigStore((state) => state.web);
    const pathname = usePathname();
    const titleTimer = useRef<NodeJS.Timeout | null>(null);
    const originalTitle = useRef<string>('');

    if (typeof document !== 'undefined') {
        // 网站变灰
        new GrayscaleController();
        // 保存原始标题
        originalTitle.current = document.title;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = web.leaveTitle;
                if (titleTimer.current) clearTimeout(titleTimer.current);
            } else {
                document.title = web.backTitle;
                titleTimer.current = setTimeout(() => {
                    document.title = originalTitle.current;
                }, 2000);
            }
        };
        if (web.dynamicTitle) {
            document.addEventListener('visibilitychange', handleVisibilityChange);
        } else {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (titleTimer.current) clearTimeout(titleTimer.current);
        }
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
