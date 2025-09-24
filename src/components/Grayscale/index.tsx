'use client';

import {useEffect} from 'react';
import {useConfigStore} from '@/stores';
import GrayscaleController from '@/utils/grayscale-mode';

export default function GrayscaleModeHandler() {
    const web = useConfigStore((state) => state.web);

    useEffect(() => {
        // 网站变灰
        const gr = new GrayscaleController(web?.grayscaleDates);
        return () => {
            // 网站恢复
            gr.disableGrayscale();
        };
    }, [web]);

    return null;
}
