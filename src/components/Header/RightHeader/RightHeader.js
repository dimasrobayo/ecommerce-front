import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ImageNoFound from '../../../assets/png/avatar.png';
import './RightHeader.scss';

export default function RightHeader() {

    return (
        <>
            <div className="right-header">
                <Link to="/">
                    <Icon name='home' size='large' />
                </Link>

                <Link to="/shopping">
                    <Icon name='shopping cart' size='large' />
                </Link>

                <Image src={ImageNoFound} avatar />
            </div>
        </>
    )
}
