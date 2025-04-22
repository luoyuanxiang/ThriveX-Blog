import ImageList from "./components/ImageList"
import { getRecordPagingAPI } from '@/api/record'
import { getUserDataAPI } from '@/api/user';
import { Record } from "@/types/app/record"
import { User } from "@/types/app/user";
import { dayFormat } from '@/utils'
import Pagination from "@/components/Pagination";
import Empty from "@/components/Empty";
import Show from "@/components/Show";
import { getConfigDataAPI } from "@/api/project";
import { Theme } from "@/types/app/project";

interface Props {
  searchParams: Promise<{ page: number }>;
};

export default async (props: Props) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page || 1;

  const { data: user } = (await getUserDataAPI()) || { data: {} as User }
  const { data: record } = (await getRecordPagingAPI({ pagination: { page, size: 8 } })) || { data: {} as Paginate<Record[]> }
  const { data: theme } = (await getConfigDataAPI<Theme>("layout")) || { data: {} as Theme }

  return (
    <>
      <div className="bg-[linear-gradient(to_right,#fff1eb_0%,#d0edfb_100%)] dark:bg-[linear-gradient(to_right,#232931_0%,#232931_100%)]">
        <div className="w-full lg:w-[800px] px-6 lg:px-0 mx-auto pt-24 pb-10">
          <div className="flex items-center flex-col p-4 mb-10 border dark:border-black-b rounded-lg bg-white dark:bg-black-b bg-[url('https://bu.dusays.com/2024/11/27/6746e3ec88c4f.jpg')] bg-no-repeat bg-center bg-cover transition-colors">
            <img src={user.avatar} alt="作者头像" width={80} height={80} className="rounded-full avatar-animation shadow-[5px_11px_30px_20px_rgba(255,255,255,0.3)]" />
            <h2 className="my-2 text-white">{theme.record_name}</h2>
            <h4 className="text-xs text-gray-300">{theme.record_info}</h4>
          </div>

          <div className="space-y-12">
            {
              !!record?.result?.length && record?.result.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row">
                  <img src={user.avatar} alt="作者头像" width={56} height={56} className="hidden sm:block rounded-lg border dark:border-black-b h-14 mr-2 transition-colors" />

                  <div className="flex sm:hidden">
                    <img src={user.avatar} alt="作者头像" width={44} height={44} className="rounded-lg border dark:border-black-b h-11 mr-2 transition-colors" />

                    <div className="flex sm:hidden items-center my-1.5 ml-2 space-x-4">
                      <h3>{user.name}</h3>
                      <span className="text-xs">{dayFormat(item.createTime)}</span>
                    </div>
                  </div>

                  <div className="mt-2 sm:mt-0 w-full">
                    <div className="hidden sm:flex items-center my-1.5 ml-4 space-x-4">
                      <h3>{user.name}</h3>
                      <span className="text-xs">{dayFormat(item.createTime)}</span>
                    </div>

                    <div className="w-full p-4 border dark:border-black-b rounded-3xl rounded-tl-none bg-white dark:bg-black-b transition-colors">
                      <p className="text-gray-600 dark:text-white transition-colors">{item.content}</p>

                      <ImageList list={JSON.parse(item?.images as string || '[]')} />
                      {/* <Comment /> */}
                    </div>
                  </div>
                </div>
              ))
            }

            <Show is={!record?.result?.length} children={<Empty info='闪念列表为空~' />} />
          </div>

          <Pagination total={record?.pages} page={page} className="flex justify-center mt-5" />
        </div>
      </div>
    </>
  )
};