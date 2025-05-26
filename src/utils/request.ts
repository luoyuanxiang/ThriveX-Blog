// 最新调整：在 .env 文件中配置项目后端 API 地址
const url = process.env.NEXT_PUBLIC_PROJECT_API
// 配置页面缓存时间
const cachingTime = +process.env.NEXT_PUBLIC_CACHING_TIME!

export default async <T>(method: string, api: string, data?: any, caching = true) => {
    try {
        const res = await fetch(`${url}/web${api}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            [method === "POST" ? "body" : ""]: JSON.stringify(data ? data : {}),
            next: { revalidate: caching ? cachingTime : 0 }
        })
        const result = await res?.json() as Promise<ResponseData<T>>;
        console.log("请求成功：", `${url}/web${api}`, result);
        return result;
    } catch (error) {
        console.log("捕获到异常：", error);
    }
}
