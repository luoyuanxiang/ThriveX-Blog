"use client"

import { PhotoProvider, PhotoView } from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css';

interface Props {
    list: string[]
}

export default ({ list }: Props) => {
    return (
        <>
            <div className={`flex justify-center ${list.length && 'mt-4'} w-full sm:w-3/6`}>
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div className={`grid gap-2 ${list.length === 1 ? 'justify-center' : 'grid-cols-2'}`}>
                        {
                            list?.map((url, index) => (
                                <PhotoView key={index} src={url}>
                                    <img src={url} alt="闪念图片" className="rounded-2xl w-full h-full object-cover cursor-pointer" />
                                </PhotoView>
                            ))
                        }
                    </div>
                </PhotoProvider>
            </div>
        </>
    )
}