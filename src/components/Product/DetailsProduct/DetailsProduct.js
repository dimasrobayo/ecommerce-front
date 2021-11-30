import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { shoppingAdd } from '../../../Store/features/shopping/shoppingSlice';
import { Button } from 'semantic-ui-react';
import './DetailsProduct.scss';
import { shoppingAmount } from '../../../Store/features/shopping/shoppingTotalSlice';

export default function DetailsProduct(props) {
    const {publication} = props;
    const dispatch = useDispatch();
 
    const getAddCart = (publication) => {
        dispatch(shoppingAdd(publication));  
        dispatch(shoppingAmount(publication.precio));

        localStorage.setItem('product', JSON.stringify(publication));
    }
    
    return (
        <div className="comments">
            <Link key={publication.id} to='/' className="comment">
                <div>
                    <p>{publication.titulo}</p>
                    <p>{publication.descripcion}</p>
                    <p>{publication.precio}</p>
                </div>
            </Link>
            <Button 
                className="buttonShopping" 
                primary
                onClick={() => getAddCart(publication)}
            >
                Agregar al Carrito
            </Button>
        </div>
    )
}
