export default function Modal({ show = false, title, body, children }) {

    return (
        <div className={`box-border fixed grid top-0 w-screen h-screen ${show ? 'scale-100' : 'scale-0'} z-30`}>
            <div className="absolute bg-black bg-opacity-60 w-screen h-screen z-10 top-0 left-0" />
            <div className="absolute bg-black w-auto h-auto rounded-md border-2 border-white border-opacity-25 z-20 p-6 flex flex-col gap-6 place-self-center">
                <h2 className="text-2xl text-center font-semibold">{title}</h2>
                <p className="text-lg text-pretty text-gray-300">
                    {body}
                </p>
                <footer className="flex justify-around">
                    {children}
                </footer>
            </div>
        </div>
    )
    
}