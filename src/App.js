import React from 'react'
import CurrencyConverter from './components/CurrencyConverter'
import NewsFeed from './components/NewsFeed'


const App = () => {
    return (
        <div className=' text-white h-screen p-10 md:p-0 flex flex-col md:flex-row justify-around items-center mt-48 md:mt-0'>
            
            <CurrencyConverter className='mr-4' />
            <NewsFeed />
            
        </div>
    )
}

export default App
