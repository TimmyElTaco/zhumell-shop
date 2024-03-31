export default function Division({ intersection }) {
    return (
        <>
            <div 
                className={`absolute w-2 h-2 bg-white rounded-full top-[210px] ${intersection ? 'scale-100' : 'scale-0'} transition-transform duration-500`} 
                style={{
                    boxShadow: '0px 0px 10px 5px white'
                }} 
            />
            <div 
                className={`absolute top-[213px] w-1/2 h-[1px] bg-white bg-opacity-25 ${intersection ? 'scale-100' : 'scale-0'} transition-transform duration-700`} 
            />
        </>
    )
}