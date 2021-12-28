import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewsFeed = () => {

    const [ articles, setArticles ] = useState(null)

    useEffect(() => {

        const options = {
        method: 'GET',
        url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
        headers: {
            'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setArticles(response.data) 
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    console.log(articles)

    const first4Articles = articles?.slice(0, 4)

    return (
        <div className=''>
            <h2 className='font-bold text-3xl m-4 '>News Feed</h2>
            {first4Articles?.map( (article, index) => (<div className=' md:h-full  max-w-md bg-white text-gray-900 p-4 m-4 flex flex-col  shadow-md  rounded' key={index}>
                <p> {article.title} </p>
                <a href={article.url} className='text-blue-500'> {article.url} </a>
                
                </div>))}
        </div>
    )
}

export default NewsFeed
