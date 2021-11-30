import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Button } from 'semantic-ui-react';
import { map } from 'lodash';
import logo from '../../assets/png/logo.png';
import './shopping.scss';
import { shoppingRemove } from '../../Store/features/shopping/shoppingSlice';
import { shoppingClearAmount } from '../../Store/features/shopping/shoppingTotalSlice';
import ModalOrder from '../../components/Modal/ModalOrder';

export default function Shopping() {
    const shoppingTotal = useSelector((state) => state.shoppingAmount.value);
    const [showModal, setShowModal] = useState(false);
    const shoppingList = useSelector((state) => state.shopping.shopping);
    const {shopping} = shoppingList;
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(shoppingRemove());
        dispatch(shoppingClearAmount());
        localStorage.removeItem('product');
    }

    const openShopping = () => {
        setShowModal(true);
    }

    function FormatNumber({ number }) {
        return (
            <span style={{ color: "red" }}>
                {new Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "CLP"
                }).format(number)}
            </span>
        );
    }

    return (
        <Fragment>
            <div className="listProducts">
            {map(shoppingList, (product, index) => (

                <div className="cardProduct" key={index}>
                    <p className="cardTitle">
                        {product.titulo}
                    </p>

                    <Image 
                        className="cardImage" 
                        src={product.imagen ? product.imagen : logo} 
                    />

                    <Button primary>{product.precio}</Button>
                </div>
            ))}
            </div>
            <h4>Total a Pagar: <FormatNumber number={shoppingTotal} /></h4>
            <Button primary onClick={clearCart}>Vaciar carrito</Button>
            <Button onClick={openShopping}>Validar Compra</Button>
            {showModal && (
                <ModalOrder 
                    show={showModal} 
                    setShow={setShowModal}
                    shopping={shopping}
                />
            )}
        </Fragment>
    )
}