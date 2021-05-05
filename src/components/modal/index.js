import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Modal = ({ header, content, footer }) => {

    const [hideModal, setHideModal] = useState(true);
    return (
        <div>
            <a href="#"
                onClick={() => setHideModal((showModal) => !showModal)}
                class={style.openmodal}>Click me</a>
            <div className={`${style.modaloverlay} ${hideModal ? style.hidden : ""}`}>
                <div className={style.modaldialog}>
                    <div className={style.modalheader}>
                        <a href="#"
                            onClick={() => setHideModal((showModal) => !showModal)}
                            class={style.closemodal}>X</a>
                        <h1>{header}</h1>
                    </div>
                    <div className={style.modalbody}>
                        {content}
                    </div>
                    <div className={style.modalfooter}>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;