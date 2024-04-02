export default function Division({ intersection = true }) {
    return (
        <>
            <div className="h-2 w-1/2 flex items-center">
                <div 
                    className={`w-1/2 h-[1px] bg-white bg-opacity-25 ${intersection ? 'scale-100' : 'scale-0'} transition-transform duration-700`} 
                />
                <div 
                    className={`w-2 h-2 bg-white rounded-full ${intersection ? 'scale-100' : 'scale-0'} transition-transform duration-500`} 
                    style={{
                        boxShadow: '0px 0px 10px 5px white'
                    }} 
                />
                <div 
                    className={`w-1/2 h-[1px] bg-white bg-opacity-25 ${intersection ? 'scale-100' : 'scale-0'} transition-transform duration-700`} 
                />
            </div>
        </>
    )
}