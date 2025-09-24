'use client';

import {useEffect, useRef} from 'react';
import {useConfigStore} from '@/stores';

export default function DynamicTitleHandler() {
    const web = useConfigStore((state) => state.web);

    const titleTimer = useRef<NodeJS.Timeout | null>(null);
    const originalTitle = useRef<string>('');

    useEffect(() => {
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
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (titleTimer.current) clearTimeout(titleTimer.current);
        };
    }, [web]);

    return null;
}
