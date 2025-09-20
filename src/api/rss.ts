import { Rss } from '@/types/app/rss';
import Request from '@/utils/request';

// 获取订阅数据列表
export const getRssListAPI = (data?: QueryData) => Request<Rss[]>('GET', `/rss/list`, {
    data: { ...data?.query },
})