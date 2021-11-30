import React from 'react';
import { Icon } from 'semantic-ui-react';
import { BACKEND } from '../../../Store/Constants';
import './Filters.scss';

export default function Filters(props) {
    const { setProducts } = props;

    const filterProducts = (orderProducts) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({orderProducts: orderProducts})
        };
        fetch(BACKEND + 'filters', requestOptions)
        .then(results => results.json())
        .then(data => {
            setProducts(data.products);
        });
    }

    return (
        <div className="filters">
            <h3>Filtrar</h3>
                <div className="filters__user" onClick={() => filterProducts(1)}>
                    <Icon name='angle right' size='large' />
                    <span>Titulo</span>
                </div>
                <div className="filters__user" onClick={() => filterProducts(2)}>
                    <Icon name='angle right' size='large' />
                    <span>Menor Precio</span>
                </div>
                <div className="filters__user" onClick={() => filterProducts(3)}>
                    <Icon name='angle right' size='large' />
                    <span>Mayor Precio</span>
                </div>
                <div className="filters__user" onClick={() => filterProducts(4)}>
                    <Icon name='angle right' size='large' />
                    <span>Fecha de Inicio</span>
                </div>
        </div>
    )
}
