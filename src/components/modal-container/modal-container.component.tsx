import React from 'react';
import {useStore} from "../../stores/store";
import {observer} from "mobx-react-lite";
import {Backdrop, Fade, Modal} from "@material-ui/core";

const ModalContainer = () => {
    const  {modalStore} = useStore();

    return (
        <Modal
            open={modalStore.modal.open}
            onClose={modalStore.closeModal}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
            BackdropComponent={Backdrop}
        >
            <Fade in={modalStore.modal.open}>
                <div>
                    {modalStore.modal.body}
                </div>
            </Fade>
        </Modal>
    );
};

export default observer(ModalContainer);
