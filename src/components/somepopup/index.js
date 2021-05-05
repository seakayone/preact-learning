import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Somepopup = () => {

    const [hideModal, setHideModal] = useState(true);
    return (
        <div>
            <a href="#"
                onClick={() => setHideModal((showModal) => !showModal)}
                class={style.openmodal}>Click me</a>
            <div className={`${style.modaldialog} ${hideModal ? style.hidden : ""}`}>
                <div className={style.modalheader}>
                    <a href="#"
                        onClick={() => setHideModal((showModal) => !showModal)}
                        class={style.closemodal}>X</a>
                    <h1>Hello Modal</h1>
                </div>
                <div className={style.modalbody}>
                    Clicked {hideModal ? "true" : "falsch"} times.
                </div>
                <div className={style.modalfooter}></div>
            </div>
        </div>
    );
};

export default Somepopup;