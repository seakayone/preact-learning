import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import style from './style.css';

function useOnClickOutsideRef(callback, isHidden, initialValue = null) {
    const elementRef = useRef(initialValue)
    useEffect(() => {
        function handler(event) {
            if (!isHidden && !elementRef.current?.contains(event.target)) {
                callback()
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [callback])
    return elementRef
}

const Modal = ({ buttontxt = "Click Me.", header, content, footer }) => {

    const [hideModal, setHideModal] = useState(true);
    const closeModal = () => setHideModal(true);
    const openModal = () => setHideModal(false);
    const modalRef = useOnClickOutsideRef(closeModal, hideModal)
    return (
        <>
            <a href="#" onClick={openModal}>{buttontxt}</a>
            <div className={`${style.modaloverlay} ${hideModal ? style.hidden : ""}`} >
                <div id="modal" ref={modalRef} className={style.modaldialog}>
                    <div className={style.modalheader}>
                        <a href="#" onClick={closeModal} class={style.closemodal}>X</a>
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
        </>
    );
};

export default Modal;