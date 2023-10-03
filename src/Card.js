export function Card({data:{setup,punchline}}){
    return (
        <div className="flex flex-col text-center space-y-5 pt-12 pb-7 px-4 bg-white rounded-lg shadow-lg shadow-gray-600">
            <p className="font-bold text-2xl max-w-sm">{setup}</p>
            <span>{punchline}</span>
        </div>
    )
}