import React from 'react';
import { Grid, Modal } from 'semantic-ui-react';
import OrderForm from './OrderForm'
import './ModalOrder.scss';

export default function ModalPublication(props) {
    const { show, setShow} = props;

    const onClose = () => setShow(false);

    return (
        <Modal className="modal-order" open={show} onClose={onClose}>
            <Grid>
                <Grid.Column>
                    <OrderForm />
                </Grid.Column>
            </Grid>
        </Modal>
    )
}
