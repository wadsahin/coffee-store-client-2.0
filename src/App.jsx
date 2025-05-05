import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  return (
    <div className='mx-20'>
      <h1 className='text-5xl font-bold text-orange-800 mb-3'>Coffee Store 2.0</h1>
      <hr />
      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App;