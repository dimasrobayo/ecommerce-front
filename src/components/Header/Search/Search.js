import React, { useState } from 'react';
import { Search as SearchSU, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ImageNotFound from '../../../assets/png/avatar.png'
import './Search.scss';

export default function Search() {
    const [search, setSearch] = useState();
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        if (e.target.value){
            setSearch(e.target.value)
        }else{
            setSearch(null); 
        }
    }

    const handleResultSelect = () => {
        setSearch(null);
        setResults([]);
    }

    return (
        <SearchSU 
            className="search-users"
            fluid
            input={{ icon: "search", iconPosition: "left" }}
            value={search || ""}
            onSearchChange={onChange}
            onResultSelect={handleResultSelect}
            results={results}
            resultRenderer={(e) => <ResultSearch data={e} />}
        />
    )
}

function ResultSearch({data}) {
    return (
        <Link className="search-users__item" to={`/${data.username}`}>
            <Image src={data.avatar || ImageNotFound } />
            <div>
                <p>{data.title}</p>
                <p>{data.username}</p>
            </div>
        </Link>
    )
}
