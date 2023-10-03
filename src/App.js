import {data} from './Data'
import { CardList } from './CardList';

function App() {
  
  return (
    <div className='flex flex-col h-screen bg-[#E1F7DD] justify-center items-center'>
     <CardList data={data}/>
    </div>
  );
}

export default App;
