import bg from '@/assets/image/bg.png'
import { MyData } from '@/types/app/my'

import Goals from './component/Goals'
import Character from './component/Character'
import Map from './component/Map'
import Technology from './component/Technology'
import Project from './component/Project'
import Calendar from "./component/Calendar"
import InfoTwo from './component/InfoTwo'

export default () => {
  const data: MyData = {
    info: {
      name: "Liu YuYang",
      avatar: 'https://q.qlogo.cn/g?b=qq&nk=3311118881&s=640',
      profession: "一名Web全栈开发工程师",
      introduction: "我从小就对计算机编程技术有着无穷的兴趣，所以我的梦想是做一名技术顶尖的 架构师，因此我一直在朝着这个方向去努力、去坚持 直到梦想成真！",
    },
    infoTwo: {
      author: '宇阳',
      avatar_url: 'https://q.qlogo.cn/g?b=qq&nk=3311118881&s=640',
      left_tags: [
        '🤖️ 数码科技爱好者',
        '🔍 分享与热心帮助',
        '💻 全栈开发工程师'
      ],
      right_tags: [
        '源于热爱而发电 ✨',
        '开源项目作者 🥳',
        '热爱漫无边际 🎉'
      ],
      know_me: "https://liuyuyang.net/article/2227"
    },
    character: [
      {
        value: 54,
        text1: "内向",
        text2: "外向",
        content: "内向型的人往往更喜欢较少但深入和有意义的社交互动，通常更喜欢安静的环境。",
        color: "#4298b4"
      },
      {
        value: 41,
        text1: "现实",
        text2: "有远见",
        content: "有远见型的人非常富有想象力、思想开放并充满好奇心。他们重视原创性，专注于隐含的意义和遥远的可能性。",
        color: "#e4ae3a"
      },
      {
        value: 41,
        text1: "感受",
        text2: "理性分析",
        content: "感受型的人重视情感表达和敏感性。他们非常重视同理心、社会和谐及合作。",
        color: "#33a474"
      },
      {
        value: 79,
        text1: "展望",
        text2: "评判",
        content: "评判型的人果断、周到，很有条理。他们重视清晰度、可预测性和封闭性，更喜欢结构和计划，而不是自发性。",
        color: "#88619a"
      },
      {
        value: 78,
        text1: "起伏不定",
        text2: "坚决",
        content: "起伏不定型的人自我意识强，对压力敏感。他们在情绪上有一种紧迫感，往往以成功为导向，追求完美，渴望进步。",
        color: "#f25e62"
      },
    ],
    goals: [
      {
        status: 3,
        value: "1、涨薪2k！！！"
      },
      {
        status: 1,
        value: "2、提高前端技术栈深度"
      },
      {
        status: 1,
        value: "3、提高后端技术栈深度与广度，往后端迁移"
      },
      {
        status: 1,
        value: "4、ThriveX 博客管理系统 ⭐️ 破千"
      },
      {
        status: 1,
        value: "5、ThriveX 最低要求保持周更"
      },
      {
        status: 1,
        value: "6、输出 30 篇高质量技术博客"
      }
    ],
    project: [
      {
        name: "ThriveX",
        images: [
          "https://bu.dusays.com/2024/09/17/66e9704b2b809.png",
          "https://bu.dusays.com/2024/09/17/66e97036dddcb.png",
          "https://bu.dusays.com/2024/09/17/66e97035726ae.png",
          "https://bu.dusays.com/2024/09/17/66e97031cd456.png"
        ],
        description: "🎉 ThriveX 相比旧版 Thrive 的核心改变是从 Vue 全面迁移到了 React 技术栈并采用了 Nextjs 服务端渲染技术进行全方面重构，对SEO方面有了显著的提高。并且还新增了很多额外的功能...",
        front: {
          technology: "NextJS、TypeScript、Zustand、TailwindCSS、Scss、Echarts",
          url: "https://github.com/LiuYuYang01/ThriveX-Blog"
        },
        control: {
          technology: "React、Antd、TypeScript、Zustand、TailwindCSS、Echarts",
          url: "https://github.com/LiuYuYang01/ThriveX-Admin"
        },
        backend: {
          technology: "Spring Boot、Mybatis Plus、MySQL、Redis、Qiniu、Socket.io、Swagger",
          url: "https://github.com/LiuYuYang01/ThriveX-Server"
        },
      },
      {
        name: "Thrive",
        images: [
          "https://bu.dusays.com/2024/09/17/66e96cb4e8417.png",
          "https://bu.dusays.com/2024/09/17/66e96ca366600.png",
          "https://bu.dusays.com/2024/09/17/66e96ca781d49.png",
          "https://bu.dusays.com/2024/09/17/66e96c9e76c81.png"
        ],
        description: "🎉 Thrive 是一个简而不简单的现代化博客管理系统，专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。",
        front: {
          technology: "Vue3、TypeScript、Pinia、Element-plus、Scss、Echarts 、highlight.js",
          url: "https://github.com/LiuYuYang01/Thrive_Blog"
        },
        control: {
          technology: "Vue3、TypeScript、Pinia、Element-plus、Scss",
          url: "https://github.com/LiuYuYang01/Thrive_Admin"
        },
        backend: {
          technology: "Python、Flask、SQLAlchemy、MySQL、Flask-JWT、Socket.io、Swagger",
          url: "https://github.com/LiuYuYang01/Thrive_Server"
        },
      },
      {
        name: "云上校园",
        images: [
          "https://bu.dusays.com/2024/09/18/66ea606eb5aa1.png",
          "https://bu.dusays.com/2024/09/18/66ea605d89df7.png",
          "https://bu.dusays.com/2024/09/18/66ea605ca9f0d.jpg",
        ],
        description: "🎉 云上校园是一个现代化大学生社交平台，该项目的立意是为了打造一个完整的校园生态圈，使校园触手可及!",
        front: {
          technology: "微信小程序、Vant、Echarts、Autojs",
          url: ""
        },
        control: {
          technology: "Vue2、Element UI、vue-element-admin",
          url: ""
        },
        backend: {
          technology: "Nodejs、Eggjs、Socket.io、MySQL",
          url: ""
        },
      },
    ]
  }

  return (
    <>
      <title>关于我</title>
      <meta name="description" content="关于我" />

      <div className="bg-white dark:bg-black-a pt-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="w-[90%] lg:w-[950px] mx-auto">
          {/* <Info data={data?.info} /> */}
          <InfoTwo data={data?.infoTwo} />
        </div>

        <div className='flex justify-center mt-24 px-10'>
          <Calendar />
        </div>

        <div className="flex flex-col md:flex-row w-[90%] sm:w-9/12 mt-52 mx-auto">
          <Character data={data?.character} />
          <Goals data={data?.goals} />
        </div>

        <div className="flex flex-col md:flex-row w-[90%] sm:w-9/12 mt-52 mx-auto">
          <Map />
          <Technology />
        </div>

        <div className="mt-52">
          <Project data={data?.project} />
        </div>

        {/* <div className="mt-52">
          <CurriculumVitae />
        </div> */}
      </div>
    </>
  )
}
