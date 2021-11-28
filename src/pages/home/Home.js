import React, { useState, useEffect } from 'react';
import Feed from '../../components/Home/Feed';
import { Grid } from 'semantic-ui-react';
import './Home.scss';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.9:8001/api/products',
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
        })
        .then(results => results.json())
        .then(data => {
            setProducts(data.data.products);
        });
    }, [])

    return (
        <Grid className="home" columns={4} doubling stackable>
            <Grid.Column className="home__left" width={16}>
                <Feed products={products} />
            </Grid.Column>
        </Grid>
    )
}
