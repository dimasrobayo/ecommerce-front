import React from 'react';
import { useSelector } from 'react-redux'
import './shopping.scss';

export default function Shopping() {
    const shoppingList = useSelector((state) => state.shopping);

    console.log(shoppingList)
    return (
        <div>
            <h1>estamos en shopping page component</h1>
        </div>
    )
}
