
export default function System() {

    return (
        <div className="flex flex-col justify-center items-center relative animate-fade">
            <div className="bg-red-500 h-6 w-6 top-auto right-36 absolute rounded-full animate-jump-in">
                <div className="w-10 absolute h-1 bg-red-400 rounded-full top-[10px] -left-2 -rotate-[30deg]"></div>
            </div>    
            <div className="w-6 h-6 bg-white absolute top-10 rounded-full"></div>
            <div className="w-4 h-4 bg-white absolute top-30 -left-28 rounded-full"></div>
            <div className="w-3 h-3 bg-white absolute bottom-24 -left-9 rounded-full"></div>
            <div className="w-2 h-2 bg-white absolute bottom-20 right-1 rounded-full"></div>
            <div className="place-self-center w-96 h-96 bg-white rounded-full"></div>
        </div>
    )
}