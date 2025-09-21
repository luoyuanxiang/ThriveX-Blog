import Slide from '@/components/Slide';
import Typed from '@/components/Typed';
import Starry from '@/components/Starry';
import Container from '@/components/Container';
import ArticleLayout from '@/components/ArticleLayout';
import Sidebar from '@/components/Sidebar';

import {getWebConfigDataAPI} from '@/api/config';
import {Theme, Web} from '@/types/app/config';
import Lantern from '@/components/Lantern';

interface Props {
    searchParams: Promise<{ page: number }>;
}

export default async (props: Props) => {
    const searchParams = await props.searchParams;
    const page = searchParams.page || 1;
    const {
        data: {value: theme},
    } = (await getWebConfigDataAPI<{ value: Theme }>('theme')) || {data: {value: {} as Theme}};

    const {
        data: {value: web},
    } = (await getWebConfigDataAPI<{ value: Web }>('web')) || {data: {value: {} as Web}};
    return (
        <>
            {web?.lantern && <Lantern data={['新', '春', '快', '乐']}/>}

            <Slide src={theme?.swiper_image}>
                {/* 星空背景组件 */}
                <Starry/>
                {/* 打字机组件 */}
                <Typed
                    className="absolute top-[45%] sm:top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white xs:text-xl sm:text-[30px] leading-7 sm:leading-[40px] md:leading-[50px] custom_text_shadow"></Typed>
            </Slide>

            <Container>
                {/* 文章列表 */}
                <ArticleLayout page={page}/>
                {/* 侧边栏 */}
                <Sidebar/>
            </Container>
        </>
    );
};
