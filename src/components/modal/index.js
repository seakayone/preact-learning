import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Modal = ({ buttontxt = "Click Me.", header, content, footer }) => {

    const [hideModal, setHideModal] = useState(true);
    return (
        <span>
            <a href="#"
                onClick={() => setHideModal((showModal) => !showModal)}
                class={style.openmodal}>{buttontxt}</a>
            < div className={`${style.modaloverlay} ${hideModal ? style.hidden : ""}`}>
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
        </span>
    );
};

export default Modal;