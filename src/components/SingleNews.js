import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from './Loading';

export default function SingleNews() {

    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

    const [isLoading, setLoading] = useState(true)
    const [news, setNews] = useState([]);
    const { source_id } = useParams();
    const baseUrl = `https://newsapi.org/v2/top-headlines?sources=${source_id}&apiKey=${API_KEY}`

    useEffect(() => {
      axios.get(baseUrl).then((response) => {
        setNews(response.data.articles);
        console.log(response.data);
        setLoading(false)
      });
    }, []);

    return(
            <div class='container'>

            {isLoading ? <Loading /> :
                

                <div class="row">

                {news.map(source => (

                <div class='col-md-9 col-sm-12 col-lg-9'>

                <div class="card card-single-article">
                <div class="card-body single">
                    <h2 key={source.title} class="card-title" style={{ textDecoration: 'underline', color: 'black' }}>{source.title}</h2>
                    <h6 key={source.source.name} class="card-text text-muted">Source : <b>{source.source.name}</b></h6>
                    <div className="pub-auth">
                    <p key={source.author} class="card-text"><small class="text-muted">Author : <b>{source.author ? source.author : 'Unknown'}</b></small></p> 
                    <p key={source.publishedAt} class="card-text"><small class="text-muted">Published On : <b>{source.publishedAt}</b></small></p>
                    </div>
                    <p style={{ color: 'black' }} key={source.description} class="card-text">{source.description}</p>                
                    
                    
                    <a key={source.url} class="btn btn-outline-success" href={source.url} rel="noopener noreferrer" target='_blank' role="button">View Full Story</a>
                </div>
                <img key={source.urlToImage} alt={source.source.name} className="single-article-img" src={source.urlToImage} />
                </div>

                <br />
                </div>
                
                
                
                ))}
                </div>
              }

        </div>
    )

}