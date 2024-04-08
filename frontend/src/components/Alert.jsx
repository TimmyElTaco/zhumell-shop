export default function Alert({ message, error = true }) {

    if(!message) return;

    return (
        <div className={`text-center w-full py-2 ${error ? 'bg-red-600 border-red-600 text-red-200' : 'bg-green-600 border-green-600 text-green-200'} bg-opacity-15 rounded-lg border-[1px] border-opacity-30 text-red-200`}>
            {message}
        </div>
    )
}