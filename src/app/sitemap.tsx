import {MetadataRoute} from 'next'
import {getArticleListAPI} from '@/api/article'
import {Article} from "@/types/app/article";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // 动态页面（例如从CMS获取博客列表）
    const { data } = await getArticleListAPI() || { data: [] as Article[] }
    const dynamicRoutes = data.map((post: Article) => ({
        url: `https://luoyuanxiang.top/article/${post.id}`,
        lastModified: new Date(Number(post.createTime)),
    }))
    return [...dynamicRoutes]
}