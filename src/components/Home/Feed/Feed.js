import React, { Fragment, useState } from 'react';
import { Image, Button } from 'semantic-ui-react';
import './Feed.scss';
import { map } from 'lodash';
import logo from '../../../assets/png/logo.png';
import ModalPublication from '../../Modal/ModalPublication';

export default function Feed(props) {
    const {products} = props;
    const [showModal, setShowModal] = useState(false);
    const [productSelect, setProductSelect] = useState(null);

    const openPublication = (product) => {
        setProductSelect(product); 
        setShowModal(true);
    }

    return (
        <Fragment>
            <div className="feed">
            {map(products, (product, index) => (
                <div className="cardProduct" key={index} onClick={() => openPublication(product)}>
                    <p className="cardTitle">
                        {product.titulo.length <= 52 
                            ? 
                                product.titulo 
                            : 
                                'titulo' 
                        }
                    </p>

                    <Image 
                        className="cardImage" 
                        src={product.imagen ? product.imagen : logo} 
                    />

                    <Button primary>{product.precio}</Button>
                </div>
            ))}
            </div>
            {showModal && (
                <ModalPublication
                    show={showModal} 
                    setShow={setShowModal}
                    publication={productSelect}
                />
            )}
        </Fragment>
    )
}
