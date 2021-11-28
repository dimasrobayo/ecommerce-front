import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import ModalPublication from '../../Modal/ModalPublication';
import ReactPlayer from 'react-player';
import './PreviewPublications.scss';

export default function PreviewPublications(props) {
    const { publication } = props;
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="preview-publication" onClick={() => setShowModal(true)}>
                {publication.typeFile === "image" ? (
                    <Image className="preview-publication__image" src={publication.file} />
                ) : (
                    <ReactPlayer  
                        className="preview-publication__video"
                        url = {publication.file}
                        width= "100%"
                        height= "100%"
                        controls
                        muted
                    />    
                )}
            </div>
            <ModalPublication show={showModal} setShow={setShowModal} publication={publication} />
        </>
    )
}
