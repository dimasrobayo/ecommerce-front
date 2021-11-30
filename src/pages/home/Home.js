import React, { useState, useEffect } from 'react';
import Feed from '../../components/Home/Feed';
import { Grid } from 'semantic-ui-react';
import './Home.scss';
import Filters from '../../components/Home/Filters';
import { BACKEND } from '../../Store/Constants';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(BACKEND + 'products',
        {
            headers: {
                'Accept':  'application/json',
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
            <Grid.Column className="home__left" width={13}>
                <Feed products={products} />
            </Grid.Column>

            <Grid.Column className="home__right" width={3}>
                <Filters 
                    setProducts={setProducts}
                />
            </Grid.Column>
        </Grid>
    )
}
