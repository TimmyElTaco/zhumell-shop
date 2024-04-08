import { useState } from "react";

export default function Gallery({ images }) {
    const [url, setUrl] = useState(images[0]);

    const handleClick = (e) => {
        setUrl(e.target.src)
    }

    return (
        <article className="flex flex-col w-full h-full p-4 lg:p-14 justify-center items-center gap-8">
            <img src={url} className="h-[380px] w-[380px] object-cover rounded-md" />
            <div className="h-1/3 flex gap-4 items-center">
                {
                    images.map((image, i) => {
                        if(image === url) {
                            return (
                                <img key={i} src={image} className="h-[78px] w-[78px] object-cover rounded-md border-4 border-blue-400 border-opacity-60 cursor-pointer transition-all duration-150" onClick={handleClick} />
                            )
                        }
                        return (
                            <img key={i} src={image} className="h-[80px] w-[80px] object-cover rounded-md cursor-pointer" onClick={handleClick} />
                        )
                    })
                }
            </div>
        </article>
    )
}