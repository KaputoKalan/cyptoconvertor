import React, { useState } from 'react'
import axios from 'axios'
import ExchangeRate from './ExchangeRate'

const Table = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount , setAmount] = useState(1)
    const [ exchangeRate, setExchangeRate ] = useState(0)
    const [ primaryCurrencyExchanged, setPrimaryCurrencyExchanged ] = useState('BTC')
    const [ secondaryCurrencyExchanged, setSecondaryCurrencyExchanged ] = useState('BTC')
    const [ result, setResult ] = useState('')

     const convert = () => {

        const options = {
          method: 'GET',
          url: 'https://alpha-vantage.p.rapidapi.com/query',
          params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
          headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
        }
        
        axios.request(options).then(function (response) {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
            setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
            setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
        }).catch(function (error) {
            console.error(error)
        })
     }   

     console.log(exchangeRate)
    return (
        <div className='input-box '>
            <table >
                <tbody>
                    <tr>
                        <td>Primary Currency: </td>
                        <td>
                            <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type='number'
                            name='currency-amount-1' 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>
                        <td>
                            <select
                            value={chosenPrimaryCurrency}
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                             name='currency-option-1'
                             class="m-4 text-gray-900 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {currencies.map( (currency, index) => (<option key={index} className='text-gray-900'>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className=' md:w-44'>Secondary Currency:</td>
                        <td>
                            <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='currency-amount-2' 
                            value={result}
                            disabled={true}
                            
                            />
                        </td>
                        <td>
                            <select
                             value={chosenSecondaryCurrency}
                             onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                             name='currency-option-2'
                             class="m-4 text-gray-900 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                {currencies.map( (currency, index) => (<option key={index} className='text-gray-900'>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table> 
            <button
            class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            onClick={convert}
            >Convert</button>
            <ExchangeRate 
                exchangeRate={exchangeRate}
                chosenPrimaryCurrency={primaryCurrencyExchanged}
                chosenSecondaryCurrency={secondaryCurrencyExchanged}
            />
        </div>
    )
}

export default Table
