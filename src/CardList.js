import {Card} from './Card'
export function CardList({data}){
    
    return (
        <div className='flex justify-center space-x-5'>
            {data.map(v=> <Card data={v}/> )}
        </div>
    )
}