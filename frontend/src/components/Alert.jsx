export default function Alert({ message }) {

    if(!message) return;

    return (
        <div className="text-center w-full py-2 bg-red-600 bg-opacity-15 rounded-lg border-red-600 border-[1px] border-opacity-30 text-red-200">
            {message}
        </div>
    )
}