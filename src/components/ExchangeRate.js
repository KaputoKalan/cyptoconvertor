import React from 'react'

const ExchangeRate = ({exchangeRate, chosenSecondaryCurrency, chosenPrimaryCurrency}) => {
    return (
        <div className='w-full h-full bg-white text-gray-900 p-10 mt-4 flex flex-col md:flex-row justify-between  shadow-md items-center rounded'>
            <h3 className='font-bold'> Exchange Rate: </h3>
            <h1> {exchangeRate} </h1>
            <p> {chosenPrimaryCurrency} to {chosenSecondaryCurrency} </p>
        </div>
    )
}

export default ExchangeRate
