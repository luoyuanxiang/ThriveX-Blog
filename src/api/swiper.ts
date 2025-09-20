import Request from '@/utils/request'
import { Swiper } from '@/types/app/swiper'

// 获取轮播图数据列表
export const getSwiperListAPI = () => Request<Swiper[]>('POST', `/swiper/list`)