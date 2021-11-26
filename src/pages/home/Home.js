import React from 'react';
import Feed from '../../components/Home/Feed';
import { Grid } from 'semantic-ui-react';
import './Home.scss';

export default function Home() {
    return (
        <Grid className="home" columns={4} doubling stackable>
            <Grid.Column className="home__left" width={16}>
                <Feed />
            </Grid.Column>
        </Grid>
    )
}
