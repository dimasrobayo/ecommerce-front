import React from 'react';
import { Grid, Modal, Image } from 'semantic-ui-react';
import DetailsProduct from '../../Product/DetailsProduct';
import './ModalPublication.scss';

export default function ModalPublication(props) {
    const { show, setShow, publication} = props;

    const onClose = () => setShow(false);

    return (
        <Modal className="modal-publication" open={show} onClose={onClose}>
            <Grid>
                <Grid.Column className="modal-publication__left" width={10}>
                    <Image 
                        className="modal-publication__left__picture" 
                        src={publication.imagen}
                    />
                </Grid.Column>
                <Grid.Column className="modal-publication__right" width={6}>
                    <DetailsProduct publication={publication} />
                </Grid.Column>
            </Grid>
        </Modal>
    )
}
