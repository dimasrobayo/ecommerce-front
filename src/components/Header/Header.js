import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import logo from '../../assets/png/logo.png';
import './Header.scss';
import RightHeader from './RightHeader';
import SearchSU from './Search';

export default function Header() {
    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={3} className="header__logo">
                        <Link to="/">
                            <Image src={logo} alt="besocial" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10} className="header__search">
                        <SearchSU />
                    </Grid.Column>
                    <Grid.Column width={3} className="header__right">
                        <RightHeader />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
