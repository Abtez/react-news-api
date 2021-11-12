import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Loading from './Loading';


export default function MainNews() {

    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

    const [isLoading, setLoading] = useState(true)
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const baseUrl = `https://newsapi.org/v2/sources?country=us&category=${category}&apiKey=${API_KEY}`

    useEffect(() => {
      axios.get(baseUrl).then((response) => {
        setArticles(response.data.sources);
        console.log(process.env);
        setLoading(false)
        setCategory('general');
      });
    }, [baseUrl]);

    return(

      <div className='container'>

      {isLoading ? <Loading /> :

        <div className="container">

        {articles.map(article => (

            <div>
            <div className="jumbotron jumbotron-fluid">
            <h1 key={article.name} className="display-4">{article.name}</h1>
            <p key={article.description} className="lead">{article.description}</p>
            <hr className="my-4" />
            <p className="category" key={article.description}>Category : {article.category}</p>
            <Link params={{ source_id: article.id }} to={'single-news-source/' + article.id}>
            <a key={article.id} className="btn btn-primary btn-lg" href={'single-news-source/' + article.id}>More From This Source</a>
            </Link>
            </div>
            <br />
            </div>
        ))}
        

        </div>

      }

        </div>
    )

    
}
      