import React from 'react';
import { Grid, Modal, Image } from 'semantic-ui-react';
import Comments from '../../Publications/Comments';
import Actions from './Action';
import './ModalPublication.scss';

export default function ModalPublication(props) {
    const { show, setShow, publication} = props;
    console.log()

    const onClose = () => setShow(false);

    return (
        <Modal className="modal-publication" open={show} onClose={onClose}>
            <Grid>
                <Grid.Column className="modal-publication__left" width={10}>
                    <p></p>
                    <Image 
                        className="modal-publication__left__picture" 
                        src={publication.imagen}
                    />
                </Grid.Column>
                <Grid.Column className="modal-publication__right" width={6}>
                    <Comments publication={publication} />
                    <Actions publication={publication} />
                </Grid.Column>
            </Grid>
        </Modal>
    )
}
